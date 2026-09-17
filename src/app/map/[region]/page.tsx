import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Map } from "lucide-react";
import Reveal from "@/components/Reveal";
import RegionHero from "@/components/map/RegionHero";
import { getRegion, regions } from "@/data/regions";

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  return {
    title: `${r.name} · ${r.traveler.name} — Octopath Traveler`,
    description: r.tagline,
  };
}

function InfoBlock({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="rounded-lg border border-border bg-card p-6 md:p-8">
      <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">{eyebrow}</p>
      <h2 className="font-display mt-3 text-2xl font-bold text-balance md:text-3xl">{title}</h2>
      <div className="mt-3 leading-7 text-foreground/80">{children}</div>
    </Reveal>
  );
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();

  const i = regions.indexOf(r);
  const prev = regions[(i - 1 + regions.length) % regions.length];
  const next = regions[(i + 1) % regions.length];
  const t = r.traveler;

  return (
    <main>
      <RegionHero image={r.heroImage} name={r.name} tagline={r.tagline} />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] md:gap-10">
          {/* Character panel */}
          <Reveal as="aside" className="md:sticky md:top-24 md:self-start">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.portrait}
                alt={`${t.name}, ${t.job}`}
                loading="eager"
                className="aspect-[9/11] w-full object-cover"
              />
              <div className="flex items-center gap-4 p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.sprite}
                  alt=""
                  width={34}
                  height={50}
                  className="h-[50px] w-[34px] rounded-sm [image-rendering:pixelated]"
                />
                <div>
                  <p className="font-display text-2xl font-bold">{t.name}</p>
                  <p className="text-sm text-primary">{t.job}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Four info blocks: Region → Traveler → Path Action → Talent */}
          <div className="space-y-6">
            <InfoBlock eyebrow="REGION" title={r.name}>
              <p>{r.description}</p>
            </InfoBlock>
            <InfoBlock eyebrow="TRAVELER" title={`${t.name}, the ${t.job}`}>
              <p className="italic text-foreground">{t.hook}</p>
              <p className="mt-3">{t.description}</p>
            </InfoBlock>
            <InfoBlock eyebrow="PATH ACTION" title={t.pathAction}>
              <p>{t.pathActionDescription}</p>
            </InfoBlock>
            <InfoBlock eyebrow="TALENT" title={t.talent}>
              <p>{t.talentDescription}</p>
            </InfoBlock>
          </div>
        </div>

        {/* Prev / next / back */}
        <Reveal className="mt-12 border-t border-border pt-8">
          <nav aria-label="Region navigation" className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href={`/map/${prev.slug}`}
              className="btn-outline inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-semibold text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden /> {prev.name}
            </Link>
            <Link
              href="/map"
              className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              <Map className="size-4" aria-hidden /> Back to map
            </Link>
            <Link
              href={`/map/${next.slug}`}
              className="btn-outline inline-flex min-h-11 items-center gap-2 rounded-md border px-5 text-sm font-semibold text-foreground"
            >
              {next.name} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </nav>
        </Reveal>
      </div>
    </main>
  );
}
