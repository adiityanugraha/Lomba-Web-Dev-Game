"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { media } from "@/data/media";

const TRAILER_ID = "ZQD9h8gUXb0";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);
  const poster = media[5];

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
      // Reduced motion: bars stay at height 0
      const bars = section.querySelectorAll<HTMLElement>(".hero-letterbox");
      if (bars.length) gsap.set(bars, { height: 0 });
    }
    gsap.fromTo(
      "[data-hero-fade]",
      { opacity: 0 },
      { opacity: 1, y: -6,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.1,
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Octopath Traveler"
      className="relative overflow-hidden"
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

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-16 text-center sm:px-6 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" aria-hidden />
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

        <div
          data-hero-fade
          id="trailer"
          className="mt-8 w-full max-w-4xl scroll-mt-24"
        >
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
            {playing ? (
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${TRAILER_ID}?autoplay=1&rel=0`}
                title="Octopath Traveler trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play Octopath Traveler trailer"
                className="group relative block w-full cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    poster?.image ??
                    "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic_2.jpg"
                  }
                  alt={poster?.alt ?? "Battle scene from Octopath Traveler"}
                  className="aspect-video w-full object-cover"
                  loading="eager"
                />
                <span
                  className="absolute inset-0 bg-background/35 transition-colors group-hover:bg-background/25"
                  aria-hidden
                />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                    <Play className="size-6 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 rounded bg-background/80 px-3 py-1.5 font-display text-sm font-semibold tracking-wide text-foreground">
                  OCTOPATH TRAVELER Gameplay Trailer (2019)
                </span>

              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
