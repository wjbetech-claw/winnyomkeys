import type { Service } from "@/content/site";

type ServicesSectionProps = {
  services: Service[];
};

const sectionClass = "mt-8 grid gap-4";
const headerClass =
  "grid justify-items-center gap-2 text-center [scroll-margin-top:120px]";
const titleClass =
  "max-w-[24ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.04] tracking-[-0.05em] text-balance";
const gridClass = "grid gap-4 lg:grid-cols-2";
const cardClass =
  "grid gap-2 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-[22px] shadow-[0_28px_80px_rgba(0,0,0,0.22)]";
const topRowClass = "flex items-center justify-between gap-3";
const iconClass =
  "inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)),rgba(10,12,16,0.4)] text-[rgba(232,238,249,0.92)]";
const indexClass =
  "mb-0 text-[0.74rem] uppercase tracking-[0.18em] text-[var(--muted)]";
const headingClass = "mt-0.5 text-[1.12rem] leading-[1.35] font-semibold";
const bodyClass = "m-0 leading-[1.72] text-[var(--soft-text)]";

function ServiceIcon({ title }: { title: string }) {
  if (title === "Repairs") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m20.2 7.1-3.3 3.3-3.4-3.4 3.3-3.3a5.3 5.3 0 0 0-6.6 6.6l-6 6V20h3.7l6-6a5.3 5.3 0 0 0 6.3-1l-3.5-3.5L20.2 7Z" />
      </svg>
    );
  }

  if (title === "Assembly") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m14.7 3.3 6 6-1.7 1.7-1.6-1.6-3.1 3.1-1.2-1.2-1.8 1.8 1.2 1.2-5.6 5.6H3v-3.9l5.6-5.6 1.2 1.2 1.8-1.8-1.2-1.2 3.1-3.1-1.6-1.6 1.7-1.7Z" />
      </svg>
    );
  }

  if (title === "Modding") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h10v2H4V7Zm0 8h16v2H4v-2Zm7-4h9v2h-9v-2Zm5-5h3v4h-3V6ZM8 10h3v4H8v-4Zm-4 4h3v4H4v-4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 19 7v5.4c0 4.2-2.7 7.6-7 8.1-4.3-.5-7-3.9-7-8.1V7l7-3.5Zm0 3.3-4.4 2.1v3.5c0 2.8 1.6 5.2 4.4 5.8 2.8-.6 4.4-3 4.4-5.8V8.9L12 6.8Zm0 2.2 2.4 1.2-.5 1-1.9-.9-1.9.9-.5-1L12 9Zm0 2.1a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Z" />
    </svg>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      className={sectionClass}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={headerClass} id="services-header">
        <h2 id="services-title" className={titleClass}>
          Focused work for mechanical keyboards that need attention, refinement,
          or a full build path.
        </h2>
      </div>
      <div className={gridClass}>
        {services.map((service, index) => (
          <article className={cardClass} key={service.title}>
            <div className={topRowClass}>
              <span className={iconClass}>
                <ServiceIcon title={service.title} />
              </span>
              <p className={indexClass}>{String(index + 1).padStart(2, "0")}</p>
            </div>
            <h3 className={headingClass}>{service.title}</h3>
            <p className={bodyClass}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
