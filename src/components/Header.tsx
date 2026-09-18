"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/features", label: "Features" },
  { href: "/news", label: "News" },
  { href: "/download", label: "Download" },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-transparent transition-[background-color,border-color] duration-300",
        open && "border-b border-border bg-background",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col items-center leading-none" aria-label="Octopath Traveler home">
          <span className="font-logo text-sm font-bold uppercase tracking-[0.3em] text-foreground sm:text-base">Octopath</span>
          <span className="my-0.5 block h-px w-full bg-foreground/40" aria-hidden />
          <span className="font-logo text-sm font-bold uppercase tracking-[0.3em] text-foreground sm:text-base">Traveler</span>
          <span className="block h-px w-full bg-foreground/40" aria-hidden />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2.5 text-base transition-colors",
                  pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/map"
              aria-current={pathname.startsWith("/map") ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-5 text-base font-semibold",
                pathname.startsWith("/map")
                  ? "btn-primary text-accent-foreground"
                  : "btn-primary text-primary-foreground",
              )}
            >
              Map
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card text-foreground md:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {[...links, { href: "/map", label: "Map" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-md px-3 text-base",
                    pathname === l.href ? "bg-card text-primary" : "text-foreground/85 hover:bg-card",
                    l.href === "/map" && "border border-primary/40 font-semibold text-primary",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
