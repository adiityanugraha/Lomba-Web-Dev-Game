"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
};

export default function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
        el.style.opacity = "1";
        return;
      }

      gsap.set(el, { opacity: 0, y: 40 });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
        });
        trigger.kill();
      }

      const fallback = window.setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.95) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        }
        ScrollTrigger.refresh();
      }, 1400);

      const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);

      return () => {
        window.clearTimeout(fallback);
        window.clearTimeout(refreshTimer);
        trigger.kill();
      };
    },
    { scope: ref, dependencies: [delay] },
  );

  return (
    <Tag ref={ref} className={className ? `reveal-init ${className}` : "reveal-init"}>
      {children}
    </Tag>
  );
}
