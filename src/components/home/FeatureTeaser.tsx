"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, Map, ScrollText, Swords } from "lucide-react";
import { features } from "@/data/features";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";

const panelIcons = [Map, KeyRound, Swords, ScrollText];

export default function FeatureTeaser() {
  const [active, setActive] = useState(0);
  const thumbs = features[0]?.thumbnails ?? [];
  const titles = features.slice(1, 5);

  if (thumbs.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-10 text-center">
        <p className="text-muted-foreground">Feature images land here once the asset team fills the data file.</p>
      </div>
    );
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">WHY IT PLAYS</p>
        <h2 className="font-display mt-4 text-3xl leading-tight font-bold text-balance md:text-4xl">
          {features[0]?.title}
        </h2>
        <p className="mt-4 leading-7 text-foreground/80">{features[0]?.description}</p>
        <Link
          href="/features"
          className="btn-outline mt-6 inline-flex min-h-11 items-center rounded-md border px-5 text-sm font-semibold text-foreground"
        >
          All features
          <span aria-hidden className="ml-2 text-primary">
            &rarr;
          </span>
        </Link>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col gap-3 sm:h-[420px] sm:flex-row" role="group" aria-label="Featured gameplay">
          {thumbs.map((src, i) => {
            const Icon = panelIcons[i % panelIcons.length];
            const isActive = i === active;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                aria-label={`${titles[i]?.title ?? `Feature ${i + 1}`}: ${isActive ? "expanded" : "expand"}`}
                className={cn(
                  "card-interactive relative h-[72px] overflow-hidden rounded-lg border text-left",
                  "sm:h-full sm:min-h-0",
                  isActive && "h-72 sm:h-full",
                  isActive ? "border-primary/60 sm:flex-[3]" : "border-border sm:flex-1 hover:border-muted-foreground",
                )}
              >
                <SmartImage
                  src={src}
                  alt={titles[i]?.title ?? `Feature ${i + 1}`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive ? "scale-105" : "scale-100",
                  )}
                />
                <span
                  className="absolute inset-0"
                  aria-hidden
                  style={{ background: "linear-gradient(180deg, transparent 30%, rgba(15,13,11,0.88) 100%)" }}
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-3 sm:p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background/85 sm:size-11">
                    <Icon className="size-4 text-primary sm:size-5" aria-hidden />
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "translate-x-0 opacity-100 blur-0 delay-200"
                        : "translate-x-0 opacity-100 blur-0 sm:translate-x-3 sm:opacity-0 sm:blur-[3px] sm:delay-0",
                    )}
                  >
                    <span
                      className={cn(
                        "block text-sm leading-snug font-semibold text-white",
                        isActive ? "whitespace-normal" : "truncate",
                      )}
                    >
                      {titles[i]?.title}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
