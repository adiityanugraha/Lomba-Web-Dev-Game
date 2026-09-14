import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WorldMap from "@/components/map/WorldMap";
import RegionList from "@/components/map/RegionList";

export const metadata: Metadata = {
  title: "Map of Orsterra — Octopath Traveler",
  description: "Explore the eight regions of Orsterra and meet the traveler who calls each one home.",
};

export default function MapPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">THE CONTINENT</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">Map of Orsterra</h1>
        <p className="mt-4 max-w-xl leading-7 text-foreground/80">
          Eight regions, eight travelers. Hover a traveler to light up their homeland; select one to read their
          story. Drag to pan, scroll or pinch to zoom.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <WorldMap />
      </Reveal>
      <Reveal delay={0.15} className="mt-8">
        <h2 className="sr-only">All regions</h2>
        <RegionList />
      </Reveal>
    </main>
  );
}
