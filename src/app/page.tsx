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

export default function Home() {
  return (
    <main
      id="top"
      className="relative mx-auto w-full max-w-295 px-4 pb-10 pt-26 sm:px-6 lg:px-10 before:pointer-events-none before:fixed before:inset-0 before:content-[''] before:opacity-35 before:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-size-[72px_72px] before:mask-[radial-gradient(circle_at_center,black_28%,transparent_82%)]"
    >
      <header className="fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between gap-4.5 px-4 py-4 backdrop-blur-[20px] sm:px-6 lg:px-9">
        <a
          className="inline-flex min-w-0 items-center gap-3"
          href="#top"
          aria-label="WinnyomKeys home"
        >
          <WinnyomKeysMark />
          <span className="grid gap-0.5">
            <span className="text-[0.98rem] font-semibold tracking-[-0.03em]">
              winnyomkeys
            </span>
            <span className="text-[0.75rem] uppercase tracking-[0.14em] text-(--muted)">
              Mech. Keyboards | Seoul
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
                className="rounded-full px-3.5 py-2.5 text-[0.94rem] text-(--soft-text) transition-[color,background-color,transform] duration-200 hover:-translate-y-px hover:bg-(--pill-hover) hover:text-(--foreground) focus-visible:-translate-y-px focus-visible:bg-(--pill-hover) focus-visible:text-(--foreground)"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <HeroSection highlights={highlights} />
      <ServicesSection services={services} />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
