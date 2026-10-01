"use client";

import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/features", label: "Features" },
  { href: "/map", label: "World Map" },
  { href: "/news", label: "News" },
  { href: "/download", label: "Download" },
];

const officialLinks = [
  {
    href: "https://square-enix-games.com/en_US/games/octopath-traveler",
    label: "Official Website",
  },
  {
    href: "https://store.steampowered.com/app/570650/OCTOPATH_TRAVELER/",
    label: "Steam Store",
  },
  {
    href: "https://github.com/adiityanugraha/Lomba-Web-Dev-Game",
    label: "GitHub Repository",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand & Project Summary */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex flex-col items-start leading-none"
              aria-label="Octopath Traveler home"
            >
              <span className="font-logo text-base font-bold uppercase tracking-[0.3em] text-foreground">
                Octopath
              </span>
              <span className="my-0.5 block h-px w-28 bg-foreground/40" aria-hidden />
              <span className="font-logo text-base font-bold uppercase tracking-[0.3em] text-foreground">
                Traveler
              </span>
              <span className="block h-px w-28 bg-foreground/40" aria-hidden />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Fan-made showcase website celebrating the world of Orsterra, its eight travelers, and their intertwining tales. Built for educational and competition purposes.
            </p>

            <p className="mt-3 text-xs leading-5 text-muted-foreground/80">
              Not affiliated with, sponsored, or endorsed by Square Enix.
            </p>
          </div>

          {/* Navigation & External Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-6 lg:col-span-7">
            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
                EXPLORE
              </p>
              <ul className="mt-4 space-y-1">
                {navigationLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm text-foreground/80 transition-colors hover:text-primary sm:min-h-0 sm:py-1.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
                OFFICIAL &amp; COMMUNITY
              </p>
              <ul className="mt-4 space-y-1">
                {officialLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-primary sm:min-h-0 sm:py-1.5"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            All Octopath Traveler assets, characters, and trademarks &copy; Square Enix Co., Ltd.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary sm:min-h-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
