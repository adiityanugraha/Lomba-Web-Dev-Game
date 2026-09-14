import Link from "next/link";
import type { NewsItem } from "@/data/news";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsCard({ item, variant = "row" }: { item: NewsItem; variant?: "featured" | "row" }) {
  if (variant === "featured") {
    return (
      <Link
        href={`/news/${item.slug}`}
        className="card-interactive group block overflow-hidden rounded-lg border border-border bg-card"
      >
        <div className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            loading="eager"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <time dateTime={item.date} className="text-xs font-semibold tracking-wide text-primary">
            {formatDate(item.date)}
          </time>
          <h2 className="font-display mt-2 text-2xl font-bold text-balance md:text-3xl">{item.title}</h2>
          <p className="mt-3 leading-7 text-foreground/80">{item.excerpt}</p>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={`/news/${item.slug}`}
      className="card-interactive group flex gap-4 rounded-lg border border-border bg-card p-3"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt=""
        loading="lazy"
        className="aspect-[4/3] w-28 shrink-0 rounded object-cover sm:w-36"
      />
      <div className="min-w-0 py-1">
        <time dateTime={item.date} className="text-xs font-semibold tracking-wide text-primary">
          {formatDate(item.date)}
        </time>
        <h3 className="font-display mt-1 text-lg leading-snug font-bold text-balance">{item.title}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{item.excerpt}</p>
      </div>
    </Link>
  );
}
