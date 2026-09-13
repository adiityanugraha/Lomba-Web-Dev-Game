"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { media } from "@/data/media";

const TRAILER_ID = "ZQD9h8gUXb0";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);
  const poster = media[5];

  useGSAP(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.to(bg, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
    gsap.fromTo(
      "[data-hero-fade]",
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power2.out", delay: 0.1 },
    );
  }, []);

  return (
    <section ref={sectionRef} aria-label="Octopath Traveler" className="relative overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 -bottom-24" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-32 pb-16 text-center sm:px-6 md:pt-40 md:pb-24">
        <h1
          data-hero-fade
          className="font-display max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-5xl md:text-6xl"
        >
          Eight travelers. One world of Orsterra.
        </h1>
        <p data-hero-fade className="mt-5 max-w-xl text-base leading-7 text-foreground/85 md:text-lg md:leading-8">
          A fan tribute to the HD-2D journey: pick a traveler, cross Orsterra, and break every shield in your way.
        </p>
        <div data-hero-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/map"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--accent-hover)]"
          >
            Explore the Map
          </Link>
          <a
            href="#trailer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-foreground/30 px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Watch Trailer
          </a>
        </div>

        <div data-hero-fade id="trailer" className="mt-12 w-full max-w-4xl scroll-mt-24">
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
                  src={poster?.image ?? "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic_2.jpg"}
                  alt={poster?.alt ?? "Battle scene from Octopath Traveler"}
                  className="aspect-video w-full object-cover"
                  loading="eager"
                />
                <span className="absolute inset-0 bg-background/35 transition-colors group-hover:bg-background/25" aria-hidden />
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                    <Play className="size-6 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 rounded bg-background/80 px-2.5 py-1 text-xs text-foreground">
                  Trailer, 16:9
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
