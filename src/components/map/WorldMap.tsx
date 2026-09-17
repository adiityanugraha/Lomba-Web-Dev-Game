"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { gsap, useGSAP } from "@/lib/gsap";
import { MAP_HEIGHT, MAP_WIDTH, regions, type Region } from "@/data/regions";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function WorldMap() {
  const router = useRouter();
  const wrapperRef = useRef<ReactZoomPanPinchRef>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<HTMLImageElement>(null);
  const markerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState<Region | null>(null);
  const [leaving, setLeaving] = useState(false);
  // Desktop: the whole map fits the 3:2 stage, so user zoom/pan is off and only the
  // click-to-zoom transition remains. Mobile keeps pinch + drag.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Spotlight: move the mask to the hovered hotspot, fade the full-colour layer in/out.
  useGSAP(
    () => {
      const lit = litRef.current;
      if (!lit) return;
      if (active) {
        lit.style.setProperty("--mx", `${active.position.x}%`);
        lit.style.setProperty("--my", `${active.position.y}%`);
      }
      gsap.to(lit, {
        opacity: active ? 1 : 0,
        duration: reduceMotion() ? 0 : 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    },
    { dependencies: [active] },
  );

  const go = (r: Region) => {
    if (leaving) return;
    setLeaving(true);
    const href = `/map/${r.slug}`;
    const marker = markerRefs.current[r.slug];
    const zoomToElement = wrapperRef.current?.zoomToElement;
    if (reduceMotion() || !marker || !zoomToElement || !stageRef.current) {
      router.push(href);
      return;
    }
    zoomToElement(marker, 2.5, 600, "easeOut");
    gsap.to(stageRef.current, {
      opacity: 0,
      duration: 0.45,
      delay: 0.3,
      ease: "power2.in",
      onComplete: () => router.push(href),
    });
  };

  return (
    <div
      ref={stageRef}
      className="map-stage aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-card sm:aspect-[4/3] md:aspect-[3/2]"
    >
      <TransformWrapper
        ref={wrapperRef}
        fitOnInit="cover"
        centerOnInit
        minScale={0.2}
        maxScale={4}
        limitToBounds
        wheel={{ step: 0.15, disabled: isDesktop }}
        pinch={{ disabled: isDesktop }}
        panning={{ velocityDisabled: true, disabled: isDesktop }}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
          <div className="relative select-none" style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}>
            {/* Phones get the 768px file; the layout box stays MAP_WIDTH x MAP_HEIGHT either way. */}
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/map/orsterra-768.jpg" />
              <img
                src="/images/map/orsterra.jpg"
                alt="Map of Orsterra"
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                draggable={false}
                fetchPriority="high"
                className="map-dim absolute inset-0 h-full w-full"
              />
            </picture>
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/map/orsterra-768.jpg" />
              <img
                ref={litRef}
                src="/images/map/orsterra.jpg"
                alt=""
                aria-hidden
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                draggable={false}
                className="map-lit pointer-events-none absolute inset-0 h-full w-full"
              />
            </picture>

            {regions.map((r) => (
              <div
                key={r.slug}
                // Active hotspot on top so its label/halo is never hidden by a neighbouring sprite
                // (KeepScale's transform makes a stacking context, so z-index must sit on this wrapper).
                className={active?.slug === r.slug ? "absolute z-10" : "absolute"}
                style={{ left: `${r.position.x}%`, top: `${r.position.y}%` }}
              >
                <KeepScale>
                  <button
                    ref={(el) => {
                      markerRefs.current[r.slug] = el;
                    }}
                    type="button"
                    onMouseEnter={() => {
                      setActive(r);
                      router.prefetch(`/map/${r.slug}`);
                    }}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(r)}
                    onBlur={() => setActive(null)}
                    onClick={() => go(r)}
                    aria-label={`${r.name} — ${r.traveler.name}, ${r.traveler.job}`}
                    className="map-hotspot relative block -translate-x-1/2 -translate-y-full"
                  >
                    <span className="map-label pointer-events-none absolute -top-8 left-1/2 whitespace-nowrap rounded bg-background/90 px-2 py-1 font-display text-xs font-semibold tracking-wide text-primary">
                      {r.name}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.traveler.sprite}
                      alt=""
                      width={26}
                      height={38}
                      draggable={false}
                      className="map-marker block h-[38px] w-[26px] md:h-[50px] md:w-[34px]"
                    />
                  </button>
                </KeepScale>
              </div>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
