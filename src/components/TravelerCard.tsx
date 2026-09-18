import Link from "next/link";
import { SmartImage } from "@/components/SmartImage";
import type { Region } from "@/data/regions";

export default function TravelerCard({ region }: { region: Region }) {
  const t = region.traveler;
  return (
    <Link
      href={`/map/${region.slug}`}
      className="card-interactive group block overflow-hidden rounded-lg border border-border bg-card"
      aria-label={`${t.name}, ${t.job} of the ${region.name}`}
    >
      <div className="relative aspect-[9/11] overflow-hidden">
        <SmartImage
          src={t.portrait}
          alt=""
          sizes="(max-width: 768px) 50vw, 25vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute inset-0"
          aria-hidden
          style={{ background: "linear-gradient(180deg, transparent 55%, rgba(15,13,11,0.9) 100%)" }}
        />
        <span className="card-reveal absolute inset-x-4 bottom-4 text-xs font-semibold tracking-wide text-primary">
          {region.name}
        </span>
      </div>
      <div className="flex items-center gap-3 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.sprite}
          alt=""
          width={24}
          height={35}
          loading="lazy"
          className="h-[35px] w-[24px] rounded-sm [image-rendering:pixelated]"
        />
        <div className="min-w-0">
          <p className="font-display truncate text-lg font-bold">{t.name}</p>
          <p className="truncate text-sm text-muted-foreground">{t.job}</p>
        </div>
      </div>
    </Link>
  );
}
