"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { FaPlaystation, FaSteam, FaWindows, FaXbox } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { TbDeviceNintendo } from "react-icons/tb";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import ModelViewerLoader from "@/components/download/ModelViewerLoader";
import { platforms } from "@/data/platforms";

type CardButton = {
  text: string;
  href: string;
  comingSoon?: boolean;
  icon?: ReactNode;
  primary?: boolean;
};

type DownloadCardProps = {
  title: string;
  description: string;
  backdrop: string;
  eyebrow: string;
  model: string;
  eager?: boolean;
  order?: number;
  buttons: CardButton[];
};

function DownloadCard({ title, description, backdrop, eyebrow, model, eager, order = 0, buttons }: DownloadCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eager) {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }
    const el = frameRef.current;
    if (!el) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger mounting so entrance animations finish before the
          // heavy GLB parse starts. Direct page loads mount PS5 instantly
          // and queue the rest behind it.
          timer = window.setTimeout(() => setVisible(true), 600 + order * 600);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [eager, order]);

  return (
    <div className="group relative flex h-full w-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={backdrop}
          loading="lazy"
          className="h-full w-full object-cover opacity-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      </div>

      <div className="relative z-10 flex min-h-[104px] flex-col items-center text-center">
        <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">{eyebrow}</p>
        <h3 className="font-display mt-2 text-xl font-bold text-balance">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div ref={frameRef} className="relative z-10 mx-auto aspect-square w-full max-w-[280px]">
        {visible ? (
          <model-viewer
            src={model}
            alt={`${title} 3D model`}
            loading={eager ? "eager" : "lazy"}
            auto-rotate
            auto-rotate-delay={1200}
            interaction-prompt="none"
            shadow-intensity="1"
            exposure="1.1"
            disable-zoom
            className="pointer-events-none h-full w-full"
            style={{ background: "transparent" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden>
            <div className="size-8 animate-spin rounded-full border-2 border-border border-t-primary" />
          </div>
        )}
      </div>

      <div className="relative z-10 mt-auto flex w-full flex-col justify-end gap-2 pt-2 [min-height:calc(3*2.75rem+2*0.5rem)]">
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
              className={cn(
                "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold",
                button.primary ? "btn-primary text-primary-foreground" : "btn-light text-neutral-900",
              )}
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
  const switch2Url = storeUrl("Nintendo Switch 2");
  const cards: DownloadCardProps[] = [
    {
      title: "PC",
      description: "Steam, Epic Games, and Windows",
      backdrop: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Cyrus_2.jpg",
      eyebrow: "PC",
      model: "/assets/models/gaming_pc.glb",
      buttons: [
        {
          text: "Buy on Steam",
          href: storeUrl("Steam"),
          primary: true,
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
      backdrop: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic_2.jpg",
      eyebrow: "CONSOLE",
      model: "/assets/models/ps5.glb",
      eager: true,
      buttons: [
        {
          text: "PlayStation Store",
          href: storeUrl("PS5"),
          primary: true,
          icon: <FaPlaystation className="size-4" aria-hidden />,
        },
      ],
    },
    {
      title: "Xbox",
      description: "Xbox One and Series X|S, plus Game Pass",
      backdrop: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Therion.jpg",
      eyebrow: "CONSOLE",
      model: "/assets/models/xbox_series_x.glb",
      buttons: [
        {
          text: "Xbox Store",
          href: storeUrl("Xbox Series X|S"),
          primary: true,
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
      backdrop: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa.jpg",
      eyebrow: "NINTENDO",
      model: "/assets/models/nintendo_switch.glb",
      buttons: [
        {
          text: "Nintendo eShop",
          href: storeUrl("Nintendo Switch"),
          primary: true,
          icon: <TbDeviceNintendo className="size-4" aria-hidden />,
        },
        {
          text: switch2Url ? "Switch 2" : "Switch 2, coming soon",
          href: switch2Url,
          comingSoon: !switch2Url,
          icon: <TbDeviceNintendo className="size-4" aria-hidden />,
        },
      ],
    },
  ];

  return (
    <>
      <ModelViewerLoader />
      <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08} className="h-full">
            <DownloadCard {...card} order={i} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
