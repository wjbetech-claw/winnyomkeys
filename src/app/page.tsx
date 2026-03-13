import { faqs, processSteps, services } from "@/content/site";
import styles from "./page.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  "Seoul-based service",
  "Repair, build, and tuning work",
  "Korean / English-friendly communication",
];

const principles = [
  {
    title: "Precision over noise",
    description:
      "The experience should feel closer to a careful workshop than a loud promo page. The work is detailed, and the site should reflect that.",
  },
  {
    title: "Honest scope",
    description:
      "No fake claims, no invented lead times, no vague marketing promises. Just a clear explanation of what can be done and how to begin.",
  },
  {
    title: "Built for trust",
    description:
      "Visitors should immediately understand the service, the tone, and the level of care behind repair and custom keyboard work.",
  },
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
    <main className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#top" aria-label="WinnyomKeys home">
          <WinnyomKeysMark />
          <span className={styles.brandTextWrap}>
            <span className={styles.brandName}>WinnyomKeys</span>
            <span className={styles.brandMeta}>Seoul keyboard craft</span>
          </span>
        </a>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>WinnyomKeys · Seoul, Korea</p>
          <h1>Clean keyboard work, done with care and restraint.</h1>
          <p className={styles.lead}>
            Repair, build, mod, and tuning support for mechanical keyboards —
            presented with the same precision the work itself should have.
          </p>
          <div className={styles.ctaRow}>
            <a
              className={styles.primaryCta}
              href="mailto:hello@winnyomkeys.com"
            >
              Start an inquiry
            </a>
            <a className={styles.secondaryCta} href="#services">
              View services
            </a>
          </div>
          <ul className={styles.highlightRow} aria-label="Service highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.heroStage} aria-hidden="true">
          <div className={styles.stageGlow} />
          <div className={styles.keyboardFrame}>
            <div className={styles.keyboardTopRow}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.keyboardGrid}>
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className={styles.keycap} />
              ))}
            </div>
            <div className={styles.keyboardFooter}>
              <span className={styles.boardLabel}>
                fine tuning · repair · build
              </span>
              <span className={styles.boardAccent} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionBand} aria-labelledby="intro-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionLabel}>Positioning</p>
          <h2 id="intro-title">
            A landing page for a specialist service, not a generic storefront.
          </h2>
        </div>
        <div className={styles.introGrid}>
          {principles.map((principle) => (
            <article className={styles.glassCard} key={principle.title}>
              <p className={styles.cardLabel}>Principle</p>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.section}
        id="services"
        aria-labelledby="services-title"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Services</p>
          <h2 id="services-title">
            Focused work for mechanical keyboards that need attention,
            refinement, or a full build path.
          </h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <article className={styles.serviceCard} key={service.title}>
              <p className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="audience-title">
        <div className={styles.splitLayout}>
          <div className={styles.sectionHeaderCompact}>
            <p className={styles.sectionLabel}>Who it is for</p>
            <h2 id="audience-title">
              Good for enthusiasts, useful for beginners, and clear for people
              who just want their board sorted out properly.
            </h2>
          </div>
          <div className={styles.audienceList}>
            {audience.map((item) => (
              <article className={styles.lineCard} key={item}>
                <span className={styles.lineMarker} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Workflow</p>
          <h2 id="workflow-title">
            The process stays simple so expectations stay clean.
          </h2>
        </div>
        <div className={styles.timeline}>
          {processSteps.map((step) => (
            <article className={styles.timelineItem} key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="faq" aria-labelledby="faq-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>FAQ</p>
          <h2 id="faq-title">Straight answers, without the usual filler.</h2>
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

      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 id="contact-title">Start with the keyboard you already have.</h2>
          <p>
            Send the keyboard model, what feels wrong or what you want improved,
            any relevant parts, and where you are based.
          </p>
        </div>
        <div className={styles.contactPanel}>
          <a className={styles.primaryCta} href="mailto:hello@winnyomkeys.com">
            hello@winnyomkeys.com
          </a>
          <p className={styles.contactNote}>
            Placeholder contact email. Replace with the real business contact
            channel before launch.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>WinnyomKeys</p>
        <p>
          Mechanical keyboard repair, builds, tuning, and troubleshooting in
          Seoul.
        </p>
      </footer>
    </main>
  );
}
