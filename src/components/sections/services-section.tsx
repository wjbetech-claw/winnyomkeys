import {
  GraduationCap,
  Package,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

import type { Service, ServiceId } from "@/content/i18n";

type ServicesSectionProps = {
  title: string;
  services: Service[];
};

function ServiceIcon({ id }: { id: ServiceId }) {
  if (id === "repairs") {
    return <Wrench aria-hidden="true" className="h-6 w-6 stroke-current" />;
  }

  if (id === "assembly") {
    return <Package aria-hidden="true" className="h-6 w-6 stroke-current" />;
  }

  if (id === "modding") {
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

export function ServicesSection({ title, services }: ServicesSectionProps) {
  return (
    <section
      className="relative mt-8 grid min-h-[auto] scroll-mt-5 content-center justify-items-center gap-8 py-8 md:min-h-screen"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="grid justify-items-center gap-2 text-center">
        <h2
          id="services-title"
          className="ko-tight-balance max-w-[24ch] text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.04] tracking-[-0.05em] text-balance"
        >
          {title}
        </h2>
      </div>
      <div className="mt-4 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service, index) => (
          <article
            className="grid gap-2 rounded-3xl border border-(--border) bg-(--surface) p-5.5 shadow-[0_28px_80px_rgba(0,0,0,0.22)]"
            key={service.id}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11.5 w-11.5 items-center justify-center rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,12,16,0.4)] text-[#f4f6f8] [html[data-theme=light]_&]:border-[rgba(55,41,26,0.12)] [html[data-theme=light]_&]:bg-[rgba(255,255,255,0.72)] [html[data-theme=light]_&]:text-[#181615]">
                <ServiceIcon id={service.id} />
              </span>
              <p className="mb-0 text-[0.74rem] uppercase tracking-[0.18em] text-(--muted)">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="ko-copy mt-0.5 text-[1.12rem] leading-[1.35] font-semibold">
              {service.title}
            </h3>
            <p className="ko-copy m-0 leading-[1.72] text-(--soft-text)">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
