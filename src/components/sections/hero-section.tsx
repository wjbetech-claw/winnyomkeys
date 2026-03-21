import Image from "next/image";

type HeroSectionProps = {
  highlights: string[];
};

const heroImageUrl =
  "https://images.unsplash.com/photo-1732608576828-8e9dd58a1bd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section
      className="relative mx-auto grid min-h-[calc(100vh-112px)] w-full max-w-7xl grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] items-center gap-12 py-0 max-[520px]:grid-cols-1 lg:gap-16"
      id="hero"
    >
      <div className="grid gap-4 animate-[rise-in_720ms_ease_both]">
        <h1 className="max-w-[10ch] text-[clamp(2.9rem,6vw,6.3rem)] font-bold leading-[0.9] tracking-normal text-balance">
          Mechanical keyboard workshop.
        </h1>
        <p className="max-w-[58ch] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.75] text-(--soft-text)">
          Repair & modding studio based in Seoul, Korea.
        </p>
        <ul
          className="mt-2 flex flex-wrap gap-2.5 list-none p-0"
          aria-label="Service highlights"
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-(--border) bg-(--pill-bg) px-3.5 py-2.5 text-[0.95rem] text-(--soft-text) backdrop-blur-[10px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2.5 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12.5 items-center justify-center overflow-hidden rounded-full border border-(--border) bg-[linear-gradient(135deg,#eef2ff_0%,#d8e0ff_100%)] px-5.5 font-semibold text-[#09101b] shadow-[0_12px_34px_rgba(140,164,255,0.22)] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            href="mailto:winnyomkeys@gmail.com"
          >
            Start an inquiry
          </a>
          <a
            className="inline-flex min-h-12.5 items-center justify-center overflow-hidden rounded-full border border-(--border) bg-(--pill-bg) px-5.5 font-semibold text-(--foreground) transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:border-[rgba(255,255,255,0.2)] focus-visible:border-[rgba(255,255,255,0.2)]"
            href="#services"
          >
            View services
          </a>
        </div>
      </div>

      <div
        className="relative grid min-h-140 place-items-center before:absolute before:inset-[4%_0_8%] before:rounded-[44px] before:content-[''] before:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px),radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_42%)] before:bg-size-[54px_54px,54px_54px,auto] before:opacity-60 before:mask-[radial-gradient(circle_at_center,black_35%,transparent_92%)] after:absolute after:bottom-5 after:h-10 after:w-[min(76vw,520px)] after:rounded-full after:content-[''] after:bg-[radial-gradient(circle,rgba(0,0,0,0.55),rgba(0,0,0,0))] after:opacity-[0.72] after:blur-[22px]"
        aria-hidden="true"
      >
        <div className="absolute aspect-square w-[min(94vw,820px)] animate-[pulse_10s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(240,212,160,0.22)_0%,transparent_28%),radial-gradient(circle_at_38%_32%,rgba(149,167,255,0.24)_0%,transparent_48%),radial-gradient(circle_at_66%_60%,rgba(114,196,152,0.2)_0%,transparent_52%)] opacity-[0.78] blur-[44px]" />
        <figure className="relative z-10 aspect-[0.9] w-full max-w-140 animate-[float_10s_ease-in-out_infinite] overflow-hidden rounded-[34px] border border-[rgba(255,255,255,0.1)] shadow-[0_28px_70px_rgba(0,0,0,0.32),0_10px_28px_rgba(0,0,0,0.18)]">
          <Image
            src={heroImageUrl}
            alt=""
            fill
            priority
            sizes="(min-width: 860px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.08),rgba(8,10,15,0.22)),linear-gradient(0deg,rgba(8,10,15,0.74),transparent_42%)]" />
          <figcaption className="absolute bottom-6 left-6 right-6 grid max-w-[30ch] gap-3 text-[#f6f3ee]">
            <p className="m-0 text-[1rem] leading-[1.6] text-[rgba(246,243,238,0.9)]">
              Hands-on repair, tuning, and practical keyboard advice for boards
              that need real attention.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
