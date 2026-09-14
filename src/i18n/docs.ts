import { getCollection } from 'astro:content';

export type DocsLocale = 'en' | 'ne';

export interface DocItem {
  slug: string;
  /** Link target: localized when translated, English otherwise */
  href: string;
  title: string;
  description: string;
  category: string;
  order: number;
  translated: boolean;
}

export const CATEGORY_ORDER = [
  'blueprint',
  'modules',
  'program',
  'community',
  'strategy',
  'brand',
  'meta',
];

export const CATEGORY_LABELS: Record<string, string> = {
  blueprint: 'Blueprint',
  modules: 'Modules',
  program: 'Program',
  community: 'Community',
  strategy: 'Strategy',
  brand: 'Brand',
  meta: 'Meta',
};

/** Sidebar list for a locale: localized where available, English fallback otherwise. */
export async function getDocItems(locale: DocsLocale): Promise<DocItem[]> {
  const en = await getCollection('docs');
  const localized = locale === 'ne' ? await getCollection('docsNe') : [];
  const bySlug = new Map(localized.map((d) => [d.slug, d]));

  const items: DocItem[] = en.map((d) => {
    const t = bySlug.get(d.slug);
    const translated = Boolean(t);
    const href =
      locale === 'en'
        ? `/blueprint/${d.slug}`
        : translated
          ? `/${locale}/blueprint/${d.slug}`
          : `/blueprint/${d.slug}`;
    return {
      slug: d.slug,
      href,
      title: t?.data.title ?? d.data.title,
      description: t?.data.description ?? d.data.description,
      category: d.data.category,
      order: d.data.order,
      translated,
    };
  });

  return items.sort(
    (a, b) =>
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) ||
      a.order - b.order
  );
}

export function docsBasePath(locale: DocsLocale): string {
  return locale === 'en' ? '/blueprint' : `/${locale}/blueprint`;
}
