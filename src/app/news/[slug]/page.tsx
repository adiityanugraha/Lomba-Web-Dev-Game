import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ZoomableImage from "@/components/ZoomableImage";
import { formatDate } from "@/components/NewsCard";
import { getNewsItem, news } from "@/data/news";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = getNewsItem(slug);
  return n ? { title: `${n.title} — Octopath Traveler`, description: n.excerpt } : {};
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = getNewsItem(slug);
  if (!n) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal as="article">
        <Link
          href="/news"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden /> All news
        </Link>
        <time dateTime={n.date} className="mt-6 block text-xs font-semibold tracking-wide text-primary">
          {formatDate(n.date)}
        </time>
        <h1 className="font-display mt-3 text-3xl font-bold text-balance md:text-5xl">{n.title}</h1>
        <p className="mt-4 text-lg leading-8 text-foreground/85">{n.excerpt}</p>
        <ZoomableImage src={n.image} label={n.title} className="mt-8" />
        <div className="mt-8 space-y-5 leading-8 text-foreground/80">
          {n.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
