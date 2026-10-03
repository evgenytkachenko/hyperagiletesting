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
  /** Note kept in the compact (overview) diagram, where other notes are hidden. */
  compactNote?: string;
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
  /** "Useful when…" line for the Choose a Starting Point comparison. */
  useWhen: string;
  /** Intended value — stated as intent, never as a measured result. */
  benefit: string;
  /** What the pattern needs, in words (no sample artifacts). */
  inputs: string;
  /** What it helps prepare, in words (no sample artifacts). */
  output: string;
  /** Optional labelled tag list shown on the pattern page (e.g. key concepts, gap markers). */
  tags?: { heading: string; items: string[]; mono?: boolean };
  /** Full principle list for the pattern page. */
  principles: string[];
  /** Indexes into `principles` for the two or three shown on the /in-practice overview. */
  essentialPrinciples: number[];
  /** Framework pillars the pattern applies (names must match src/lib/content.ts). */
  pillars: string[];
  /** Supporting practices — shown separately so they never read as extra pillars. */
  practices: string[];
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
      "This reference pattern illustrates one way to apply risk-based analysis to release planning, so the proposed validation follows risk instead of habit.",
    problem:
      "Large releases can contain more changes than one person — or one AI context — can meaningfully analyze together. Important interactions, regression risk, and coverage gaps become difficult to see.",
    concept:
      "Break release analysis into bounded units of work, vary analysis depth based on risk, coordinate findings through shared state, and synthesize the results into a proposed validation approach — a focused regression and exploratory-testing plan for the team to review.",
    useWhen: "Release context is scattered and regression scope is difficult to justify.",
    benefit:
      "Less effort assembling release context, and a clearer basis for choosing where validation should go. The release decision comes later and draws on what that validation actually finds.",
    inputs: "Release scope, change context, and available coverage information.",
    output: "A proposed validation approach: regression focus and remaining gaps, ready for team review.",
    flow: [
      { label: "Release Scope", kind: "io", note: "Changes planned for the release" },
      { label: "Collect Change Context", kind: "ai", note: "Issue tracker + source repository" },
      {
        label: "Risk-Based Analysis Depth",
        kind: "code",
        note: "Rules propose a depth; people can adjust it",
        compactNote: "Rules propose; people can adjust",
      },
      {
        label: "Parallel Change Analysis",
        kind: "ai",
        branches: ["Low risk", "Medium risk", "High risk"],
      },
      { label: "Conflict + Coverage Analysis", kind: "ai", note: "Interacting changes, existing tests" },
      { label: "Focused Regression Plan", kind: "io", note: "Proposed, plus a short exploratory guide" },
      { label: "Team Review / Validation Plan", kind: "human" },
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
        "Team-reviewed validation plan",
      ],
    },
    principles: [
      "Propose analysis depth for each change from its risk, exposure, potential impact, and uncertainty, and keep that proposal open to human review — a score or change category alone doesn't settle it.",
      "Split the release into bounded units of work instead of one oversized analysis.",
      "Use deterministic code for sorting, grouping, and score arithmetic, and keep those calculations distinct from risk judgments.",
      "Consider interactions where changes share dependencies, data, configuration, or user workflows, even when they modify different files.",
      "Check existing coverage before proposing new tests; turn what remains into a short exploratory plan.",
      "Treat the output as a validation plan, not a release verdict: readiness is judged later, from actual validation findings.",
    ],
    essentialPrinciples: [0, 3, 5],
    pillars: [
      "Risk-Based Validation Depth",
      "Continuous Quality Signals",
      "Enabled Ownership",
      "Informed Confidence",
    ],
    practices: ["Reusable quality context"],
    connection:
      "Risk, exposure, and uncertainty shape how deeply each change is analyzed and validated, and the proposed depth stays open to review. Context from the issue tracker, source repository, and test-management system stays connected, and findings from validation and production carry into the next release. Product, Engineering, and QE share the evidence and decision responsibilities, with named owners for accepted risks. The release decision rests on actual validation findings and stated uncertainty — not on the plan alone.",
    example: {
      setting: "A fictional online bookstore prepares a release.",
      steps: [
        "The team identifies the release scope: an informational homepage banner, a logging-library upgrade, and two changes to checkout pricing.",
        "Based on this release's exposure and potential impact, the team chooses focused validation for the banner, broader checks for logging dependencies, and deeper validation for pricing.",
        "The two pricing changes are analyzed together because their combined effect could change the amount a customer pays.",
        "Coverage review identifies a gap around combined discounts. Engineering and QE use it to guide focused checks, then share the results and remaining uncertainty.",
        "Product, Engineering, and QE review the evidence together and agree whether to release, limit scope, or investigate further. Each accepted risk has a named accountable owner, with any needed mitigation, monitoring, and a trigger for review.",
        "Findings from validation and production update the tests, quality context, and next release's validation approach.",
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
      "Start with reviewed test expectations, discover the conventions of the existing repository, generate a review-ready draft, explicitly identify uncertainty, and require approval before writing to the repository. Verification and repository review then determine whether the automation joins the shared suite.",
    useWhen: "A team wants a small first step in AI-assisted automation.",
    benefit:
      "Less repetitive drafting, with uncertainty made visible so the reviewing engineer knows exactly what still needs judgment.",
    inputs: "Reviewed test cases and the existing repository's conventions.",
    output: "A review-ready automation draft with unresolved information flagged. Once approved, it is verified before joining the shared suite.",
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
      { label: "Human Review", kind: "human", note: "An engineer approves before anything is written" },
      { label: "Approved Automation Draft", kind: "io", note: "Verified and reviewed before joining the suite" },
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
      "Map each test step to an action and each expected result to a meaningful assertion.",
      "Prefer an explicit gap over a confident guess.",
      "Write nothing to the repository without approval from the responsible engineer or an authorized reviewer.",
      "Verify the approved draft in a suitable test environment — meaningful assertions, reliable runs — and give it the usual repository review before it joins the shared suite.",
    ],
    essentialPrinciples: [3, 4, 5],
    pillars: ["Enabled Ownership", "Informed Confidence"],
    practices: ["Review-first AI", "Human-gated automation", "Incremental adoption"],
    connection:
      "AI drafts and a responsible engineer approves, with uncertainty stated rather than hidden. Approval is not the finish line: verification in a test environment and normal repository review establish whether the automation is trustworthy enough for the shared suite. A team can adopt it incrementally, one reviewed test case at a time.",
    example: {
      setting: "A team on a fictional subscription app automates the reviewed test case “Reset password with an expired link.”",
      steps: [
        "The generator reads how the repository's existing tests are organized, finds a reusable login helper, and drafts the test from the reviewed expectations in the repository's style.",
        "It flags “Selector unknown” for the expired-link message and “Test data needed” for an expired reset token.",
        "An engineer resolves both gaps and checks that the draft's assertions meaningfully cover the reviewed expectations.",
        "With the engineer's approval, the draft is written to the repository.",
        "The test is run in a suitable test environment to confirm its assertions and reliability, then goes through the usual repository review before joining the shared suite.",
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
    useWhen: "Recurring AI-assisted automation needs consistent repository context and shared rules.",
    benefit:
      "More consistent automation across contributors through shared conventions, with context and checks appropriate to each change, so reviewers can focus on what matters.",
    inputs: "An engineer's request and shared repository context.",
    output: "A proposed change, automated-check results, and context for human review.",
    flow: [
      { label: "Engineer Request", kind: "io" },
      { label: "Repo-Aware Orchestrator", kind: "orchestration", note: "Classifies before doing any work" },
      { label: "Routing Decision", kind: "orchestration", note: "Explicit rules; clarify if ambiguous" },
      {
        label: "Specialist Capability",
        kind: "ai",
        branches: ["Create test", "Diagnose failure", "Review / refactor"],
      },
      { label: "Repository Rules + Context", kind: "context", note: "Shared conventions and project knowledge" },
      { label: "Quality Gates", kind: "code", note: "Automated checks before review" },
      { label: "Human Review", kind: "human", note: "Depth suited to risk" },
    ],
    principles: [
      "Route requests through explicit routing rules, and ask for clarification when the intent is ambiguous.",
      "Diagnose a failing test before repairing it: the cause may be a product defect, a problem in the test, or unclear intended behavior.",
      "Keep shared repository conventions in one place that every capability uses.",
      "Run quality gates as automated checks after every change. A passing check is a signal for review, not proof that the change is correct.",
      "Match review depth to risk, and confirm a fix preserves meaningful assertions and intended behavior — never weaken an assertion just to make a check pass.",
      "Record the validated cause and lesson in shared context, so the same mistake becomes less likely next time.",
    ],
    essentialPrinciples: [1, 3, 4],
    pillars: [
      "Risk-Based Validation Depth",
      "Continuous Quality Signals",
      "Enabled Ownership",
      "Informed Confidence",
    ],
    practices: ["Review-first AI", "Reusable quality context"],
    connection:
      "Shared conventions and project knowledge reach everyone working in the repository, with context and checks appropriate to each change. Diagnosis comes before repair, review depth follows risk, and the engineer confirms a fix keeps meaningful assertions — a passing check informs that decision rather than replacing it. Validated causes are recorded, so the next change starts better informed.",
    example: {
      setting: "An engineer on a fictional travel-booking product asks for help with a failing “change seat” test.",
      steps: [
        "The orchestration layer classifies the request and routes it to diagnosis before anything is treated as a test defect.",
        "Diagnosis compares the failure with the intended behavior. A product defect would be reported rather than fixed in the test; unclear intended behavior would be clarified with the relevant Product, Engineering, or QE contributors.",
        "Here the cause is in the test: a timing assumption no longer holds. The capability proposes a fix that follows the repository's conventions for waiting and locating elements.",
        "Automated checks run, and the engineer reviews the fix — ordinary maintenance, so a single review is enough — confirming it keeps meaningful assertions and intended behavior rather than merely making the check pass.",
        "The validated cause and lesson are recorded in shared context, so similar tests avoid the same problem.",
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
      "Scoped interfaces limit access to what the work needs. Credentials stay in the tool layer, not with the AI.",
  },
];
