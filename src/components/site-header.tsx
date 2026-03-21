import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle, type ThemeToggleLabels } from "@/components/theme-toggle";
import type { Locale } from "@/i18n/config";

type HeaderNavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  locale: Locale;
  homeHref: string;
  homeAriaLabel: string;
  brandName: string;
  brandTagline: string;
  navItems: HeaderNavItem[];
  languageToggle: {
    label: string;
    english: string;
    korean: string;
  };
  themeToggle: ThemeToggleLabels;
};

function WinnyomKeysMark() {
  return (
    <span
      className="relative h-12.5 w-12.5 shrink-0 rounded-xl border border-[rgba(63,56,45,0.55)] bg-[linear-gradient(180deg,#d8d0bf_0%,#b8ae98_100%)] p-0.75 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_18px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] duration-220 ease-[cubic-bezier(0.16,1,0.3,1)]"
      aria-hidden="true"
    >
      <span className="grid h-full w-full place-items-center rounded-[9px] bg-[linear-gradient(180deg,#f0eadc_0%,#cbc1ac_100%)] shadow-[inset_0_-3px_0_rgba(110,98,80,0.35),inset_0_1px_0_rgba(255,255,255,0.55)]">
        <span className="inline-block -translate-y-0.5 text-[1.08rem] font-bold leading-none tracking-[-0.14em] lowercase text-[#241f17]">
          wk
        </span>
      </span>
    </span>
  );
}

export function SiteHeader({
  locale,
  homeHref,
  homeAriaLabel,
  brandName,
  brandTagline,
  navItems,
  languageToggle,
  themeToggle,
}: SiteHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex w-full items-start justify-between gap-3 px-4 py-3.5 backdrop-blur-[20px] sm:items-center sm:gap-4.5 sm:px-6 sm:py-4 lg:px-9">
      <a
        className="inline-flex min-w-0 max-w-[calc(100%-9rem)] items-center gap-3 sm:max-w-none"
        href={homeHref}
        aria-label={homeAriaLabel}
      >
        <WinnyomKeysMark />
        <span className="grid gap-0.5">
          <span className="text-[0.98rem] font-semibold tracking-[-0.03em]">
            {brandName}
          </span>
          <span
            className={`text-[0.75rem] text-(--muted) ${
              locale === "ko"
                ? "ko-tagline tracking-[0.06em]"
                : "uppercase tracking-[0.14em]"
            }`}
          >
            {brandTagline}
          </span>
        </span>
      </a>

      <div className="ml-auto flex items-center justify-end gap-2.5">
        <nav
          className="hidden flex-wrap items-center gap-2 lg:inline-flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2.5 text-[0.94rem] text-(--soft-text) transition-[color,background-color,transform] duration-200 hover:-translate-y-px hover:bg-(--pill-hover) hover:text-(--foreground) focus-visible:-translate-y-px focus-visible:bg-(--pill-hover) focus-visible:text-(--foreground) ${
                locale === "ko" ? "ko-copy tracking-[-0.01em]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle
            locale={locale}
            label={languageToggle.label}
            englishLabel={languageToggle.english}
            koreanLabel={languageToggle.korean}
          />
          <ThemeToggle labels={themeToggle} />
        </div>
      </div>
    </header>
  );
}
