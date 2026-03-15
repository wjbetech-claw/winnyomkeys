import styles from "@/app/page.module.css";

type Principle = {
  title: string;
  description: string;
};

type PrinciplesSectionProps = {
  principles: Principle[];
};

export function PrinciplesSection({ principles }: PrinciplesSectionProps) {
  return (
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
  );
}
