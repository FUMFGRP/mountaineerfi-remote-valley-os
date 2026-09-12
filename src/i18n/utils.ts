import en from './ui/en.json';
import ne from './ui/ne.json';
import hi from './ui/hi.json';
import ru from './ui/ru.json';
import { defaultLocale, locales, type Locale } from './index';

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ne, hi, ru };

/** Returns the full translation dictionary for a locale. */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Build a locale-aware path. en -> "/board", ne -> "/ne/board" */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (!clean) return prefix ? `${prefix}/` : '/';
  return `${prefix}/${clean}`;
}

/** Extract the locale from a pathname, defaulting to English. */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

/** Build the equivalent path in another locale, preserving the page. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const current = getLocaleFromPath(pathname);
  let rest = pathname;
  if (current !== defaultLocale) {
    rest = pathname.replace(new RegExp(`^/${current}`), '');
  }
  return localizePath(rest || '/', target);
}
