import Link from "next/link";
import { FaSteam, FaWindows, FaXbox, FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";
import type { IconType } from "react-icons";
import { platforms } from "@/data/platforms";
import Reveal from "@/components/Reveal";

const platformIcons: Record<string, IconType> = {
  Steam: FaSteam,
  "Epic Games Store": SiEpicgames,
  Windows: FaWindows,
  "Xbox Series X|S": FaXbox,
  "Xbox One": FaXbox,
  "Xbox Game Pass": FaXbox,
  PS5: FaPlaystation,
  PS4: FaPlaystation,
  "Nintendo Switch": TbDeviceNintendo,
  "Nintendo Switch 2": TbDeviceNintendo,
};

function PlatformIcon({ name }: { name: string }) {
  const Icon = platformIcons[name] ?? FaWindows;
  return <Icon className="size-5 shrink-0" aria-hidden />;
}

export default function AvailableOn() {
  return (
    <section aria-label="Available on" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-background" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/background_available_on.jpg"
          alt=""
          className="absolute inset-0 m-auto h-full w-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      </div>

      <Reveal className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-16 text-center sm:px-6 sm:pt-24 md:pt-32 md:pb-20">
        <p className="font-display text-xs font-semibold tracking-[0.32em] text-primary sm:text-sm">WHERE TO PLAY</p>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold text-balance text-white md:text-4xl">
          Take the road on your platform
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 md:text-base">
          The journey is the same everywhere. Pick the store you already use and start with any of the eight travelers.
        </p>

        <ul className="mx-auto mt-6 grid max-w-3xl grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          {platforms.map((p) =>
            p.comingSoon || !p.url ? (
              <li key={p.name} className="flex min-h-[76px]">
                <div className="flex w-full flex-1 cursor-not-allowed flex-col items-center justify-center rounded-md border border-white/20 bg-white/5 px-3 py-3 text-center">
                  <span className="flex items-center justify-center gap-2 text-base font-semibold text-white/60">
                    <PlatformIcon name={p.name} />
                    <span className="leading-snug">{p.name}</span>
                  </span>
                  <span className="mt-1 text-xs text-white/50">Coming soon</span>
                </div>
              </li>
            ) : (
              <li key={p.name} className="flex min-h-[76px]">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-white px-3 py-3 text-center text-base font-semibold text-neutral-900 transition-colors hover:bg-primary"
                >
                  <PlatformIcon name={p.name} />
                  <span className="leading-snug">{p.name}</span>
                </a>
              </li>
            ),
          )}
        </ul>

        <Link
          href="/download"
          className="mt-2 inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          See requirements
          <span aria-hidden className="ml-2">
            &rarr;
          </span>
        </Link>
      </Reveal>
    </section>
  );
}