export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-sm font-bold tracking-[0.18em]">
            OCTOPATH TRAVELER
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Fan-made website for educational/competition purposes. Not
            affiliated with or endorsed by Square Enix.
          </p>
          <a
            href="https://square-enix-games.com/en_US/games/octopath-traveler"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block min-h-11 py-2 text-sm text-primary underline-offset-4 hover:underline"
          >
            Official Square Enix page
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          All Octopath Traveler assets &copy; Square Enix Co., Ltd.
        </p>
      </div>
    </footer>
  );
}
