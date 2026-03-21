import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

import { getPreferredLocale, localeHeaderName } from "@/i18n/config";
import { siteUrl } from "@/seo/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Winny Omkeys",
  title: "Winny Omkeys",
  description:
    "Mechanical keyboard repair, builds, tuning, and troubleshooting in Seoul.",
};

const themeScript = `(function () {
  const storedTheme = window.localStorage.getItem("winnyomkeys-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = storedTheme || (prefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const locale = getPreferredLocale(headerStore.get(localeHeaderName));

  return (
    <html lang={locale} data-locale={locale}>
      <body className={`${inter.variable} ${notoSansKr.variable}`}>
        <Script id="theme-script">{themeScript}</Script>
        {children}
      </body>
    </html>
  );
}
