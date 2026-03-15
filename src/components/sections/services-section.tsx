import styles from "@/app/page.module.css";
import type { Service } from "@/content/site";

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      className={styles.section}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={styles.sectionHeader}>
        <p className={styles.sectionLabel}>Services</p>
        <h2 id="services-title">
          Focused work for mechanical keyboards that need attention, refinement,
          or a full build path.
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
  );
}
