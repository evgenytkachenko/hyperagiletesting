/**
 * Editable content for the four Hyper-Agile Quality Engineering pillars and
 * the ten Hyper-Agile Quality Loop activities. Kept separate from
 * config.ts (brand/business facts) since this is framework copy.
 */

export type Pillar = {
  name: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    name: "Risk-Based Validation Depth",
    description:
      "Validation depth changes with risk, reach, release stage, and potential impact.",
  },
  {
    name: "Continuous Quality Signals",
    description:
      "Confidence is built incrementally across requirements, testing, CI/CD, release readiness, and production.",
  },
  {
    name: "Enabled Ownership",
    description:
      "Product, Engineering, and Quality Engineering contribute to quality earlier instead of relying on a late QA handoff.",
  },
  {
    name: "Informed Confidence",
    description:
      "Release decisions make validated behavior, remaining uncertainty, and accepted risk visible.",
  },
];

export type LoopActivity = {
  order: number;
  name: string;
  description: string;
};

export const loopActivities: LoopActivity[] = [
  {
    order: 1,
    name: "Clarify intent",
    description:
      "Turn a product or business goal into a clear, shared understanding of what is being built and why, before validation strategy is decided.",
  },
  {
    order: 2,
    name: "Identify risk",
    description:
      "Surface what could go wrong — technical, business, user, and operational risk — and how much reach and impact it carries.",
  },
  {
    order: 3,
    name: "Generate test expectations",
    description:
      "Translate intent and risk into concrete, checkable expectations for how the system should behave.",
  },
  {
    order: 4,
    name: "Create reusable quality artifacts",
    description:
      "Capture test expectations, data, and scenarios as durable artifacts the whole team can reuse, rather than one-off effort.",
  },
  {
    order: 5,
    name: "Automate what is repeatable",
    description:
      "Convert stable, repeatable checks into trustworthy automation so human attention goes to what still needs judgment.",
  },
  {
    order: 6,
    name: "Analyze change impact",
    description:
      "Understand what a given change actually touches, so validation effort is focused on what could realistically be affected.",
  },
  {
    order: 7,
    name: "Select regression intelligently",
    description:
      "Choose regression coverage based on change impact and risk instead of re-running everything by default.",
  },
  {
    order: 8,
    name: "Release with informed confidence",
    description:
      "Make the release decision with validated behavior, known gaps, and accepted risk visible to the people responsible for the call.",
  },
  {
    order: 9,
    name: "Monitor production",
    description:
      "Watch real usage and production signals after release to see how the change actually behaves.",
  },
  {
    order: 10,
    name: "Feed learning back into the knowledge base",
    description:
      "Turn production learning into updated risk understanding, test expectations, and quality artifacts for the next cycle.",
  },
];

export type Challenge = {
  name: string;
  description: string;
};

export const problemChallenges: Challenge[] = [
  {
    name: "Late surprises",
    description:
      "Risk and ambiguity that surface only after most of the work is already done.",
  },
  {
    name: "Escaped defects",
    description:
      "Issues that reach production because validation depth didn't match real risk.",
  },
  {
    name: "Repeated quality effort",
    description:
      "The same test thinking and coverage re-created by different people because it was never captured as a reusable artifact.",
  },
  {
    name: "Fragmented release confidence",
    description:
      "Signals from requirements, testing, CI/CD, and production that never connect into one clear picture at release time.",
  },
];
