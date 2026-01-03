/**
 * i18n System
 * Provides internationalization with locale files and type-safe translations
 */
import ptLocale from '@/locales/pt.json';
import enLocale from '@/locales/en.json';
import zhLocale from '@/locales/zh.json';

export type Locale = 'pt' | 'en' | 'zh';

export const SUPPORTED_LOCALES: Locale[] = ['pt', 'en', 'zh'];

export const LOCALE_NAMES: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  zh: '中文',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
  zh: '🇨🇳',
};

// Type for nested translation keys
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string
      ? T[K] extends object
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K
      : never
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<typeof ptLocale>;

// Locale data
const locales: Record<Locale, typeof ptLocale> = {
  pt: ptLocale,
  en: enLocale,
  zh: zhLocale,
};

/**
 * Get a translation by key path
 * @param locale - The locale to use
 * @param key - Dot-separated key path (e.g., 'writings.title')
 * @param fallback - Fallback value if key not found
 */
export function getTranslation(
  locale: Locale,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.');
  let value: unknown = locales[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Try fallback locale (English)
      if (locale !== 'en') {
        return getTranslation('en', key, fallback);
      }
      return fallback || key;
    }
  }

  if (typeof value === 'string') {
    return value;
  }

  return fallback || key;
}

/**
 * Create a translation function for a specific locale
 */
export function createTranslator(locale: Locale) {
  return (key: string, fallback?: string) => getTranslation(locale, key, fallback);
}

/**
 * Get browser's preferred locale
 */
export function getBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

/**
 * Get locale from URL path
 */
export function getLocaleFromPath(path: string): Locale | null {
  const match = path.match(/^\/(pt|en|zh)(\/|$)/);
  if (match && SUPPORTED_LOCALES.includes(match[1] as Locale)) {
    return match[1] as Locale;
  }
  return null;
}

/**
 * Add locale prefix to path
 */
export function localizedPath(path: string, locale: Locale): string {
  // Remove existing locale prefix if any
  const cleanPath = path.replace(/^\/(pt|en|zh)/, '');
  return `/${locale}${cleanPath}`;
}

/**
 * Remove locale prefix from path
 */
export function stripLocale(path: string): string {
  return path.replace(/^\/(pt|en|zh)/, '') || '/';
}

/**
 * Format date according to locale
 */
export function formatDate(date: string | Date, locale: Locale): string {
  const d = typeof date === 'string' ? new Date(date.replace(/\./g, '-')) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const localeMap: Record<Locale, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    zh: 'zh-CN',
  };

  return d.toLocaleDateString(localeMap[locale], options);
}

/**
 * Format number according to locale
 */
export function formatNumber(num: number, locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    zh: 'zh-CN',
  };

  return num.toLocaleString(localeMap[locale]);
}
