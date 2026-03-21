import type { Metadata } from "next";

import { locales, type Locale } from "@/i18n/config";

export const siteUrl = new URL("https://winnyomkeys.com");
export const defaultSeoLocale: Locale = "en";

type SeoPath = "/" | "/faq";

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  ko: "ko_KR",
};

export function getLocalizedPath(locale: Locale, path: SeoPath = "/") {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function getLanguageAlternates(path: SeoPath = "/") {
  return {
    en: getLocalizedPath("en", path),
    ko: getLocalizedPath("ko", path),
    "x-default": getLocalizedPath(defaultSeoLocale, path),
  };
}

function getAlternateOpenGraphLocale(locale: Locale) {
  return locales
    .filter((value) => value !== locale)
    .map((value) => openGraphLocales[value]);
}

export function buildPageMetadata({
  locale,
  path = "/",
  title,
  description,
}: {
  locale: Locale;
  path?: SeoPath;
  title: string;
  description: string;
}): Metadata {
  const pathname = getLocalizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      url: getAbsoluteUrl(pathname),
      title,
      description,
      siteName: "Winny Omkeys",
      locale: openGraphLocales[locale],
      alternateLocale: getAlternateOpenGraphLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
