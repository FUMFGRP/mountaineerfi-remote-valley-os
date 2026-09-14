// Generates optimized hero images (WebP + JPEG) from the source master.
// Run with: node scripts/generate-hero.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'assets', 'images', 'hero-valley-source.jpeg');
const outDir = join(root, 'public', 'assets', 'images', 'home');

mkdirSync(outDir, { recursive: true });

const widths = [688, 1032, 1376];

for (const w of widths) {
  await sharp(src)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(join(outDir, `hero-valley-${w}.webp`));

  await sharp(src)
    .resize({ width: w, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(join(outDir, `hero-valley-${w}.jpg`));

  console.log(`  hero-valley-${w}.{webp,jpg}`);
}

console.log('Hero images generated.');
