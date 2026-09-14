import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import DownloadShowcase from "@/components/download/DownloadShowcase";
import SpecCarousel from "@/components/download/SpecCarousel";

export const metadata: Metadata = {
  title: "Download — Octopath Traveler",
  description: "Where to buy Octopath Traveler and the PC system requirements.",
};

export default function DownloadPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">PLAY NOW</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">Begin your journey</h1>
        <p className="mt-4 max-w-xl leading-7 text-foreground/80">
          Octopath Traveler is available on PC and consoles. Pick your platform below, or check the PC
          requirements before you buy.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <DownloadShowcase />
      </Reveal>

      <section className="mt-16 border-t border-border pt-12" aria-labelledby="spec-heading">
        <Reveal>
          <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">PC</p>
          <h2 id="spec-heading" className="font-display mt-4 text-3xl font-bold text-balance md:text-4xl">
            Minimum &amp; Recommended Spec
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <SpecCarousel />
        </Reveal>
      </section>
    </main>
  );
}
