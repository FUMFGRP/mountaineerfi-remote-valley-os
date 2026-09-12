export const defaultLocale = 'en';

export const locales = ['en', 'ne', 'hi', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const nonDefaultLocales = locales.filter(
  (l): l is Exclude<Locale, typeof defaultLocale> => l !== defaultLocale
);

// Native names, shown in the language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  ne: 'नेपाली',
  hi: 'हिन्दी',
  ru: 'Русский',
};

// Short labels
export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ne: 'ने',
  hi: 'हि',
  ru: 'RU',
};

// <html lang="...">
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ne: 'ne',
  hi: 'hi',
  ru: 'ru',
};

// hreflang values (same as htmlLang here; separate for clarity)
export const hreflang: Record<Locale, string> = {
  en: 'en',
  ne: 'ne',
  hi: 'hi',
  ru: 'ru',
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
