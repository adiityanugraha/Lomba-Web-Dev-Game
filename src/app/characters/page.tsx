import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TravelerCard from "@/components/TravelerCard";
import { regions } from "@/data/regions";

export const metadata: Metadata = {
  title: "Characters — Octopath Traveler",
  description: "Meet the eight travelers of Orsterra and the regions they call home.",
};

export default function CharactersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">EIGHT TRAVELERS</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">
          Choose whose story begins
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-foreground/80">
          Each traveler starts in a different corner of Orsterra with their own job, Path Action and reason to leave
          home. Pick one to see their region on the map.
        </p>
      </Reveal>
      <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {regions.map((r, i) => (
          <Reveal as="li" key={r.slug} delay={(i % 4) * 0.06}>
            <TravelerCard region={r} />
          </Reveal>
        ))}
      </ul>
    </main>
  );
}
