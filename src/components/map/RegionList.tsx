import Link from "next/link";
import { regions } from "@/data/regions";

export default function RegionList() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Regions of Orsterra">
      {regions.map((r) => (
        <li key={r.slug}>
          <Link
            href={`/map/${r.slug}`}
            className="card-interactive flex min-h-11 items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 hover:border-primary"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.traveler.sprite}
              alt=""
              width={24}
              height={35}
              loading="lazy"
              className="h-[35px] w-[24px] shrink-0 rounded-sm [image-rendering:pixelated]"
            />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-foreground">{r.name}</span>
              <span className="block truncate text-xs text-muted-foreground">
                {r.traveler.name} · {r.traveler.job}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
