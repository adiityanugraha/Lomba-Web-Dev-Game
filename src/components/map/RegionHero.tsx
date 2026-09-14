"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = { image: string; name: string; tagline: string };

export default function RegionHero({ image, name, tagline }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      gsap.to(bg, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }
    gsap.fromTo(
      "[data-region-fade]",
      { opacity: 0, y: reduce ? 0 : 16 },
      { opacity: 1, y: 0, duration: reduce ? 0 : 0.8, stagger: 0.12, ease: "power2.out", delay: 0.1 },
    );
  }, []);

  return (
    <section ref={sectionRef} aria-label={name} className="relative overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 -bottom-24" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>
      <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-4 pt-32 pb-12 sm:px-6 md:min-h-[60vh] md:pt-40 md:pb-16">
        <p data-region-fade className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">
          REGION
        </p>
        <h1 data-region-fade className="font-display gold-glow-strong mt-4 text-4xl font-bold text-balance md:text-6xl">
          {name}
        </h1>
        <p data-region-fade className="mt-4 max-w-xl text-base leading-7 text-foreground/85 md:text-lg">
          {tagline}
        </p>
      </div>
    </section>
  );
}
