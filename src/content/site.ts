export type Service = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    title: "Repairs",
    description:
      "Electronic repairs, replacement parts, dead switches and all other bumps and rattles.",
  },
  {
    title: "Assembly",
    description:
      "Careful custom keyboard assembly for enthusiasts who want a board put together cleanly.",
  },
  {
    title: "Modding",
    description:
      "Stabilizer tuning, switch replacement, lubrication, acoustic refinement, and more.",
  },
  {
    title: "Guidance",
    description:
      "Straightforward advice and support for beginners and longtime enthusiasts alike.",
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
