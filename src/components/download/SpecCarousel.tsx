import Carousel from "@/components/Carousel";
import { systemRequirements, type SystemRequirements } from "@/data/platforms";

function SpecColumn({ label, spec }: { label: string; spec: Record<string, string> }) {
  return (
    <div className="p-5 md:p-6">
      <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">{label}</p>
      <dl className="mt-4 space-y-3">
        {Object.entries(spec).map(([k, v]) => (
          <div key={k} className="grid grid-cols-[96px_1fr] gap-3 text-sm">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SpecSlide({ s }: { s: SystemRequirements }) {
  return (
    <div className="border border-border bg-card">
      <p className="border-b border-border px-5 py-3 font-display text-lg font-bold md:px-6">{s.platform}</p>
      <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-border">
        <SpecColumn label="MINIMUM" spec={s.minimum} />
        <SpecColumn label="RECOMMENDED" spec={s.recommended} />
      </div>
    </div>
  );
}

export default function SpecCarousel() {
  return (
    <Carousel
      ariaLabel="PC system requirements"
      slides={systemRequirements.map((s) => (
        <SpecSlide key={s.platform} s={s} />
      ))}
    />
  );
}
