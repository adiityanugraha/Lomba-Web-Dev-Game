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
        gsap.set(el, { opacity: 1, y: 0, filter: "blur(0px)", clearProps: "transform" });
        el.style.opacity = "1";
        return;
      }

      gsap.set(el, { opacity: 0, y: 28, filter: "blur(6px)" });

      const animateIn = () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay,
          ease: "expo.out",
          overwrite: true,
        });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: animateIn,
      });

      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        animateIn();
        trigger.kill();
      }

      const fallback = window.setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.95) {
          gsap.to(el, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "expo.out" });
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
