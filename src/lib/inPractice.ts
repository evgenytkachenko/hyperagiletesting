/**
 * Content for /in-practice: three conceptual reference patterns, the
 * architecture layers, and the "Patterns in Practice" cards.
 *
 * Content boundary: these are public conceptual patterns. They describe
 * ideas and design principles only — no implementation mechanics, tuning
 * values, tool combinations, or provenance. Examples are hypothetical.
 */

/**
 * Node roles in a FlowDiagram. Each maps to one legend entry and color, so
 * a reader can see which steps are AI analysis, which are plain code, and
 * where a person decides.
 */
export type FlowKind = "io" | "orchestration" | "ai" | "context" | "code" | "human";

export type FlowNode = {
  label: string;
  kind: FlowKind;
  /** Short clarifying line under the label. */
  note?: string;
  /** Renders a fan-out row of parallel/alternative sub-steps under the node. */
  branches?: string[];
  /** Visually emphasised node (dashed gold outline). */
  emphasis?: boolean;
};

export type ReferencePattern = {
  slug: string;
  title: string;
  subtitle: string;
  /** One-sentence statement of what the pattern illustrates. */
  purpose: string;
  problem: string;
  concept: string;
  flow: FlowNode[];
  /** Optional labelled tag list shown beside the concept (e.g. key concepts, gap markers). */
  tags?: { heading: string; items: string[]; mono?: boolean };
  principles: string[];
  demonstrates: string[];
  /** How the pattern connects to Hyper-Agile Quality Engineering. */
  connection: string;
  /** A clearly hypothetical walk-through, set in a fictional product. */
  example: { setting: string; steps: string[] };
};

export const referencePatterns: ReferencePattern[] = [
  {
    slug: "release-risk-regression-planner",
    title: "Release Risk & Regression Planner",
    subtitle: "Risk-aware release analysis and focused regression planning",
    purpose:
      "This reference pattern illustrates one way to apply risk-based analysis to release planning, so regression effort follows risk instead of habit.",
    problem:
      "Large releases can contain more changes than one person — or one AI context — can meaningfully analyze together. Important interactions, regression risk, and coverage gaps become difficult to see.",
    concept:
      "Break release analysis into bounded units of work, vary analysis depth based on risk, coordinate findings through shared state, and synthesize the results into a focused regression and exploratory-testing plan.",
    flow: [
      { label: "Release Scope", kind: "io", note: "Changes planned for the release" },
      { label: "Collect Change Context", kind: "ai", note: "Issue tracker + source repository" },
      { label: "Risk-Based Analysis Depth", kind: "code", note: "Each change gets a relative tier" },
      {
        label: "Parallel Change Analysis",
        kind: "ai",
        branches: ["Low risk", "Medium risk", "High risk"],
      },
      { label: "Conflict + Coverage Analysis", kind: "ai", note: "Interacting changes, existing tests" },
      { label: "Focused Regression Plan", kind: "io", note: "Plus a short exploratory guide" },
      { label: "Human Review / Release Decision", kind: "human" },
    ],
    tags: {
      heading: "Key concepts",
      items: [
        "Release scope",
        "Risk classification",
        "Parallel analysis",
        "Change interaction detection",
        "Existing test coverage",
        "Regression focus",
        "Human release decision",
      ],
    },
    principles: [
      "Assign analysis depth per change, not one fixed depth for the whole release.",
      "Split the release into bounded units of work instead of one oversized analysis.",
      "Keep sorting, tiering, grouping, and report formatting in deterministic code.",
      "Examine change interactions only where changes actually overlap.",
      "Check existing coverage before proposing new tests; turn what remains into a short exploratory plan.",
    ],
    demonstrates: ["Risk-Based Validation Depth", "Continuous Quality Signals", "Informed Confidence"],
    connection:
      "Risk sets the depth of analysis for each change, signals from the issue tracker, source repository, and test-management system are combined into one view, and the release decision is made with validated areas, remaining gaps, and accepted risk visible to the people who own it.",
    example: {
      setting: "A fictional online bookstore prepares a release.",
      steps: [
        "The release contains a homepage banner update, a logging-library upgrade, and two separate changes that both modify the checkout pricing logic.",
        "The banner update gets a focused check. The library upgrade gets a broader look at what depends on logging.",
        "The two pricing changes get the deepest analysis and are reviewed together, because they touch the same area and could interact.",
        "Existing tests cover a standard checkout but not combined discounts, so that gap goes into a short exploratory-testing guide.",
        "The release owner reviews the plan and the open gap, then decides whether to ship.",
      ],
    },
  },
  {
    slug: "test-automation-draft-generator",
    title: "Test Automation Draft Generator",
    subtitle: "A smaller first step toward AI-assisted automation",
    purpose:
      "This reference pattern illustrates a small, human-gated way to start AI-assisted automation without building a larger platform first.",
    problem:
      "Teams often want AI-assisted automation without first building a large multi-agent platform.",
    concept:
      "Start with reviewed test cases, discover the conventions of the existing repository, generate a review-ready draft, explicitly identify uncertainty, and require human approval before writing to the repository.",
    flow: [
      { label: "Reviewed Test Case", kind: "io", note: "From the test-management system" },
      { label: "Discover Repo Conventions", kind: "ai", note: "Re-read on every run" },
      { label: "Generate Draft", kind: "ai" },
      {
        label: "Surface Explicit Gaps",
        kind: "ai",
        note: "Flag uncertainty instead of guessing",
        emphasis: true,
      },
      { label: "Human Review", kind: "human", note: "Nothing is written before approval" },
      { label: "Approved Automation", kind: "io" },
    ],
    tags: {
      heading: "Explicit gaps, not confident guesses",
      items: [
        "Selector unknown",
        "Test data needed",
        "Reusable component missing",
        "Clarification required",
      ],
      mono: true,
    },
    principles: [
      "Discover the repository's conventions each time instead of assuming a house style.",
      "Reuse existing abstractions; never silently invent a selector or page object.",
      "Map each test step to an action and each expected result to an assertion.",
      "Prefer an explicit gap over a confident guess.",
      "Write nothing to the repository without explicit human approval.",
    ],
    demonstrates: [
      "Review-First AI",
      "Human-Gated Automation",
      "Incremental Adoption",
      "Informed Confidence",
    ],
    connection:
      "AI produces a draft and people approve it; uncertainty is stated rather than hidden, so reviewers know exactly what still needs judgment; and a team can adopt it incrementally, one reviewed test case at a time.",
    example: {
      setting: "A team on a fictional subscription app automates the reviewed test case “Reset password with an expired link.”",
      steps: [
        "The generator reads how the repository's existing tests are organized and finds a reusable login helper.",
        "It drafts the test using that helper and the repository's naming style.",
        "It flags “Selector unknown” for the expired-link message and “Test data needed” for an expired reset token.",
        "An engineer resolves both gaps and approves the draft.",
        "Only then is the test added to the repository.",
      ],
    },
  },
  {
    slug: "embedded-test-automation-orchestration",
    title: "Embedded Test-Automation Orchestration Layer",
    subtitle: "Persistent quality context inside the automation repository",
    purpose:
      "This reference pattern illustrates one way to give AI-assisted test automation consistent, repository-aware context instead of starting from zero each session.",
    problem:
      "Generic coding assistants can generate tests, but they often lack the repository-specific context needed to produce consistent, maintainable automation.",
    concept:
      "Place a lightweight orchestration layer inside the automation repository. Route work to narrow specialist capabilities, maintain reusable project context and rules, and apply deterministic quality gates after changes.",
    flow: [
      { label: "Engineer Request", kind: "io" },
      { label: "Repo-Aware Orchestrator", kind: "orchestration", note: "Classifies before doing any work" },
      { label: "Routing Decision", kind: "orchestration", note: "Explicit, predictable rules" },
      {
        label: "Specialist Capability",
        kind: "ai",
        branches: ["Create test", "Fix test", "Review / refactor"],
      },
      { label: "Repository Rules + Context", kind: "context", note: "Shared conventions and project knowledge" },
      { label: "Quality Gates", kind: "code", note: "Automated checks before review" },
      { label: "Human Review", kind: "human" },
    ],
    principles: [
      "Route requests through explicit, predictable rules, so the outcome doesn't depend on phrasing.",
      "Give each specialist capability one narrow responsibility and only the access it needs.",
      "Keep shared repository conventions in one place that every capability uses.",
      "Run quality gates as automated checks after every change, not as an instruction that can be skipped.",
      "Turn recurring fixes into shared knowledge, so the same mistake becomes less likely next time.",
    ],
    demonstrates: [
      "Continuous Quality Signals",
      "Enabled Ownership",
      "Review-First AI",
      "Reusable Quality Context",
    ],
    connection:
      "Quality context lives with the code and reaches every engineer who works in the repository, automated checks produce a consistent signal after each change, and people stay responsible for reviewing and accepting the result.",
    example: {
      setting: "An engineer on a fictional travel-booking product asks for help with a failing “change seat” test.",
      steps: [
        "The orchestration layer classifies the request as a test fix and routes it to the fix capability.",
        "The capability applies the repository's shared conventions — for example, its preferred way to locate elements and wait for pages — and proposes a change.",
        "Automated checks run on the change before anyone reviews it.",
        "The engineer reviews the proposed fix and accepts or adjusts it.",
        "The underlying cause is recorded as shared project knowledge, so similar tests avoid it.",
      ],
    },
  },
];

export function getReferencePattern(slug: string) {
  return referencePatterns.find((pattern) => pattern.slug === slug);
}

export const referencePatternDisclaimer =
  "This is a conceptual reference pattern. Examples are hypothetical, and any implementation should be adapted to each organization's tools, risks, and constraints.";

export const architectureLayers = [
  {
    name: "Orchestration / Skills",
    question: "What work should happen?",
    description:
      "Sequences the work, routes requests, and keeps track of progress. It decides what happens next without reading every change itself.",
  },
  {
    name: "Specialized Analysis / Agents",
    question: "Where is judgment or focused analysis required?",
    description:
      "Narrow units with their own context and responsibility, applied only where reading and interpreting unstructured content is needed.",
  },
  {
    name: "Tools / System Access",
    question:
      "How does the system safely reach the issue tracker, source repository, and test-management system?",
    description:
      "Scoped interfaces expose only the operations each part needs. Credentials stay in the tool layer, not with the AI.",
  },
];

export const transferablePrinciples = [
  "Isolate AI work by responsibility",
  "Match analysis depth to risk",
  "Use deterministic code for deterministic work",
  "Use scoped interfaces for system access",
  "Avoid unnecessary AI calls",
  "Preserve human review for consequential decisions",
  "Re-analyze only what changed when possible",
];
