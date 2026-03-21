"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export type ThemeToggleLabels = {
  light: string;
  dark: string;
  switchToLight: string;
  switchToDark: string;
};

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(
    "winnyomkeys-theme"
  ) as Theme | null;

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("winnyomkeys-theme", theme);
}

type ThemeToggleProps = {
  labels: ThemeToggleLabels;
};

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const currentThemeLabel = theme === "dark" ? labels.dark : labels.light;
  const nextThemeLabel =
    nextTheme === "dark" ? labels.switchToDark : labels.switchToLight;

  return (
    <button
      type="button"
      className="inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-(--pill-bg) text-(--foreground) transition-[background-color,border-color] duration-200 hover:bg-(--pill-hover) focus-visible:bg-(--pill-hover)"
      onClick={() => {
        setTheme(nextTheme);
      }}
      aria-label={nextThemeLabel}
      title={nextThemeLabel}
    >
      <span className="inline-flex items-center gap-2 px-2.5 sm:px-3">
        <span className="inline-flex w-4.5 items-center justify-center text-[0.95rem]">
          {theme === "dark" ? (
            <MoonStar className="h-4.5 w-4.5" aria-hidden="true" />
          ) : (
            <SunMedium className="h-4.5 w-4.5" aria-hidden="true" />
          )}
        </span>
        <span className="hidden text-[0.82rem] font-semibold capitalize sm:inline">
          {currentThemeLabel}
        </span>
      </span>
    </button>
  );
}
