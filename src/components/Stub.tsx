import Link from "next/link";

function Stub({ title, owner, note }: { title: string; owner: string; note: string }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 pt-36 pb-24 text-center sm:px-6">
      <p className="font-display text-[11px] font-semibold tracking-[0.32em] text-primary">COMING SOON</p>
      <h1 className="font-display mt-4 text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-md leading-7 text-foreground/80">
        {note} This route is owned by {owner}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--accent-hover)]"
      >
        Back to home
      </Link>
    </main>
  );
}

export function CharactersStub() {
  return <Stub title="Characters" owner="Dev A" note="Cards of the eight travelers will live here." />;
}
export function NewsStub() {
  return <Stub title="News" owner="Dev A" note="News cards and articles will live here." />;
}
export function DownloadStub() {
  return <Stub title="Download" owner="Dev A" note="Platform badges and PC spec tables will live here." />;
}
export function MapStub() {
  return <Stub title="Map" owner="Dev A" note="The interactive map of Orsterra will live here." />;
}
