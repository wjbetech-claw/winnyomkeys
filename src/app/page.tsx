import { ThemeToggle } from "@/components/theme-toggle";
import {
  AudienceSection,
  ContactSection,
  FooterSection,
  FaqSection,
  HeroSection,
  ServicesSection,
} from "@/components/sections";
import { faqs, services } from "@/content/site";
import styles from "./page.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "Seoul-based service",
  "Repair, build, and tuning work",
  "Korean / English-friendly communication",
];

const audience = [
  "A board has a problem and you want a sensible diagnosis.",
  "You want a custom build assembled cleanly and thoughtfully.",
  "Your keyboard works, but the feel, sound, or tuning is not quite right.",
  "You are new to mechanical keyboards and want grounded advice before spending more.",
];

function WinnyomKeysMark() {
  return (
    <span className={styles.logoMark} aria-hidden="true">
      <span className={styles.logoInset}>
        <span className={styles.logoLetters}>wk</span>
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#top" aria-label="WinnyomKeys home">
          <WinnyomKeysMark />
          <span className={styles.brandTextWrap}>
            <span className={styles.brandName}>winnyomkeys</span>
            <span className={styles.brandMeta}>Mech. Keyboards | Seoul</span>
          </span>
        </a>

        <div className={styles.navbarRight}>
          <nav className={styles.navLinks} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <HeroSection highlights={highlights} />
      <ServicesSection services={services} />
      <AudienceSection audience={audience} />
      <FaqSection faqs={faqs} />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
