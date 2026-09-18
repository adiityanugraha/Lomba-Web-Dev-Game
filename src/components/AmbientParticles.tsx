"use client";

import { useEffect, useState } from "react";

/* Seeded PRNG — same output on server and client, no hydration mismatch. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Particle = { size: number; duration: number; delay: number; drift: number; left: number };

/**
 * Decorative ember layer. Deferred until the browser is idle and only on
 * capable hardware: 10 particles on desktop, 6 on small screens, none when
 * the user prefers reduced motion or the device has <= 4 CPU cores.
 */
export default function AmbientParticles() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ((navigator.hardwareConcurrency ?? 8) <= 4) return;
    const schedule = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    let timer = 0;
    const start = () => {
      const small = window.matchMedia("(max-width: 640px)").matches;
      const count = small ? 6 : 10;
      const rand = mulberry32(42);
      setParticles(
        Array.from({ length: count }, () => ({
          size: rand() * 2 + 1,
          duration: rand() * 12 + 10,
          delay: rand() * -20,
          drift: rand() * 60 - 30,
          left: rand() * 90 + 5,
        })),
      );
    };
    if (schedule) {
      const id = schedule(start);
      return () => (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id);
    }
    timer = window.setTimeout(start, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!particles) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <div
          key={i}
          className="ambient-particle"
          style={
            {
              "--size": `${p.size}px`,
              "--dur": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--drift": `${p.drift}px`,
              left: `${p.left}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
