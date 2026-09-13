"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "@/components/Reveal";
import type { Feature } from "@/data/features";
import { cn } from "@/lib/utils";

export default function FeatureBanner({ feature, flip }: { feature: Feature; flip?: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const img = imgRef.current;
    const section = sectionRef.current;
    if (!img || !section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.fromTo(
      img,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} aria-label={feature.title} className="relative overflow-hidden rounded-xl border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={feature.image}
        alt={feature.title}
        loading="lazy"
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: flip
            ? "linear-gradient(90deg, rgba(15,13,11,0.88) 20%, rgba(15,13,11,0.25) 70%)"
            : "linear-gradient(270deg, rgba(15,13,11,0.88) 20%, rgba(15,13,11,0.25) 70%)",
        }}
      />
      <Reveal className={cn("relative px-6 py-20 md:px-12 md:py-32", flip ? "mr-auto max-w-xl" : "ml-auto max-w-xl")}>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">FEATURE</p>
        <h2 className="font-display mt-4 text-3xl font-bold text-balance text-white md:text-4xl">{feature.title}</h2>
        <p className="mt-4 leading-7 text-white/85">{feature.description}</p>
      </Reveal>
    </section>
  );
}
