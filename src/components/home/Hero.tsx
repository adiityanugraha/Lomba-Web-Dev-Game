"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { SmartImage } from "@/components/SmartImage";

const HERO_SRC = "/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.jpg";
const HERO_WEBP = "/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.webp";

export default function Hero() {
  const scrollToTrailer = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("trailer")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#trailer");
  };

  return (
    <section aria-label="Octopath Traveler" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Discovered early: preload keeps LCP to one high-priority WebP fetch. */}
      <link rel="preload" as="image" href={HERO_WEBP} fetchPriority="high" />
      <div className="absolute inset-0" aria-hidden>
        <SmartImage
          src={HERO_SRC}
          alt=""
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6 md:pt-28 md:pb-20">
        <h1
          className="hero-fade font-display gold-glow-strong max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-5xl md:text-6xl"
        >
          Eight travelers. One world of Orsterra.
        </h1>
        <p
          className="hero-fade mt-4 max-w-2xl text-base leading-7 text-foreground/85 md:text-lg md:leading-8"
          style={{ animationDelay: "0.12s" }}
        >
          Eight travelers, each with their own story, job, and path across the continent of Orsterra.
          Choose who you play first, recruit the rest along the way, and face every battle
          with a system built around breaking shields and unleashing devastating boosts.
        </p>
        <div className="hero-fade mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.24s" }}>
          <Link
            href="#trailer"
            onClick={scrollToTrailer}
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
