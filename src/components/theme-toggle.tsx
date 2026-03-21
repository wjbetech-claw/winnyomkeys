"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-(--pill-bg) text-(--foreground) transition-[background-color,border-color] duration-200 hover:bg-(--pill-hover) focus-visible:bg-(--pill-hover)"
      onClick={() => {
        setTheme(nextTheme);
      }}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className="inline-flex items-center gap-2 px-3">
        <span className="inline-flex w-4.5 items-center justify-center text-[0.95rem]">
          {theme === "dark" ? "☾" : "☀"}
        </span>
        <span className="text-[0.82rem] font-semibold capitalize">{theme}</span>
      </span>
    </button>
  );
}
