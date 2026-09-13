"use client";

import { useEffect, useMemo, useRef } from "react";

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

function generateParticles(count: number, rand: () => number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: rand() * 2 + 1,
    duration: rand() * 12 + 10,
    delay: rand() * -20,
    drift: rand() * 60 - 30,
    left: rand() * 90 + 5,
  }));
}

export default function AmbientParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(() => generateParticles(18, mulberry32(42)), []);

  /* Hide if user prefers reduced motion — client-only, no SSR mismatch. */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && containerRef.current) {
      containerRef.current.style.display = "none";
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
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
