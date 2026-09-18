"use client";

import { useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  slides: ReactNode[];
  ariaLabel: string;
  className?: string;
};

/**
 * CSS-transform carousel with slide windowing: only the active slide and its
 * two neighbours stay mounted, so a 15-screenshot gallery never holds 15
 * decoded bitmaps. No animation library.
 */
export default function Carousel({ slides, ariaLabel, className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const touchX = useRef<number | null>(null);

  if (count === 0) {
    return (
      <div className={cn("rounded-lg border border-border bg-card p-10 text-center", className)}>
        <p className="text-muted-foreground">No slides yet. The asset team adds images to the data file.</p>
      </div>
    );
  }

  const goTo = (next: number) => setIndex(((next % count) + count) % count);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className={cn("relative", className)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goTo(index + 1);
        if (e.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className="carousel-track flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translate3d(${-100 * index}%, 0, 0)` }}
          onPointerDown={(e) => {
            touchX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (touchX.current === null) return;
            const dx = e.clientX - touchX.current;
            touchX.current = null;
            if (dx < -40) goTo(index + 1);
            if (dx > 40) goTo(index - 1);
          }}
        >
          {slides.map((slide, i) => {
            const dist = Math.min((i - index + count) % count, (index - i + count) % count);
            return (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
                className="w-full shrink-0"
                inert={i !== index ? true : undefined}
              >
                {dist <= 1 ? slide : <div className="aspect-video w-full" aria-hidden />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 sm:justify-end" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="flex min-h-6 min-w-6 items-center justify-center p-1.5"
            >
              <span
                className={cn(
                  "block h-2.5 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground",
                )}
              />
            </button>
          ))}
        </div>
        <p className="hidden text-sm text-muted-foreground tabular-nums sm:block" aria-live="polite">
          {index + 1} / {count}
        </p>
      </div>
    </div>
  );
}
