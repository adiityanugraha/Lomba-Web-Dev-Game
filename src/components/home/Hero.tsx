"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduce) {
      // Letterbox bars: animate closed on mount
      const tops = section.querySelectorAll<HTMLElement>(
        ".hero-letterbox--top",
      );
      const bots = section.querySelectorAll<HTMLElement>(
        ".hero-letterbox--bottom",
      );
      const bars = [...tops, ...bots];
      if (bars.length) {
        gsap.set(bars, { height: window.innerWidth >= 768 ? 64 : 48 });
        gsap.to(bars, {
          height: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.3,
          overwrite: true,
        });
      }
      gsap.to(bg, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      const overlay = overlayRef.current;
      if (overlay) {
        gsap.to(overlay, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    } else {
      // Reduced motion: bars stay at height 0, text visible immediately
      const bars = section.querySelectorAll<HTMLElement>(".hero-letterbox");
      if (bars.length) gsap.set(bars, { height: 0 });
      gsap.set("[data-hero-fade]", { opacity: 1, y: 0, filter: "blur(0px)", clearProps: "transform" });
      return;
    }
    gsap.fromTo(
      "[data-hero-fade]",
      { opacity: 0, y: 28, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        stagger: 0.14,
        ease: "expo.out",
        delay: 0.15,
        overwrite: true,
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Octopath Traveler"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div className="hero-letterbox hero-letterbox--top" aria-hidden />
      <div className="hero-letterbox hero-letterbox--bottom" aria-hidden />
      <div ref={bgRef} className="absolute inset-0 -bottom-24" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] via-transparent to-primary/[0.02]"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6 md:pt-28 md:pb-20">
        <h1
          data-hero-fade
          className="font-display gold-glow-strong max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-5xl md:text-6xl"
        >
          Eight travelers. One world of Orsterra.
        </h1>
        <p
          data-hero-fade
          className="mt-4 max-w-2xl text-base leading-7 text-foreground/85 md:text-lg md:leading-8"
        >
          Eight travelers, each with their own story, job, and path across the continent of Orsterra.
          Choose who you play first, recruit the rest along the way, and face every battle
          with a system built around breaking shields and unleashing devastating boosts.
        </p>
        <div data-hero-fade className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#trailer"
            className="btn-primary inline-flex min-h-11 items-center rounded-md px-6 text-sm font-semibold text-primary-foreground"
          >
            Watch trailer
          </Link>
          <Link
            href="/features"
            className="btn-outline inline-flex min-h-11 items-center rounded-md border px-6 text-sm font-semibold text-foreground"
          >
            How the journey plays
          </Link>
        </div>
      </div>
    </section>
  );
}
