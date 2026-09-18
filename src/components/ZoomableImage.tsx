"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/utils";

type ZoomableImageProps = {
  src: string;
  alt?: string;
  label: string;
  className?: string;
};

export default function ZoomableImage({ src, alt = "", label, className }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [canZoom, setCanZoom] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setZoomed(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => {
      setCanZoom(mq.matches);
      if (!mq.matches) setZoomed(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${label}`}
        className={cn(
          "group relative block w-full overflow-hidden rounded-lg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
      >
        <SmartImage
          src={src}
          alt={alt}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="aspect-video w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
        />
        <span
          className="pointer-events-none absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-md bg-background/80 text-foreground"
          aria-hidden
        >
          <Maximize2 className="size-4" />
        </span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged image: ${label}`}
            onClick={close}
            className="fixed inset-0 z-[80] flex flex-col bg-background/95"
          >
            <div className="flex shrink-0 items-center justify-end gap-2 p-3 sm:p-4">
              {canZoom && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomed((v) => !v);
                  }}
                  aria-label={zoomed ? "Zoom out" : "Zoom in"}
                  aria-pressed={zoomed}
                  className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {zoomed ? <ZoomOut className="size-5" aria-hidden /> : <ZoomIn className="size-5" aria-hidden />}
                </button>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                aria-label="Close enlarged image"
                className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 overflow-auto overscroll-contain p-4 pt-0 sm:p-8 sm:pt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                onClick={(e) => {
                  e.stopPropagation();
                  if (canZoom) setZoomed((v) => !v);
                }}
                className={cn(
                  "m-auto h-auto w-auto max-w-full rounded-sm object-contain transition-transform duration-300",
                  zoomed ? "max-h-none max-w-none" : "max-h-full",
                )}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
