import { existsSync } from "node:fs";
import { join } from "node:path";
import { features } from "../src/data/features";
import { media } from "../src/data/media";
import { platforms, systemRequirements } from "../src/data/platforms";
import { regions } from "../src/data/regions";
import { news } from "../src/data/news";

const root = join(__dirname, "..");
const errors: string[] = [];
const checkImage = (p: string, where: string) => {
  const file = join(root, "public", decodeURIComponent(p).replace(/^\//, ""));
  if (!existsSync(file)) errors.push(`${where}: missing file ${p}`);
};
const unique = (values: string[], where: string) => {
  const dupes = values.filter((v, i) => values.indexOf(v) !== i);
  if (dupes.length) errors.push(`${where}: duplicate slug(s) ${dupes.join(", ")}`);
};

// --- Dev B data (unchanged checks) ---
if (features.length !== 6) errors.push(`features: expected 6 entries, found ${features.length}`);
if ((features[0]?.thumbnails ?? []).length !== 4) {
  errors.push("features[0].thumbnails: expected exactly 4 entries");
}
for (const f of features) {
  if (!f.title || !f.description || !f.image) errors.push(`features: incomplete entry ${f.title}`);
  checkImage(f.image, `features:${f.title}`);
}
for (const t of features[0]?.thumbnails ?? []) checkImage(t, "features[0].thumbnails");

if (media.length === 0) errors.push("media: expected at least 1 entry");
for (const m of media) {
  if (!m.alt) errors.push(`media: missing alt for ${m.image}`);
  checkImage(m.image, "media");
}

for (const p of platforms) {
  if (!p.comingSoon && !/^https:\/\//.test(p.url)) errors.push(`platforms: bad URL for ${p.name}`);
}

// --- Dev A data ---
if (regions.length !== 8) errors.push(`regions: expected 8 entries, found ${regions.length}`);
unique(regions.map((r) => r.slug), "regions");
for (const r of regions) {
  const where = `regions:${r.slug}`;
  if (!/^[a-z0-9-]+$/.test(r.slug)) errors.push(`${where}: slug must be lowercase kebab-case`);
  if (!r.name || !r.tagline || !r.description) errors.push(`${where}: missing text`);
  for (const axis of ["x", "y"] as const) {
    const v = r.position[axis];
    if (!(v >= 0 && v <= 100)) errors.push(`${where}: position.${axis} must be 0–100, got ${v}`);
  }
  checkImage(r.heroImage, where);
  const t = r.traveler;
  if (!t.name || !t.job || !t.hook || !t.description || !t.pathAction || !t.talent) {
    errors.push(`${where}: traveler missing text`);
  }
  checkImage(t.portrait, `${where}.traveler.portrait`);
  checkImage(t.sprite, `${where}.traveler.sprite`);
}

if (news.length === 0) errors.push("news: expected at least 1 entry");
unique(news.map((n) => n.slug), "news");
for (const n of news) {
  const where = `news:${n.slug}`;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.date)) errors.push(`${where}: date must be yyyy-mm-dd`);
  if (!n.title || !n.excerpt || n.body.length === 0) errors.push(`${where}: missing text`);
  checkImage(n.image, where);
}
for (let i = 1; i < news.length; i++) {
  if (news[i - 1].date < news[i].date) errors.push("news: not sorted newest first");
}

if (systemRequirements.length === 0) errors.push("systemRequirements: expected at least 1 entry");
for (const s of systemRequirements) {
  const min = Object.keys(s.minimum).join(",");
  const rec = Object.keys(s.recommended).join(",");
  if (min !== rec) errors.push(`systemRequirements:${s.platform}: minimum/recommended keys differ`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `check-data OK: ${features.length} features, ${media.length} media, ${platforms.length} platforms, ${regions.length} regions, ${news.length} news, ${systemRequirements.length} spec tables`,
);
