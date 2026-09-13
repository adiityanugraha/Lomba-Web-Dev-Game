import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { platforms } from "@/data/platforms";

export default function AvailableOn() {
  return (
    <section aria-label="Available on" className="relative overflow-hidden rounded-xl border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/background_available_on.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/72" aria-hidden />

      <Reveal className="relative px-6 py-16 text-center md:py-24">
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">WHERE TO PLAY</p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold text-balance text-white md:text-4xl">
          Take the road on your platform
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">
          The journey is the same everywhere. Pick the store you already use and start with any of the eight travelers.
        </p>

        <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          {platforms.map((p) =>
            p.comingSoon || !p.url ? (
              <li key={p.name} className="flex min-h-[76px]">
                <div className="flex w-full flex-1 cursor-not-allowed flex-col items-center justify-center rounded-md border border-white/20 bg-white/5 px-3 py-3 text-center">
                  <span className="flex items-center justify-center gap-2 text-sm font-semibold text-white/60">
                    <Gamepad2 className="size-4 shrink-0" aria-hidden />
                    <span className="leading-snug">{p.name}</span>
                  </span>
                  <span className="mt-1 text-xs text-white/50">Coming soon</span>
                </div>
              </li>
            ) : (
              <li key={p.name} className="flex min-h-[76px]">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-white px-3 py-3 text-center text-sm font-semibold text-neutral-900 transition-colors hover:bg-primary"
                >
                  <Gamepad2 className="size-4 shrink-0" aria-hidden />
                  <span className="leading-snug">{p.name}</span>
                </a>
              </li>
            ),
          )}
        </ul>

        <Link
          href="/download"
          className="mt-8 inline-flex min-h-11 items-center rounded-md px-5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          See requirements
          <span aria-hidden className="ml-2">
            &rarr;
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
