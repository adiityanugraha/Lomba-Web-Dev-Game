import { SmartImage } from "@/components/SmartImage";

type Props = { image: string; name: string; tagline: string };

/** Server component: static hero, no scroll listeners, no animation library. */
export default function RegionHero({ image, name, tagline }: Props) {
  return (
    <section aria-label={name} className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <SmartImage src={image} alt="" priority sizes="100vw" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>
      <div className="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-4 pt-32 pb-12 sm:px-6 md:min-h-[60vh] md:pt-40 md:pb-16">
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">
          REGION
        </p>
        <h1 className="font-display gold-glow-strong mt-4 text-4xl font-bold text-balance md:text-6xl">
          {name}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-foreground/85 md:text-lg">
          {tagline}
        </p>
      </div>
    </section>
  );
}
