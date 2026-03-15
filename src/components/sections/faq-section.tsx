import styles from "@/app/page.module.css";
import type { FAQ } from "@/content/site";

type FaqSectionProps = {
  faqs: FAQ[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
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
  );
}
