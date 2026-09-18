"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import {
  KeepScale,
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { MAP_HEIGHT, MAP_WIDTH, regions, type Region } from "@/data/regions";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function WorldMap() {
  const router = useRouter();
  const wrapperRef = useRef<ReactZoomPanPinchRef>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Region | null>(null);
  const [leaving, setLeaving] = useState(false);
  const markerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = (r: Region) => {
    if (leaving) return;
    setLeaving(true);
    const href = `/map/${r.slug}`;
    const marker = markerRefs.current[r.slug];
    const zoomToElement = wrapperRef.current?.zoomToElement;
    if (reduceMotion() || !marker || !zoomToElement) {
      router.push(href);
      return;
    }
    zoomToElement(marker, 2.5, 600, "easeOut");
    // Match the old timing: zoom ~600ms, then navigate.
    window.setTimeout(() => router.push(href), 620);
  };

  // Spotlight position follows the hovered hotspot; the lit layer cross-fades in CSS.
  const litStyle: CSSProperties = {
    opacity: active ? 1 : 0,
    ["--mx" as string]: `${active?.position.x ?? 50}%`,
    ["--my" as string]: `${active?.position.y ?? 50}%`,
  };

  return (
    <div
      ref={stageRef}
      className="map-stage aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-card sm:aspect-[4/3] md:aspect-[3/2]"
      style={{ opacity: leaving ? 0 : 1, transition: leaving ? "opacity 0.45s ease-in 0.3s" : undefined }}
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
                decoding="async"
                className="map-dim absolute inset-0 h-full w-full"
              />
            </picture>
            <picture className="contents">
              <source media="(max-width: 767px)" srcSet="/images/map/orsterra-768.jpg" />
              <img
                src="/images/map/orsterra.jpg"
                alt=""
                aria-hidden
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                draggable={false}
                decoding="async"
                style={litStyle}
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
                      decoding="async"
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
