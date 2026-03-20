import styles from "@/app/page.module.css";

export function ContactSection() {
  return (
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
        <a className={styles.primaryCta} href="mailto:winnyomkeys@gmail.com">
          winnyomkeys@gmail.com
        </a>
        <p className={styles.contactNote}>
          Use this email for inquiries until the final business contact channel
          is confirmed.
        </p>
      </div>
    </section>
  );
}
