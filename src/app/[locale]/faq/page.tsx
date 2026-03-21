import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FooterSection } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/content/i18n";
import { isLocale, locales } from "@/i18n/config";
import { buildPageMetadata } from "@/seo/site";

type FaqPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: FaqPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/faq",
    title: `${dictionary.faqPage.eyebrow} | ${dictionary.metadata.title}`,
    description: dictionary.faqPage.description,
  });
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  const navItems = [
    { label: dictionary.nav.home, href: `/${locale}` },
    { label: dictionary.nav.services, href: `/${locale}#services` },
    { label: dictionary.nav.contact, href: `/${locale}#contact` },
  ];

  return (
    <main className="relative mx-auto w-full max-w-295 px-4 pb-10 pt-26 sm:px-6 lg:px-10 before:pointer-events-none before:fixed before:inset-0 before:content-[''] before:opacity-35 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-size-[72px_72px] before:mask-[radial-gradient(circle_at_center,black_28%,transparent_82%)]">
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

      <section className="mt-8 grid gap-4" aria-labelledby="faq-page-title">
        <div className="grid gap-2">
          <p className="text-[0.74rem] uppercase tracking-[0.18em] text-(--muted)">
            {dictionary.faqPage.eyebrow}
          </p>
          <h1
            id="faq-page-title"
            className="ko-tight-balance max-w-[18ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.04] tracking-[-0.05em] text-balance"
          >
            {dictionary.faqPage.title}
          </h1>
        </div>
        <div className="grid gap-4">
          {dictionary.faqs.map((faq) => (
            <details
              className="rounded-[22px] border border-(--border) bg-(--surface) p-[20px_22px] shadow-[0_28px_80px_rgba(0,0,0,0.22)]"
              key={faq.id}
            >
              <summary className="ko-copy cursor-pointer list-none text-[1.12rem] font-semibold leading-[1.35] [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="ko-copy mt-3.5 leading-[1.72] text-(--soft-text)">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <FooterSection
        brandName={dictionary.brand.name}
        description={dictionary.footer.description}
      />
    </main>
  );
}
