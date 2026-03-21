import { defaultLocale, type Locale } from "@/i18n/config";

import { en } from "./en";
import { ko } from "./ko";

export type { Dictionary, FAQ, Service, ServiceId } from "./types";

const dictionaries = {
  en,
  ko,
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
