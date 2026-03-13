export type Service = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    title: "Repair & troubleshooting",
    description:
      "Diagnosis for inconsistent keys, dead inputs, stabilizer rattle, and general keyboard issues before recommending the next step.",
  },
  {
    title: "Build & assembly",
    description:
      "Custom keyboard assembly for enthusiasts who want a clean, careful build with attention to feel, acoustics, and part compatibility.",
  },
  {
    title: "Modding & tuning",
    description:
      "Stabilizer tuning, switch replacement, lubrication, foam adjustments, and practical refinements that improve daily typing.",
  },
  {
    title: "Guidance for buyers",
    description:
      "Friendly support for people choosing their first mechanical keyboard or deciding whether a board is worth repairing or upgrading.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "1. Tell me what you have",
    description:
      "Share your keyboard model, your goal, and any symptoms or preferences. Korean/English communication can be supported.",
  },
  {
    title: "2. Review the issue or build plan",
    description:
      "You get a clear response on what can likely be done, what details are still needed, and what remains unknown.",
  },
  {
    title: "3. Confirm scope before work starts",
    description:
      "No inflated promises. Scope stays explicit so repair, build, or mod work is aligned before hands-on changes begin.",
  },
  {
    title: "4. Receive your keyboard back with confidence",
    description:
      "The goal is a keyboard that feels more dependable, better tuned, and easier to enjoy or maintain long term.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What kinds of keyboards do you work on?",
    answer:
      "The service is aimed at mechanical keyboards, including prebuilts, enthusiast kits, and custom builds where parts and condition make the work practical.",
  },
  {
    question: "Do you publish fixed pricing or turnaround times?",
    answer:
      "Not yet. Scope varies a lot by keyboard, parts, and the issue involved, so final details are discussed directly instead of being guessed on the site.",
  },
  {
    question: "Can you help if I am new to mechanical keyboards?",
    answer:
      "Yes. Beginner-friendly guidance is part of the offer, especially when the goal is to avoid unnecessary purchases or choose a sensible next step.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact call-to-action and send a short message with your keyboard model, what is wrong or what you want improved, and where you are based.",
  },
];
