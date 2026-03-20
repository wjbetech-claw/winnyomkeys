const footerClass =
  "flex flex-wrap justify-between gap-x-5 gap-y-2.5 px-1 pt-[34px] pb-2 text-[0.95rem] text-[var(--muted)]";
const paragraphClass = "m-0";

export function FooterSection() {
  return (
    <footer className={footerClass}>
      <p className={paragraphClass}>WinnyomKeys</p>
      <p className={paragraphClass}>
        Mechanical keyboard repair, builds, tuning, and troubleshooting in
        Seoul.
      </p>
    </footer>
  );
}
