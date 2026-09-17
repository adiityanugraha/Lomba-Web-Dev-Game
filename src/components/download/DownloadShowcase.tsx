"use client";

import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { FaPlaystation, FaSteam, FaWindows, FaXbox } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";
import Reveal from "@/components/Reveal";
import { platforms } from "@/data/platforms";

type CardButton = {
  text: string;
  href: string;
  comingSoon?: boolean;
  icon?: ReactNode;
};

type DownloadCardProps = {
  title: string;
  description: string;
  eyebrow: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  buttons: CardButton[];
};

function DownloadCard({ title, description, eyebrow, icon: Icon, buttons }: DownloadCardProps) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50">
      <div className="flex flex-col items-center text-center">
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">{eyebrow}</p>
        <h3 className="font-display mt-2 text-xl font-bold text-balance">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-1 items-center justify-center py-8">
        <Icon
          className="size-20 text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          aria-hidden
        />
      </div>

      <div className="mt-auto flex w-full flex-col justify-end gap-2 [min-height:calc(3*2.75rem+2*0.5rem)]">
        {buttons.map((button) =>
          button.comingSoon || !button.href ? (
            <span
              key={button.text}
              className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-semibold text-muted-foreground"
            >
              {button.icon}
              {button.text}
            </span>
          ) : (
            <Link
              key={button.text}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-neutral-900"
            >
              {button.icon}
              {button.text}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export default function DownloadShowcase() {
  const storeUrl = (name: string) => platforms.find((p) => p.name === name)?.url ?? "";
  const cards: DownloadCardProps[] = [
    {
      title: "PC",
      description: "Steam, Epic Games, and Windows",
      eyebrow: "PC",
      icon: FaWindows,
      buttons: [
        {
          text: "Buy on Steam",
          href: storeUrl("Steam"),
          icon: <FaSteam className="size-4" aria-hidden />,
        },
        {
          text: "Epic Games Store",
          href: storeUrl("Epic Games Store"),
          icon: <SiEpicgames className="size-4" aria-hidden />,
        },
        {
          text: "Microsoft Store",
          href: storeUrl("Windows"),
          icon: <FaWindows className="size-4" aria-hidden />,
        },
      ],
    },
    {
      title: "PlayStation",
      description: "PS4 and PS5",
      eyebrow: "CONSOLE",
      icon: FaPlaystation,
      buttons: [
        {
          text: "PlayStation Store",
          href: storeUrl("PS5"),
          icon: <FaPlaystation className="size-4" aria-hidden />,
        },
      ],
    },
    {
      title: "Xbox",
      description: "Xbox One and Series X|S, plus Game Pass",
      eyebrow: "CONSOLE",
      icon: FaXbox,
      buttons: [
        {
          text: "Xbox Store",
          href: storeUrl("Xbox Series X|S"),
          icon: <FaXbox className="size-4" aria-hidden />,
        },
        {
          text: "Xbox Game Pass",
          href: storeUrl("Xbox Game Pass"),
          icon: <FaXbox className="size-4" aria-hidden />,
        },
      ],
    },
    {
      title: "Nintendo Switch",
      description: "Switch, plus Switch 2 when it lands",
      eyebrow: "NINTENDO",
      icon: TbDeviceNintendo,
      buttons: [
        {
          text: "Nintendo eShop",
          href: storeUrl("Nintendo Switch"),
          icon: <TbDeviceNintendo className="size-4" aria-hidden />,
        },
      ],
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.08} className="h-full">
          <DownloadCard {...card} />
        </Reveal>
      ))}
    </div>
  );
}
