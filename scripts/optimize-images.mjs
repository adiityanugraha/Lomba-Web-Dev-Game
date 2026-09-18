// One-shot optimizer: recompress JPGs in place (mozjpeg progressive) and emit
// WebP siblings next to every JPG/PNG under public/. Originals stay as fallback.
// Skips pixel-art sprites and the map cursor (lossy recompress would blur edges).
// Run: node scripts/optimize-images.mjs (requires `sharp` in node_modules).
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname, basename, relative } from "node:path";
import { cwd } from "node:process";
import sharp from "sharp";

const PUBLIC = join(cwd(), "public");
const SKIP = /(^|[\\/])(cursor\.png$|.*-sprite\.jpg$)/i;
function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(p);
  }
  return out;
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
let origTotal = 0;
let newTotal = 0;

for (const file of walk(PUBLIC)) {
  const rel = relative(cwd(), file);
  if (SKIP.test(file)) {
    console.log(`skip  ${rel}`);
    continue;
  }
  const input = readFileSync(file);
  origTotal += input.length;
  const ext = extname(file).toLowerCase();
  let jpgBytes = input.length;

  if (ext !== ".png") {
    const buf = await sharp(input)
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toBuffer();
    if (buf.length < input.length) {
      writeFileSync(file, buf);
      jpgBytes = buf.length;
    }
  }

  const webpPath = file.slice(0, -ext.length) + ".webp";
  const webp = await sharp(input)
    .webp({ quality: ext === ".png" ? 72 : 70, effort: 6 })
    .toBuffer();
  let webpNote = "";
  try {
    const prev = statSync(webpPath).size;
    if (webp.length < prev) {
      writeFileSync(webpPath, webp);
      webpNote = " (updated)";
    } else {
      webpNote = " (kept smaller existing)";
    }
  } catch {
    writeFileSync(webpPath, webp);
  }
  newTotal += jpgBytes;
  console.log(
    `ok    ${rel} ${kb(input.length)} -> jpg ${kb(jpgBytes)}, webp ${kb(webp.length)}${webpNote} [${basename(webpPath)}]`,
  );
}

console.log(`\noriginal jpg/png total: ${kb(origTotal)} | now served (webp-first): ~${kb(newTotal)} + webp siblings`);
