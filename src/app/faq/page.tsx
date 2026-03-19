import { ThemeToggle } from "@/components/theme-toggle";
import { FooterSection } from "@/components/sections";
import { faqs } from "@/content/site";
import styles from "../page.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
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

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="/" aria-label="WinnyomKeys home">
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

      <section className={styles.section} aria-labelledby="faq-page-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>FAQ</p>
          <h1 id="faq-page-title">Straight answers, without the usual filler.</h1>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details className={styles.faqItem} key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
