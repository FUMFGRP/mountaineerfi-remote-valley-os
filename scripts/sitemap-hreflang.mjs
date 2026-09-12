// Post-processes dist/sitemap.xml to add hreflang alternates for the
// localized routes. Runs after `astro build` (see package.json).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const FILE = 'dist/sitemap.xml';
const LOCALES = ['ne', 'hi', 'ru'];
const DEFAULT = 'en';

if (!existsSync(FILE)) {
  console.log('sitemap-hreflang: no dist/sitemap.xml, skipping');
  process.exit(0);
}

const xml = readFileSync(FILE, 'utf8');

function splitLocale(url) {
  const u = new URL(url);
  const parts = u.pathname.split('/').filter(Boolean);
  let locale = DEFAULT;
  if (LOCALES.includes(parts[0])) {
    locale = parts[0];
    parts.shift();
  }
  return { locale, path: parts.join('/') };
}

// Group sitemap URLs by their locale-independent path.
const groups = new Map();
for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const loc = m[1];
  const { locale, path } = splitLocale(loc);
  if (!groups.has(path)) groups.set(path, {});
  groups.get(path)[locale] = loc;
}

let injected = 0;
let out = xml.replace(/<url>([\s\S]*?)<\/url>/g, (full, inner) => {
  const locMatch = inner.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return full;
  const { path } = splitLocale(locMatch[1]);
  const variants = groups.get(path);
  if (!variants) return full;
  const present = Object.keys(variants);
  if (present.length < 2) return full;

  let links = '';
  for (const l of present) {
    links += `<xhtml:link rel="alternate" hreflang="${l}" href="${variants[l]}"/>`;
  }
  if (variants[DEFAULT]) {
    links += `<xhtml:link rel="alternate" hreflang="x-default" href="${variants[DEFAULT]}"/>`;
  }
  injected++;
  return `<url>${inner}${links}</url>`;
});

out = out.replace(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"'
);

writeFileSync(FILE, out);
console.log(`sitemap-hreflang: added alternates to ${injected} URL groups`);
