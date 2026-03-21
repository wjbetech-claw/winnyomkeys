import type { Dictionary } from "./types";

export const en: Dictionary = {
  metadata: {
    title: "winnyomkeys",
    description:
      "Mechanical keyboard repair, builds, tuning, and troubleshooting in Seoul, with practical guidance for both beginners and enthusiasts.",
  },
  brand: {
    name: "winnyomkeys",
    tagline: "Mech. Keyboards | Seoul",
    homeAriaLabel: "winnyomkeys home",
  },
  nav: {
    home: "Home",
    services: "Services",
    faq: "FAQ",
    contact: "Contact",
  },
  languageToggle: {
    label: "Language",
    english: "EN",
    korean: "KO",
  },
  themeToggle: {
    light: "light",
    dark: "dark",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
  },
  home: {
    highlights: [
      "Seoul-based workshop",
      "Repair, build, and tuning services",
      "Korean and English communication",
    ],
    hero: {
      title: "Mechanical keyboard workshop.",
      subtitle:
        "Repair, modding, and practical keyboard support based in Seoul, Korea.",
      primaryCta: "Start an inquiry",
      secondaryCta: "View services",
      imageCaption:
        "Hands-on repair, tuning, and practical guidance for keyboards that need real attention.",
    },
    servicesTitle:
      "Focused service for mechanical keyboards that need repair, refinement, or a full build path.",
    contact: {
      title: "Let's get started.",
      description:
        "Send the keyboard model, what feels off or what you want improved, along with any relevant parts. From there, we can talk through the best next step.",
    },
  },
  services: [
    {
      id: "repairs",
      title: "Repairs",
      description:
        "Electronic repair, replacement parts, dead switches, and the other rattles or faults that make a board feel wrong.",
    },
    {
      id: "assembly",
      title: "Assembly",
      description:
        "Careful custom keyboard assembly for enthusiasts who want a board put together cleanly and checked properly.",
    },
    {
      id: "modding",
      title: "Modding",
      description:
        "Stabilizer tuning, switch replacement, lubrication, acoustic refinement, and other practical improvements.",
    },
    {
      id: "guidance",
      title: "Guidance",
      description:
        "Straightforward advice and support for beginners, returnees, and longtime enthusiasts alike.",
    },
  ],
  faqPage: {
    eyebrow: "FAQ",
    title: "Straight answers, without the usual filler.",
    description:
      "Common questions about Winny Omkeys services, repair scope, turnaround expectations, and beginner-friendly keyboard help in Seoul.",
  },
  faqs: [
    {
      id: "keyboard-types",
      question: "What kinds of keyboards do you work on?",
      answer:
        "The focus is mechanical keyboards, including prebuilts, enthusiast kits, and custom builds where the condition and parts involved make the work practical.",
    },
    {
      id: "pricing",
      question: "Do you list fixed pricing or turnaround times?",
      answer:
        "Not yet. Scope varies too much by keyboard, parts, and the issue involved, so those details are discussed directly instead of being guessed in public.",
    },
    {
      id: "beginners",
      question: "Can you help if I am new to mechanical keyboards?",
      answer:
        "Yes. This is not only for longtime enthusiasts. Beginner-friendly guidance is part of the service when it helps avoid unnecessary purchases, mismatched parts, or easy mistakes.",
    },
    {
      id: "inquiry",
      question: "How should I start an inquiry?",
      answer:
        "Send the keyboard model, what is wrong or what you want improved, any parts already involved, and where you are based. That is usually enough to start the conversation clearly.",
    },
  ],
  footer: {
    description:
      "Mechanical keyboard repair, builds, tuning, and troubleshooting based in Seoul.",
  },
};
