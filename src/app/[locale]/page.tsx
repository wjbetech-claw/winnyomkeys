import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ContactSection,
  FooterSection,
  HeroSection,
  ServicesSection,
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/content/i18n";
import { isLocale, locales } from "@/i18n/config";
import { buildPageMetadata } from "@/seo/site";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/",
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  const navItems = [
    { label: dictionary.nav.services, href: "#services" },
    { label: dictionary.nav.faq, href: `/${locale}/faq` },
    { label: dictionary.nav.contact, href: "#contact" },
  ];

  return (
    <main
      id="top"
      className="relative mx-auto w-full max-w-295 px-4 pb-10 pt-26 sm:px-6 lg:px-10 before:pointer-events-none before:fixed before:inset-0 before:content-[''] before:opacity-35 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-size-[72px_72px] before:mask-[radial-gradient(circle_at_center,black_28%,transparent_82%)]"
    >
      <SiteHeader
        locale={locale}
        homeHref={`/${locale}`}
        homeAriaLabel={dictionary.brand.homeAriaLabel}
        brandName={dictionary.brand.name}
        brandTagline={dictionary.brand.tagline}
        navItems={navItems}
        languageToggle={dictionary.languageToggle}
        themeToggle={dictionary.themeToggle}
      />

      <HeroSection
        locale={locale}
        highlights={dictionary.home.highlights}
        title={dictionary.home.hero.title}
        subtitle={dictionary.home.hero.subtitle}
        primaryCtaLabel={dictionary.home.hero.primaryCta}
        secondaryCtaLabel={dictionary.home.hero.secondaryCta}
        imageCaption={dictionary.home.hero.imageCaption}
      />
      <ServicesSection
        title={dictionary.home.servicesTitle}
        services={dictionary.services}
      />
      <ContactSection
        title={dictionary.home.contact.title}
        description={dictionary.home.contact.description}
      />
      <FooterSection
        brandName={dictionary.brand.name}
        description={dictionary.footer.description}
      />
    </main>
  );
}
