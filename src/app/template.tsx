"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" });
  }, []);

  return <div ref={ref}>{children}</div>;
}
