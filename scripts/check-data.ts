import { existsSync } from "node:fs";
import { join } from "node:path";
import { features } from "../src/data/features";
import { media } from "../src/data/media";
import { platforms } from "../src/data/platforms";

const root = join(__dirname, "..");
const errors: string[] = [];
const checkImage = (p: string, where: string) => {
  const file = join(root, "public", decodeURIComponent(p).replace(/^\//, ""));
  if (!existsSync(file)) errors.push(`${where}: missing file ${p}`);
};

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

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`check-data OK: ${features.length} features, ${media.length} media, ${platforms.length} platforms`);
