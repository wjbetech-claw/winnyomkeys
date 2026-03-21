export const locales = ["en", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "winnyomkeys-locale";
export const localeHeaderName = "x-winnyomkeys-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (!isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const remainder = segments.slice(2).join("/");
  return remainder ? `/${remainder}` : "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalized = stripLocaleFromPath(pathname);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}
