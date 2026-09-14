import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News — Octopath Traveler",
  description: "Releases, updates and events from the world of Octopath Traveler.",
};

export default function NewsPage() {
  const [featured, ...rest] = news;
  const headlines = rest.slice(0, 4);
  const more = rest.slice(4);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">NEWS &amp; EVENTS</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">From the road</h1>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>{featured && <NewsCard item={featured} variant="featured" />}</Reveal>
        <div className="grid content-start gap-4">
          {headlines.map((n, i) => (
            <Reveal key={n.slug} delay={0.08 + i * 0.05}>
              <NewsCard item={n} />
            </Reveal>
          ))}
        </div>
      </div>

      {more.length > 0 && (
        <section className="mt-12 border-t border-border pt-10" aria-label="More news">
          <div className="grid gap-4 md:grid-cols-2">
            {more.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.05}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
