import Image from "next/image";

import styles from "@/app/page.module.css";

type HeroSectionProps = {
  highlights: string[];
};

const heroImageUrl =
  "https://images.unsplash.com/photo-1732608576828-8e9dd58a1bd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroCopy}>
        <h1>Mechanical keyboard workshop.</h1>
        <p className={styles.lead}>
          Repair & modding studio based in Seoul, Korea.
        </p>
        <ul className={styles.highlightRow} aria-label="Service highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="mailto:winnyomkeys@gmail.com">
            Start an inquiry
          </a>
          <a className={styles.secondaryCta} href="#services-header">
            View services
          </a>
        </div>
      </div>

      <div className={styles.heroStage} aria-hidden="true">
        <div className={styles.stageGlow} />
        <figure className={styles.heroImageCard}>
          <Image
            src={heroImageUrl}
            alt=""
            fill
            priority
            sizes="(min-width: 860px) 42vw, 100vw"
            className={styles.heroPhoto}
          />
          <div className={styles.heroPhotoScrim} />
          <figcaption className={styles.heroPhotoOverlay}>
            <p>
              Hands-on repair, tuning, and practical keyboard advice for boards
              that need real attention.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
