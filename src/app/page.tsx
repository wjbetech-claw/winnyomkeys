import { faqs, processSteps, services } from "@/content/site";
import styles from "./page.module.css";

const trustPoints = [
  "Seoul-based service focus",
  "Repair, build, and mod work",
  "Clear communication before changes",
  "Minimal, honest presentation with no fake claims",
];

const audiences = [
  "Mechanical keyboard owners with issues to fix",
  "Enthusiasts planning a custom build",
  "People who want a board tuned, repaired, or restored",
  "Beginners who want straightforward guidance before buying or upgrading",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            Seoul, Korea · Mechanical keyboard craft
          </p>
          <h1>Repair, build, and tune keyboards with care.</h1>
          <p className={styles.lead}>
            WinnyomKeys helps keyboard owners in Seoul understand what is wrong,
            what can be improved, and what a clean path forward looks like.
          </p>
          <div className={styles.ctaRow}>
            <a
              className={styles.primaryCta}
              href="mailto:hello@winnyomkeys.com"
            >
              Start an inquiry
            </a>
            <a className={styles.secondaryCta} href="#services">
              Explore services
            </a>
          </div>
          <ul className={styles.inlineList} aria-label="Trust signals">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <aside className={styles.heroPanel} aria-label="Service positioning">
          <p className={styles.panelLabel}>What the site should communicate</p>
          <ul className={styles.panelList}>
            <li>Careful diagnosis before action</li>
            <li>Honest scope, no inflated promises</li>
            <li>Premium feel without unnecessary noise</li>
            <li>Accessible contact path for real customers</li>
          </ul>
        </aside>
      </section>

      <section className={styles.section} aria-labelledby="value-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Value proposition</p>
          <h2 id="value-title">
            A practical service for people who want their keyboard handled
            properly.
          </h2>
        </div>
        <div className={styles.gridTwo}>
          <p>
            The goal is simple: help visitors quickly understand what
            WinnyomKeys does, who it is for, and how to get in touch without
            wading through fluff or inflated marketing language.
          </p>
          <p>
            The tone stays calm, precise, and professional so the site feels
            credible for repairs, custom builds, tuning work, and technical
            troubleshooting.
          </p>
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
            Focused services for real keyboard problems and projects.
          </h2>
        </div>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="audience-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Who this is for</p>
          <h2 id="audience-title">
            Built for both enthusiasts and people who just want their keyboard
            working right.
          </h2>
        </div>
        <div className={styles.cardGrid}>
          {audiences.map((audience) => (
            <article className={styles.card} key={audience}>
              <p>{audience}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="workflow-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Workflow</p>
          <h2 id="workflow-title">
            A simple process that keeps expectations clear.
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

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>FAQ</p>
          <h2 id="faq-title">Clear answers for the basics.</h2>
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
        aria-labelledby="contact-title"
      >
        <div>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 id="contact-title">
            Send a short message and start with the keyboard you already have.
          </h2>
          <p>
            Best first message: keyboard model, issue or goal, any parts already
            involved, and where you are based in Seoul or nearby.
          </p>
        </div>
        <div className={styles.contactActions}>
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
        <p>WinnyomKeys · Seoul, Korea</p>
        <p>Mechanical keyboard repair, builds, tuning, and troubleshooting.</p>
      </footer>
    </main>
  );
}
