"use client";

import { useRef } from "react";
import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";
import { media } from "@/data/media";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function MediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const imgs = section.querySelectorAll('img');
    imgs.forEach((img) => {
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">POSTCARDS</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-balance md:text-4xl">Orsterra in frames</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Captured from the game. Drag, swipe, or use the arrows to look through all {media.length} screenshots.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
        <Carousel
          ariaLabel="Game screenshots"
          slides={media.map((m) => (
            <figure key={m.image} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.image} alt={m.alt} loading="lazy" className="aspect-video w-full object-cover" />
              <figcaption className="border-t border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                {m.alt}
              </figcaption>
            </figure>
          ))}
        />
      </Reveal>
    </div>
  );
}
