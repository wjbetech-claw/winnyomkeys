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
      "Diagnosis for inconsistent keys, dead inputs, stabilizer rattle, intermittent behavior, and other practical keyboard issues before recommending the next step.",
  },
  {
    title: "Build & assembly",
    description:
      "Careful custom keyboard assembly for enthusiasts who want a board put together cleanly, with attention to compatibility, feel, and final presentation.",
  },
  {
    title: "Modding & tuning",
    description:
      "Stabilizer tuning, switch replacement, lubrication, acoustic refinement, and other small changes that improve how a keyboard sounds and feels day to day.",
  },
  {
    title: "Buyer guidance",
    description:
      "Straightforward support for people choosing a first keyboard, deciding whether a board is worth repairing, or figuring out a sensible upgrade path.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "1. Share the board and the goal",
    description:
      "Start with the keyboard model, the issue or desired result, and any relevant parts or prior work already involved.",
  },
  {
    title: "2. Review what is realistic",
    description:
      "You get a grounded response about likely options, missing details, and whether the project sounds straightforward or uncertain.",
  },
  {
    title: "3. Confirm scope before hands-on work",
    description:
      "Repair, build, or tuning work should begin only after the direction is clear enough to avoid confusion and overpromising.",
  },
  {
    title: "4. Get a cleaner final result",
    description:
      "The aim is a keyboard that feels more dependable, more refined, or simply more enjoyable to keep using long term.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What kinds of keyboards do you work on?",
    answer:
      "The focus is mechanical keyboards, including prebuilts, enthusiast kits, and custom builds where the parts and condition make the work practical.",
  },
  {
    question: "Do you list fixed pricing or turnaround times?",
    answer:
      "Not yet. Scope varies too much by keyboard, parts, and the issue involved, so those details are discussed directly rather than guessed publicly.",
  },
  {
    question: "Can you help if I am new to mechanical keyboards?",
    answer:
      "Yes. The service is not only for longtime enthusiasts. Beginner-friendly guidance is part of the offer when it helps avoid unnecessary purchases or mistakes.",
  },
  {
    question: "How should I start an inquiry?",
    answer:
      "Send the keyboard model, what is wrong or what you want improved, any parts already involved, and where you are based. That is usually enough to begin the conversation.",
  },
];
