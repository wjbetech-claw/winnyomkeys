import styles from "@/app/page.module.css";

type HeroSectionProps = {
  highlights: string[];
};

export function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <h1>Clean keyboard work, done with care and restraint.</h1>
        <p className={styles.lead}>
          Repair, build, mod, and tuning support for mechanical keyboards —
          presented with the same precision the work itself should have.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="mailto:hello@winnyomkeys.com">
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
        <div className={styles.explodedBoard}>
          <div className={`${styles.boardLayer} ${styles.layerKeycaps}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>Keycaps</span>
              <span className={styles.layerMaterial}>PBT surface</span>
            </div>
            <div className={styles.keycapMatrix}>
              {Array.from({ length: 15 }).map((_, index) => (
                <span key={index} className={styles.heroKeycap} />
              ))}
            </div>
          </div>

          <div className={`${styles.boardLayer} ${styles.layerPlate}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>Plate</span>
              <span className={styles.layerMaterial}>Rigid support</span>
            </div>
            <div className={styles.plateSlots}>
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className={styles.plateSlot} />
              ))}
            </div>
          </div>

          <div className={`${styles.boardLayer} ${styles.layerSilicone}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>Silicone</span>
              <span className={styles.layerMaterial}>Dampening layer</span>
            </div>
          </div>

          <div className={`${styles.boardLayer} ${styles.layerFoam}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>Foam</span>
              <span className={styles.layerMaterial}>Acoustic control</span>
            </div>
          </div>

          <div className={`${styles.boardLayer} ${styles.layerPcb}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>PCB</span>
              <span className={styles.layerMaterial}>Signal path</span>
            </div>
            <div className={styles.pcbTrace} />
          </div>

          <div className={`${styles.boardLayer} ${styles.layerCase}`}>
            <div className={styles.layerHeader}>
              <span className={styles.layerName}>Aluminum base</span>
              <span className={styles.layerMaterial}>Case foundation</span>
            </div>
            <div className={styles.caseFeet}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
