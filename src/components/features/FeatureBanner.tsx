import Reveal from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import type { Feature } from "@/data/features";
import { cn } from "@/lib/utils";

/** Server component: static banner image, no per-banner scroll scrub. */
export default function FeatureBanner({ feature, flip }: { feature: Feature; flip?: boolean }) {
  return (
    <section aria-label={feature.title} className="relative overflow-hidden rounded-xl border border-border [content-visibility:auto] [contain-intrinsic-size:auto_600px]">
      <SmartImage
        src={feature.image}
        alt={feature.title}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: flip
            ? "linear-gradient(90deg, rgba(15,13,11,0.88) 20%, rgba(15,13,11,0.25) 70%)"
            : "linear-gradient(270deg, rgba(15,13,11,0.88) 20%, rgba(15,13,11,0.25) 70%)",
        }}
      />
      <Reveal className={cn("relative px-6 py-20 md:px-12 md:py-32", flip ? "mr-auto max-w-xl" : "ml-auto max-w-xl")}>
        <h2 className="font-display text-3xl font-bold text-balance text-white md:text-4xl">{feature.title}</h2>
        <p className="mt-4 leading-7 text-white/85">{feature.description}</p>
      </Reveal>
    </section>
  );
}
