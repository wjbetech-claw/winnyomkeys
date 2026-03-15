import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "winnyomkeys";
const siteDescription =
  "Mechanical keyboard repair, builds, and tuning in Seoul, Korea. Clean, careful service for repairs, mods, troubleshooting, and custom builds.";
const siteUrl = "https://winnyomkeys.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Keyboard Repair & Custom Builds in Seoul`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Keyboard Repair & Custom Builds in Seoul`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Keyboard Repair & Custom Builds in Seoul`,
    description: siteDescription,
  },
  category: "technology",
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('winnyomkeys-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (systemDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
