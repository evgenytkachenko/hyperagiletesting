import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { ReferencePatternCard } from "@/components/ReferencePatternCard";
import { pillarAccents } from "@/components/PillarGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pillars } from "@/lib/content";
import { ctaLabels } from "@/lib/config";
import { contactFormUrl } from "@/lib/inquiry";
import { architectureLayers, referencePatterns } from "@/lib/inPractice";

export const metadata = buildMetadata({
  title: "Hyper-Agile Quality Engineering in Practice",
  description:
    "Explore practical reference architectures for risk-based release planning, AI-assisted test automation, and continuous quality engineering using the Hyper-Agile Quality Engineering framework.",
  path: "/in-practice",
});

const linkClass =
  "font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600";

/** One sentence per pillar tying it to the patterns — the framework itself is explained on /framework. */
const pillarInPractice: Record<string, string> = {
  "Risk-Based Validation Depth":
    "Analysis, validation, and review depth follow each change's risk, exposure, potential impact, and uncertainty — not a score or change category alone.",
  "Continuous Quality Signals":
    "Intent, change context, coverage, check results, and production findings stay connected, and what is learned improves the next piece of work.",
  "Enabled Ownership":
    "Shared intent, evidence, and repository context reach the people doing the work; decision responsibilities are clear, and accepted risks have named owners.",
  "Informed Confidence":
    "Decisions rest on reviewable evidence and stated uncertainty. An AI analysis, an approved draft, or a passing check alone doesn't establish correctness or readiness.",
};

const startingSteps = [
  "Select one recurring quality problem",
  "Review the current workflow and constraints",
  "Identify a suitable approach",
  "Define a bounded pilot or adoption plan",
];

function Chain({ steps, loop = false }: { steps: string[]; loop?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-semibold uppercase tracking-wide">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true" className="text-ink-500">→</span>}
          <span className="rounded border border-paper-line bg-paper px-2.5 py-1 text-ink-900">{step}</span>
        </li>
      ))}
      {loop && (
        <li className="text-ink-500" aria-label="and back to the start">
          <span aria-hidden="true" className="text-base">↺</span>
        </li>
      )}
    </ol>
  );
}

const roleRows = [
  { work: "Interpretation", owner: "AI assists", chip: "border-blue-500/50 bg-blue-500/10 text-ink-900" },
  { work: "Defined operations", owner: "Code applies", chip: "border-charcoal-700 bg-charcoal-900 text-paper" },
  { work: "Consequential decisions", owner: "People decide", chip: "border-gold-600 bg-gold-500 text-charcoal-950" },
];

const patterns = [
  {
    title: "Risk Determines Depth",
    copy: "A low-risk configuration change and a cross-service migration should not receive identical analysis, validation, or review just because they ship in the same release.",
    visual: (
      <ul className="space-y-2.5 text-sm">
        {[
          { tier: "Low risk", depth: "Focused analysis", width: "w-1/3" },
          { tier: "Medium risk", depth: "Broader impact analysis", width: "w-2/3" },
          { tier: "High risk", depth: "Deeper code, dependency, and failure-path analysis", width: "w-full" },
        ].map((row) => (
          <li key={row.tier}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">{row.tier}</span>
              <span className="text-right text-ink-700">{row.depth}</span>
            </div>
            <div aria-hidden="true" className="mt-1 h-1.5 rounded-full bg-paper-line">
              <div className={`h-1.5 rounded-full bg-gold-500 ${row.width}`} />
            </div>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "AI Supports Interpretation — Code Applies Rules",
    copy: "AI assists analysis where interpretation is needed. Deterministic code performs defined operations such as sorting, filtering, score arithmetic, and formatting. People remain responsible for consequential decisions — a calculated score is not a risk judgment.",
    visual: (
      <dl className="space-y-2 text-sm">
        {roleRows.map((row) => (
          <div key={row.work} className="flex items-center gap-3">
            <dt className="w-44 shrink-0 text-ink-700">{row.work}</dt>
            <dd className="inline-flex items-center gap-2 font-semibold">
              <span aria-hidden="true" className="text-ink-900">→</span>
              <span className={`rounded border px-2.5 py-0.5 ${row.chip}`}>{row.owner}</span>
            </dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "Draft First, Review Before Action",
    copy: "AI-generated analysis, automation, or release guidance starts as a draft. The stronger the decision it may influence, the stronger the review.",
    visual: <Chain steps={["Draft", "Review", "Decide", "Reuse"]} />,
  },
  {
    title: "Quality Context Should Accumulate",
    copy: "Each release, defect, test failure, and production lesson should improve the next decision instead of disappearing once the immediate problem is resolved.",
    visual: <Chain steps={["Change", "Signal", "Decision", "Learning"]} loop />,
  },
];

export default function InPracticePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "In Practice", path: "/in-practice" },
      ])} />

      <PageHeader
        eyebrow="Hyper-Agile in practice"
        title="From Framework to Working Patterns"
        intro="Release scope that is hard to justify, automation that is slow to draft, and AI assistance without project context are practical problems. These reference patterns show how Hyper-Agile Quality Engineering™ principles can address them while people keep ownership of risk and release decisions."
      >
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-400">
          The framework is not tied to these designs — the same principles
          can be applied with different tools or much simpler systems. These
          diagrams illustrate reference patterns. The scenarios are
          hypothetical, and implementation choices should be adapted to
          each organization&rsquo;s tools, risks, and constraints.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton href="#reference-architectures">Explore the Patterns</CtaButton>
          <CtaButton href={contactFormUrl("organizational-consulting")} variant="outline-on-charcoal">
            {ctaLabels.discussStartingPoint}
          </CtaButton>
        </div>
      </PageHeader>

      <Section tone="dim" id="reference-architectures" ariaLabelledby="architectures-heading">
        <h2 id="architectures-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          Reference Architectures
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Three patterns for three different problems. Each keeps AI in a
          supporting role and leaves consequential decisions with people.
        </p>

        <div className="mt-10 rounded-lg border border-paper-line bg-white p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-ink-900">Choose a Starting Point</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {referencePatterns.map((pattern) => (
              <li key={pattern.slug} className="rounded-lg border border-paper-line bg-paper p-5">
                <a href={`#${pattern.slug}`} className={linkClass}>
                  {pattern.title}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">Useful when: </span>
                  {pattern.useWhen}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-500">
            These are options for different problems, not maturity stages or
            a required sequence.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {referencePatterns.map((pattern, index) => (
            <ReferencePatternCard key={pattern.slug} pattern={pattern} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="paper" ariaLabelledby="start-heading">
        <h2 id="start-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Start with One Quality Workflow
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          An organizational engagement can begin small. Pick one recurring
          problem — release scoping, automation drafting, or review
          consistency — and work through it before broadening adoption.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {startingSteps.map((step, index) => (
            <li key={step} className="rounded-lg border border-paper-line bg-white p-5">
              <span className="text-sm font-semibold text-ink-500">0{index + 1}</span>
              <p className="mt-2 font-medium leading-snug text-ink-900">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid max-w-4xl gap-6 lg:grid-cols-2">
          <p className="leading-relaxed text-ink-700">
            Success measures are defined together during scoping and refined
            as the work progresses. They might include preparation time, reviewer effort, the
            usefulness of recommendations, or how maintainable the
            automation remains.
          </p>
          <p className="leading-relaxed text-ink-700">
            The next step depends on need: an assessment, a working session,
            team training, or implementation support.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton href={contactFormUrl("organizational-consulting")}>
            {ctaLabels.discussStartingPoint}
          </CtaButton>
          <CtaButton href="/training" variant="secondary">
            Explore Workshops &amp; Training
          </CtaButton>
        </div>
      </Section>

      <Section tone="dim" ariaLabelledby="primer-heading">
        <h2 id="primer-heading" className="font-serif text-3xl font-semibold text-ink-900">
          How the Pieces Fit Together
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Larger patterns separate three concerns, so no single part has more
          access or responsibility than its work needs.
        </p>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {architectureLayers.map((layer) => (
            <li key={layer.name} className="rounded-lg border border-paper-line bg-white p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{layer.name}</p>
              <p className="mt-2 font-serif text-lg font-semibold text-ink-900">
                &ldquo;{layer.question}&rdquo;
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{layer.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper" ariaLabelledby="patterns-heading">
        <h2 id="patterns-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Patterns in Practice
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {patterns.map((pattern) => (
            <li key={pattern.title} className="rounded-lg border border-paper-line bg-white p-6">
              <h3 className="font-serif text-xl font-semibold text-ink-900">{pattern.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-700">{pattern.copy}</p>
              <div className="mt-5">{pattern.visual}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim" ariaLabelledby="operating-model-heading">
        <h2 id="operating-model-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Different Architectures. Same Operating Model.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The patterns solve different problems with different tools, but
          they apply the same four pillars.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <li key={pillar.name} className="relative overflow-hidden rounded-lg border border-paper-line bg-white p-5">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${pillarAccents[index]}`} />
              <h3 className="font-serif text-lg font-semibold text-ink-900">{pillar.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{pillarInPractice[pillar.name]}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-700">
          What a team learns from releases, failures, and production feeds
          the next cycle, as in the{" "}
          <Link href="/quality-loop" className={linkClass}>
            Hyper-Agile Quality Loop
          </Link>
          . Consequential release decisions are made collaboratively, with
          clear decision responsibilities; routine technical review stays
          with the engineers doing the work. Review-first AI, incremental
          adoption, and reusable quality context are supporting practices
          for applying the pillars, not additional pillars.
        </p>
        <div className="mt-8">
          <CtaButton href="/framework" variant="secondary">
            Explore the Hyper-Agile Framework
          </CtaButton>
        </div>
      </Section>

      <Section tone="charcoal" ariaLabelledby="visible-part-heading">
        <div className="max-w-3xl">
          <h2 id="visible-part-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
            The Architecture Is the Visible Part
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist-300">
            Tools can accelerate analysis, automation, and feedback. The
            harder work is deciding what deserves deeper validation, which
            signals can be trusted, and who owns the decision.{" "}
            <em className="text-paper">Hyper-Agile Testing</em> develops the
            operating model behind those decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/book">Explore the Book</CtaButton>
            <CtaButton href="/training" variant="outline-on-charcoal">
              Workshops &amp; Training
            </CtaButton>
            <CtaButton href={contactFormUrl("organizational-consulting")} variant="outline-on-charcoal">
              {ctaLabels.discussStartingPoint}
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
