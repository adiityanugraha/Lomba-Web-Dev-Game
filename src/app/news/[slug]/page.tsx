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
            <div key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {n.relatedLinks && (
          <div className="mt-8 text-foreground/90">
            <h3 className="font-bold underline text-lg mb-2">Related Links:</h3>
            
            {/* Official Websites */}
            {n.relatedLinks.officialWebsites && n.relatedLinks.officialWebsites.length > 0 && (
              <div className="mb-4">
                <span className="font-bold block mb-1">Official Websites:</span>
                <div className="flex flex-col space-y-1">
                  {n.relatedLinks.officialWebsites.map((url, i) => (
                    <a key={i} href={url} target="_blank" rel="noreferrer" className="text-red-700 hover:underline">
                      {url}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Social Media */}
            {n.relatedLinks.socials && n.relatedLinks.socials.length > 0 && (
              <div className="flex flex-col space-y-1">
                {n.relatedLinks.socials.map((social, i) => (
                  <div key={i}>
                    <span className="font-bold">{social.label}: </span>
                    <a href={social.url} target="_blank" rel="noreferrer" className="text-red-700 hover:underline break-all">
                      {social.url}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </Reveal>
    </main>
  );
}