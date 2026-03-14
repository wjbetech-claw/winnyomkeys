"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

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
      className={styles.themeToggle}
      onClick={() => {
        setTheme(nextTheme);
      }}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className={styles.themeToggleTrack}>
        <span className={styles.themeToggleIcon}>
          {theme === "dark" ? "☾" : "☀"}
        </span>
        <span className={styles.themeToggleLabel}>{theme}</span>
      </span>
    </button>
  );
}
