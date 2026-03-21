"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  localizePath,
  localeCookieName,
  stripLocaleFromPath,
  type Locale,
} from "@/i18n/config";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
  englishLabel: string;
  koreanLabel: string;
};

const cookieMaxAge = 60 * 60 * 24 * 365;

export function LanguageToggle({
  locale,
  label,
  englishLabel,
  koreanLabel,
}: LanguageToggleProps) {
  const pathname = usePathname();
  const basePath = stripLocaleFromPath(pathname || "/");

  const options: Array<{ locale: Locale; label: string }> = [
    { locale: "en", label: englishLabel },
    { locale: "ko", label: koreanLabel },
  ];

  return (
    <div
      className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-(--border) bg-(--pill-bg) p-1"
      aria-label={label}
      role="group"
    >
      {options.map((option) => {
        const isActive = option.locale === locale;
        const href = localizePath(basePath, option.locale);

        return (
          <Link
            key={option.locale}
            href={href}
            onClick={() => {
              document.cookie = `${localeCookieName}=${option.locale}; path=/; max-age=${cookieMaxAge}; samesite=lax`;
            }}
            className={`inline-flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 text-[0.82rem] font-semibold transition-[background-color,color] duration-200 ${
              isActive
                ? "bg-(--foreground) text-(--background)"
                : "text-(--soft-text) hover:bg-(--pill-hover) hover:text-(--foreground) focus-visible:bg-(--pill-hover) focus-visible:text-(--foreground)"
            }`}
            hrefLang={option.locale}
            aria-current={isActive ? "true" : undefined}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
