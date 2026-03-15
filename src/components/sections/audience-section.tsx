import styles from "@/app/page.module.css";

type AudienceSectionProps = {
  audience: string[];
};

export function AudienceSection({ audience }: AudienceSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="audience-title">
      <div className={styles.splitLayout}>
        <div className={styles.sectionHeaderCompact}>
          <p className={styles.sectionLabel}>Who it is for</p>
          <h2 id="audience-title">
            Good for enthusiasts, useful for beginners, and clear for people who
            just want their board sorted out properly.
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
  );
}
