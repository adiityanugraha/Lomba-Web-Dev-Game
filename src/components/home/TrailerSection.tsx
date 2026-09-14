"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { media } from "@/data/media";

const TRAILER_ID = "ZQD9h8gUXb0";

export default function TrailerSection() {
  const [playing, setPlaying] = useState(false);
  const poster = media[5];

  return (
    <section id="trailer" aria-label="Trailer" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">TRAILER</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-balance md:text-4xl">
              Watch the journey begin
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            The 2019 gameplay trailer, cut from in-engine footage across Orsterra.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
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
                className="aspect-video w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-background/35 transition-colors duration-500 group-hover:bg-background/25"
                aria-hidden
              />
              <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                  <Play className="size-6 fill-current" />
                </span>
              </span>
              <span className="absolute bottom-3 left-3 rounded bg-background/80 px-3 py-1.5 font-display text-sm font-semibold tracking-wide text-foreground">
                OCTOPATH TRAVELER Gameplay Trailer (2019)
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
