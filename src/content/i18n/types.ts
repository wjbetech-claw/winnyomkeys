export type ServiceId = "repairs" | "assembly" | "modding" | "guidance";

export type Service = {
  id: ServiceId;
  title: string;
  description: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    homeAriaLabel: string;
  };
  nav: {
    home: string;
    services: string;
    faq: string;
    contact: string;
  };
  languageToggle: {
    label: string;
    english: string;
    korean: string;
  };
  themeToggle: {
    light: string;
    dark: string;
    switchToLight: string;
    switchToDark: string;
  };
  home: {
    highlights: string[];
    hero: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      imageCaption: string;
    };
    servicesTitle: string;
    contact: {
      title: string;
      description: string;
    };
  };
  services: Service[];
  faqPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faqs: FAQ[];
  footer: {
    description: string;
  };
};
