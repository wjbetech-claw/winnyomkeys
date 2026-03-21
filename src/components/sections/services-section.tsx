import {
  GraduationCap,
  Package,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

import type { Service } from "@/content/site";

type ServicesSectionProps = {
  services: Service[];
};

function ServiceIcon({ title }: { title: string }) {
  if (title === "Repairs") {
    return <Wrench aria-hidden="true" className="h-6 w-6 stroke-current" />;
  }

  if (title === "Assembly") {
    return <Package aria-hidden="true" className="h-6 w-6 stroke-current" />;
  }

  if (title === "Modding") {
    return (
      <SlidersHorizontal
        aria-hidden="true"
        className="h-6 w-6 stroke-current"
      />
    );
  }

  return (
    <GraduationCap aria-hidden="true" className="h-6 w-6 stroke-current" />
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      className="relative mt-8 grid min-h-screen scroll-mt-5 content-center justify-items-center gap-8 py-8"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="grid justify-items-center gap-2 text-center">
        <h2
          id="services-title"
          className="max-w-[24ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.04] tracking-[-0.05em] text-balance"
        >
          Focused work for mechanical keyboards that need attention, refinement,
          or a full build path.
        </h2>
      </div>
      <div className="mt-4 grid w-full max-w-5xl grid-cols-2 gap-4">
        {services.map((service, index) => (
          <article
            className="grid gap-2 rounded-3xl border border-(--border) bg-(--surface) p-5.5 shadow-[0_28px_80px_rgba(0,0,0,0.22)]"
            key={service.title}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11.5 w-11.5 items-center justify-center rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,12,16,0.4)] text-[#f4f6f8] [html[data-theme=light]_&]:border-[rgba(55,41,26,0.12)] [html[data-theme=light]_&]:bg-[rgba(255,255,255,0.72)] [html[data-theme=light]_&]:text-[#181615]">
                <ServiceIcon title={service.title} />
              </span>
              <p className="mb-0 text-[0.74rem] uppercase tracking-[0.18em] text-(--muted)">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="mt-0.5 text-[1.12rem] leading-[1.35] font-semibold">
              {service.title}
            </h3>
            <p className="m-0 leading-[1.72] text-(--soft-text)">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
