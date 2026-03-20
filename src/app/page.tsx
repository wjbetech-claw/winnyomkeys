import { ThemeToggle } from "@/components/theme-toggle";
import {
  ContactSection,
  FooterSection,
  HeroSection,
  ServicesSection,
} from "@/components/sections";
import { services } from "@/content/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "Seoul-based service",
  "Repair, build, and tuning work",
  "Korean / English-friendly communication",
];

const shellClass =
  "relative mx-auto w-full max-w-[1180px] px-4 pb-10 pt-[104px] sm:px-6 lg:px-10 before:pointer-events-none before:fixed before:inset-0 before:content-[''] before:opacity-35 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-[length:72px_72px] before:[mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]";

const navbarClass =
  "fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between gap-[18px] px-4 py-4 backdrop-blur-[20px] sm:px-6 lg:px-9";

const brandClass = "inline-flex min-w-0 items-center gap-3";

const logoMarkClass =
  "relative h-[50px] w-[50px] shrink-0 rounded-[12px] border border-[rgba(63,56,45,0.55)] bg-[linear-gradient(180deg,#d8d0bf_0%,#b8ae98_100%)] p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_18px_rgba(0,0,0,0.22)] transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

const logoInsetClass =
  "grid h-full w-full place-items-center rounded-[9px] bg-[linear-gradient(180deg,#f0eadc_0%,#cbc1ac_100%)] shadow-[inset_0_-3px_0_rgba(110,98,80,0.35),inset_0_1px_0_rgba(255,255,255,0.55)]";

const logoLettersClass =
  "inline-block -translate-y-[2px] text-[1.08rem] font-bold leading-none tracking-[-0.14em] lowercase text-[#241f17]";

const brandTextWrapClass = "grid gap-0.5";
const brandNameClass = "text-[0.98rem] font-semibold tracking-[-0.03em]";
const brandMetaClass =
  "text-[0.75rem] uppercase tracking-[0.14em] text-[var(--muted)]";

const navbarRightClass = "ml-auto flex items-center justify-end gap-2.5";
const navLinksClass = "hidden flex-wrap items-center gap-2 lg:inline-flex";
const navLinkClass =
  "rounded-full px-3.5 py-2.5 text-[0.94rem] text-[var(--soft-text)] transition-[color,background-color,transform] duration-200 hover:-translate-y-px hover:bg-[var(--pill-hover)] hover:text-[var(--foreground)] focus-visible:-translate-y-px focus-visible:bg-[var(--pill-hover)] focus-visible:text-[var(--foreground)]";

function WinnyomKeysMark() {
  return (
    <span className={logoMarkClass} aria-hidden="true">
      <span className={logoInsetClass}>
        <span className={logoLettersClass}>wk</span>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className={shellClass}>
      <header className={navbarClass}>
        <a className={brandClass} href="#top" aria-label="WinnyomKeys home">
          <WinnyomKeysMark />
          <span className={brandTextWrapClass}>
            <span className={brandNameClass}>winnyomkeys</span>
            <span className={brandMetaClass}>Mech. Keyboards | Seoul</span>
          </span>
        </a>

        <div className={navbarRightClass}>
          <nav className={navLinksClass} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <HeroSection
        highlights={highlights}
        sectionClassName="mx-auto w-full max-w-7xl"
      />
      <ServicesSection services={services} />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
