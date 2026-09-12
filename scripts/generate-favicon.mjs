// Generates favicon PNG assets from the SVG sources in assets/brand/.
// Run with: node scripts/generate-favicon.mjs
import sharp from 'sharp';
import { readFileSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const brand = join(root, 'assets', 'brand');
const pub = join(root, 'public');

const full = readFileSync(join(brand, 'favicon.svg'));
const small = readFileSync(join(brand, 'favicon-16.svg'));

const pngs = [
  { src: full, size: 32, out: 'favicon-32.png' },
  { src: full, size: 180, out: 'apple-touch-icon.png' },
  { src: full, size: 192, out: 'icon-192.png' },
  { src: full, size: 512, out: 'icon-512.png' },
  { src: small, size: 16, out: 'favicon-16.png' },
  { src: small, size: 48, out: 'favicon-48.png' },
];

for (const { src, size, out } of pngs) {
  await sharp(src, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(join(pub, out));
  console.log(`  ${out}  ${size}x${size}`);
}

copyFileSync(join(brand, 'favicon.svg'), join(pub, 'favicon.svg'));
console.log('  favicon.svg');

console.log('Favicon assets generated.');
