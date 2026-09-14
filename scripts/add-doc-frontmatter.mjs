// Moves the blueprint markdown into a content collection and injects
// frontmatter (title/description/category/order). Idempotent: files that
// already have frontmatter are left alone.
//
// Run with: node scripts/add-doc-frontmatter.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const contentDir = join(root, 'src', 'content');
const docsDir = join(contentDir, 'docs');

// source (relative to src/content) -> destination (relative to src/content/docs)
const MAP = [
  // Blueprint
  { src: 'blueprint-overview.md', dest: 'blueprint/blueprint-overview.md', category: 'blueprint', order: 1 },
  { src: 'modules/big-picture.md', dest: 'blueprint/big-picture.md', category: 'blueprint', order: 2 },
  { src: 'remote-valley-os.md', dest: 'blueprint/remote-valley-os.md', category: 'blueprint', order: 3 },
  { src: 'innovation-board.md', dest: 'blueprint/innovation-board.md', category: 'blueprint', order: 4 },
  { src: 'jumla-pilot-report.md', dest: 'blueprint/jumla-pilot-report.md', category: 'blueprint', order: 5 },
  { src: 'press-release-2026.md', dest: 'blueprint/press-release-2026.md', category: 'blueprint', order: 6 },
  { src: 'about.md', dest: 'blueprint/about.md', category: 'blueprint', order: 7 },

  // Modules
  { src: 'modules/trash-to-filament.md', dest: 'modules/trash-to-filament.md', category: 'modules', order: 1 },
  { src: 'modules/water-purification.md', dest: 'modules/water-purification.md', category: 'modules', order: 2 },
  { src: 'modules/energy-microgrid.md', dest: 'modules/energy-microgrid.md', category: 'modules', order: 3 },
  { src: 'modules/food-production.md', dest: 'modules/food-production.md', category: 'modules', order: 4 },
  { src: 'modules/logistics-ev.md', dest: 'modules/logistics-ev.md', category: 'modules', order: 5 },
  { src: 'modules/mesh-communication.md', dest: 'modules/mesh-communication.md', category: 'modules', order: 6 },

  // Program
  { src: 'residency.md', dest: 'program/residency.md', category: 'program', order: 1 },
  { src: 'accelerator.md', dest: 'program/accelerator.md', category: 'program', order: 2 },
  { src: 'join.md', dest: 'program/join.md', category: 'program', order: 3 },
  { src: 'faq.md', dest: 'program/faq.md', category: 'program', order: 4 },

  // Community
  { src: 'CONTRIBUTING.md', dest: 'community/contributing.md', category: 'community', order: 1 },
  { src: 'CODE_OF_CONDUCT.md', dest: 'community/code-of-conduct.md', category: 'community', order: 2 },
  { src: 'community-guidelines.md', dest: 'community/community-guidelines.md', category: 'community', order: 3 },
  { src: 'governance.md', dest: 'community/governance.md', category: 'community', order: 4 },
  { src: 'SECURITY.md', dest: 'community/security.md', category: 'community', order: 5 },

  // Strategy
  { src: 'launch-strategy.md', dest: 'strategy/launch-strategy.md', category: 'strategy', order: 1 },
  { src: 'product-hunt-listing.md', dest: 'strategy/product-hunt-listing.md', category: 'strategy', order: 2 },
  { src: 'media-kit.md', dest: 'strategy/media-kit.md', category: 'strategy', order: 3 },
  { src: 'talent-attraction.md', dest: 'strategy/talent-attraction.md', category: 'strategy', order: 4 },

  // Brand
  { src: 'brand-assets.md', dest: 'brand/brand-assets.md', category: 'brand', order: 1 },
  { src: 'voice-and-tone.md', dest: 'brand/voice-and-tone.md', category: 'brand', order: 2 },

  // Meta
  { src: 'README.md', dest: 'meta/readme.md', category: 'meta', order: 1 },
  { src: 'index.md', dest: 'meta/index.md', category: 'meta', order: 2 },
];

function extractTitle(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : 'Untitled';
}

function extractDescription(body) {
  const lines = body.split('\n').map((l) => l.trim());
  // Prefer a bold tagline near the top
  for (const line of lines.slice(0, 12)) {
    const m = line.match(/^\*\*(.+?)\*\*$/);
    if (m) return m[1].trim();
  }
  // Otherwise the first real paragraph
  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith('#')) continue;
    if (line.startsWith('**')) continue;
    if (line === '---') continue;
    if (line.startsWith('|')) continue;
    return line.length > 180 ? line.slice(0, 177).trimEnd() + '…' : line;
  }
  return '';
}

function yamlString(value) {
  return JSON.stringify(String(value));
}

let moved = 0;
let skipped = 0;

for (const entry of MAP) {
  const srcPath = join(contentDir, entry.src);
  const destPath = join(docsDir, entry.dest);

  if (!existsSync(srcPath)) {
    console.warn(`  skip (missing): ${entry.src}`);
    skipped++;
    continue;
  }

  let body = readFileSync(srcPath, 'utf8');
  if (body.startsWith('---\n')) {
    console.warn(`  skip (has frontmatter): ${entry.src}`);
    skipped++;
    continue;
  }

  const title = extractTitle(body);
  const description = extractDescription(body);

  const frontmatter = [
    '---',
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `category: ${entry.category}`,
    `order: ${entry.order}`,
    '---',
    '',
  ].join('\n');

  mkdirSync(dirname(destPath), { recursive: true });
  writeFileSync(destPath, frontmatter + body);
  unlinkSync(srcPath);
  console.log(`  ${entry.src} -> docs/${entry.dest}  "${title}"`);
  moved++;
}

console.log(`\nDone: ${moved} moved, ${skipped} skipped.`);
