# Octopath Traveler Fan Showcase

Fan-made website for educational and competition purposes. Not affiliated with or endorsed by Square Enix. All Octopath Traveler assets belong to Square Enix Co., Ltd.

Built with Next.js 16, React 19, and Tailwind CSS 4. Pages cover home, characters, features, world map, news, and download info, with content served from typed data files in `src/data`.

## Requirements

- Node.js (LTS) and npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command            | What it does                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the dev server                      |
| `npm run build`    | Production build                          |
| `npm run start`    | Serve the production build                |
| `npm run lint`     | Run ESLint                                |
| `npm run check-data` | Validate the data files in `src/data`  |

## Project layout

```text
src/
  app/          Routes: /, /characters, /features, /map, /map/[region],
                /news, /news/[slug], /download
  components/   Header, Footer, and per-page sections (home, map, features, download)
  data/         Content source: features, media, news, platforms, regions
  lib/          Shared helpers
  types/        Shared TypeScript types
public/         Static images and assets
scripts/        Data validation (`check-data.ts`) and image optimization
```

## Deploy with Docker

`docker-compose.yml` runs two services: the Next.js app (`web`, port 1999) and a Cloudflare Tunnel sidecar (`tunnel`).

1. Copy `.env.example` to `.env` and fill in `CLOUDFLARE_TUNNEL_TOKEN` from your Cloudflare Zero Trust tunnel settings.
2. Start it:

```bash
docker compose up -d --build
```

## License

MIT. See [LICENSE.md](LICENSE.md).
