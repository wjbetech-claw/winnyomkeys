import { SiGithub, SiInstagram, SiX } from "react-icons/si";

export function ContactSection() {
  return (
    <section
      className="mx-auto mt-16 mb-16 grid w-full max-w-7xl justify-items-center gap-8 px-0 py-10 text-center lg:mt-24 lg:mb-24 h-150 content-center scroll-mt-5"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="grid justify-items-center gap-4 text-center">
        <h2
          id="contact-title"
          className="max-w-[18ch] text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-balance"
        >
          Let&apos;s get started.
        </h2>
        <p className="max-w-[44ch] leading-[1.72] text-(--soft-text)">
          Send the keyboard model, what feels wrong or what you want improved,
          any relevant parts, and we can take it from there.
        </p>
      </div>
      <div className="grid w-full max-w-3xl justify-items-center gap-5">
        <a
          className="inline-flex min-h-10 items-center justify-center overflow-hidden rounded-full border border-(--border) bg-[linear-gradient(135deg,#eef2ff_0%,#d8e0ff_100%)] px-4 text-[0.88rem] font-semibold text-[#09101b] shadow-[0_12px_34px_rgba(140,164,255,0.22)] transition-[background-color,border-color,box-shadow] duration-200 hover:border-[rgba(255,255,255,0.2)] focus-visible:border-[rgba(255,255,255,0.2)]"
          href="mailto:winnyomkeys@gmail.com"
        >
          winnyomkeys@gmail.com
        </a>
        <div className="grid gap-2 justify-items-center">
          <div
            className="flex flex-wrap justify-center gap-2.5 mt-4"
            aria-label="Social links"
          >
            <a
              className="inline-flex items-center justify-center p-1 text-(--foreground) transition-opacity duration-200 opacity-80 hover:opacity-100 focus-visible:opacity-100"
              href="https://instagram.com/winnyomkeys"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              className="inline-flex items-center justify-center p-1 text-(--foreground) transition-opacity duration-200 opacity-80 hover:opacity-100 focus-visible:opacity-100"
              href="https://x.com/winnyomkeys"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <SiX className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              className="inline-flex items-center justify-center p-1 text-(--foreground) transition-opacity duration-200 opacity-80 hover:opacity-100 focus-visible:opacity-100"
              href="https://github.com/winnyomkeys"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
