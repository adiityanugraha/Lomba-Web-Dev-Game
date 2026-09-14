import type { Metadata } from "next";
import Link from "next/link";
import { FaPlaystation, FaSteam } from "react-icons/fa";
import { TbDeviceNintendo } from "react-icons/tb";
import type { IconType } from "react-icons";
import Reveal from "@/components/Reveal";
import SpecCarousel from "@/components/download/SpecCarousel";
import { platforms } from "@/data/platforms";

export const metadata: Metadata = {
  title: "Download — Octopath Traveler",
  description: "Where to buy Octopath Traveler and the PC system requirements.",
};

// Figma shows three badges; the full platform list lives on the home page.
const featured: { name: string; label: string; Icon: IconType }[] = [
  { name: "Steam", label: "Steam", Icon: FaSteam },
  { name: "PS5", label: "PlayStation", Icon: FaPlaystation },
  { name: "Nintendo Switch", label: "Nintendo Switch", Icon: TbDeviceNintendo },
];

export default function DownloadPage() {
  const badges = featured.flatMap((f) => {
    const platform = platforms.find((p) => p.name === f.name);
    return platform?.url ? [{ ...f, url: platform.url }] : [];
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24">
      <Reveal>
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">PLAY NOW</p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold text-balance md:text-5xl">Begin your journey</h1>
        <p className="mt-4 max-w-xl leading-7 text-foreground/80">
          Octopath Traveler is available on PC and consoles. Pick your store below, or check the PC requirements
          before you buy.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <ul className="grid gap-4 sm:grid-cols-3" aria-label="Stores">
          {badges.map(({ name, label, Icon, url }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light flex min-h-[88px] w-full items-center justify-center gap-3 rounded-md px-4 text-lg font-semibold text-neutral-900"
              >
                <Icon className="size-7 shrink-0" aria-hidden />
                <span>
                  <span className="block text-xs font-medium text-neutral-600">Buy on</span>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Also on Xbox, Windows and Game Pass —{" "}
          <Link href="/#available" className="text-primary underline-offset-4 hover:underline">
            see every platform
          </Link>
          .
        </p>
      </Reveal>

      <section className="mt-16 border-t border-border pt-12" aria-labelledby="spec-heading">
        <Reveal>
          <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">PC</p>
          <h2 id="spec-heading" className="font-display mt-4 text-3xl font-bold text-balance md:text-4xl">
            Minimum &amp; Recommended Spec
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <SpecCarousel />
        </Reveal>
      </section>
    </main>
  );
}
