const sectionClass =
  "mt-9 grid gap-5 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.22)] lg:mt-[88px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:p-7";
const titleClass =
  "max-w-[18ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.04] tracking-[-0.05em] text-balance";
const bodyClass = "leading-[1.72] text-[var(--soft-text)]";
const panelClass = "grid content-start gap-3";
const emailClass =
  "inline-flex min-h-[50px] items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[linear-gradient(135deg,#eef2ff_0%,#d8e0ff_100%)] px-[22px] font-semibold text-[#09101b] shadow-[0_12px_34px_rgba(140,164,255,0.22)] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5";
const noteClass = "m-0 text-[0.95rem] leading-[1.72] text-[var(--soft-text)]";

export function ContactSection() {
  return (
    <section
      className={sectionClass}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div>
        <h2 id="contact-title" className={titleClass}>
          Start with the keyboard you already have.
        </h2>
        <p className={bodyClass}>
          Send the keyboard model, what feels wrong or what you want improved,
          any relevant parts, and where you are based.
        </p>
      </div>
      <div className={panelClass}>
        <a className={emailClass} href="mailto:winnyomkeys@gmail.com">
          winnyomkeys@gmail.com
        </a>
        <p className={noteClass}>
          Use this email for inquiries until the final business contact channel
          is confirmed.
        </p>
      </div>
    </section>
  );
}
