import FeatureBanner from "@/components/features/FeatureBanner";
import { features } from "@/data/features";

export default function FeaturesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">GAMEPLAY</p>
      <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">How the journey plays</h1>
      <p className="mt-4 max-w-xl leading-7 text-foreground/80">
        Six systems carry the game, from picking a traveler to the look of the road itself. Each banner below covers
        one of them.
      </p>
      <div className="mt-12 space-y-6 md:space-y-8">
        {features.map((f, i) => (
          <FeatureBanner key={f.title} feature={f} flip={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
