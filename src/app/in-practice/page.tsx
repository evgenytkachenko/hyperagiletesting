import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { ReferencePatternCard } from "@/components/ReferencePatternCard";
import { pillarAccents } from "@/components/PillarGrid";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pillars } from "@/lib/content";
import { contactFormUrl } from "@/lib/inquiry";
import {
  architectureLayers,
  referencePatterns,
  transferablePrinciples,
} from "@/lib/inPractice";

export const metadata = buildMetadata({
  title: "Hyper-Agile Quality Engineering in Practice",
  description:
    "Explore practical reference architectures for risk-based release planning, AI-assisted test automation, and continuous quality engineering using the Hyper-Agile Quality Engineering framework.",
  path: "/in-practice",
});

const labelClassName = "text-xs font-semibold uppercase tracking-wide text-ink-500";

/** How each pillar shows up across the three architectures — a tie-back, not a re-explanation. */
const pillarInPractice: Record<string, string> = {
  "Risk-Based Validation Depth": "Analysis depth follows the risk of each change.",
  "Continuous Quality Signals":
    "Change context, coverage, and quality-gate results feed the next decision.",
  "Enabled Ownership":
    "Repository context and review checkpoints keep responsibility with the people doing the work.",
  "Informed Confidence":
    "Plans and drafts state what was analyzed, what is covered, and what remains uncertain.",
};

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

const patterns = [
  {
    title: "Risk Determines Depth",
    copy: "A low-risk configuration change and a cross-service migration should not receive identical analysis simply because they are part of the same release.",
    connection: "Risk-Based Validation Depth",
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
    title: "AI Handles Judgment — Code Handles Rules",
    copy: "Use AI where interpretation is required. Use deterministic code for sorting, filtering, scoring arithmetic, clustering, rendering, and other predictable operations.",
    connection: "Continuous Quality Signals + Informed Confidence",
    visual: (
      <dl className="space-y-2 text-sm">
        <div className="flex items-center gap-3">
          <dt className="w-44 shrink-0 text-ink-700">Interpretation</dt>
          <dd className="inline-flex items-center gap-2 font-semibold text-ink-900">
            <span aria-hidden="true">→</span>
            <span className="rounded border border-blue-500/50 bg-blue-500/10 px-2.5 py-0.5">AI</span>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt className="w-44 shrink-0 text-ink-700">Deterministic operation</dt>
          <dd className="inline-flex items-center gap-2 font-semibold text-ink-900">
            <span aria-hidden="true">→</span>
            <span className="rounded border border-charcoal-700 bg-charcoal-900 px-2.5 py-0.5 text-paper">Code</span>
          </dd>
        </div>
      </dl>
    ),
  },
  {
    title: "Draft First, Review Before Action",
    copy: "AI-generated analysis, automation, or release guidance begins as a draft. The stronger the decision it may influence, the stronger the review requirement.",
    connection: "Review-First AI",
    visual: <Chain steps={["Draft", "Review", "Decide", "Reuse"]} />,
  },
  {
    title: "Quality Context Should Accumulate",
    copy: "Each release, defect, test failure, and production lesson should improve the next decision rather than disappear after the immediate problem is resolved.",
    connection: "Hyper-Agile Quality Loop",
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
        intro="Hyper-Agile Quality Engineering™ is an operating model, not a specific tool stack. These reference architectures show how its principles can be translated into practical engineering systems while keeping human judgment, risk, and release confidence at the center."
      >
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-400">
          These are conceptual reference patterns, not descriptions of any
          particular organization&rsquo;s systems. Examples are
          hypothetical, and any implementation should be adapted to the
          organization&rsquo;s own tools, risks, and constraints.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton href="#reference-architectures">Explore the architectures</CtaButton>
          <CtaButton href="/framework" variant="outline-on-charcoal">
            Explore the framework
          </CtaButton>
        </div>
      </PageHeader>

      <Section tone="dim" id="reference-architectures" ariaLabelledby="architectures-heading">
        <h2 id="architectures-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          Reference Architectures
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          There is no single Hyper-Agile technology stack. These
          architectures demonstrate several ways teams can connect quality
          context, automation, AI-assisted analysis, and human
          decision-making without turning AI into the owner of quality.
        </p>
        <div className="mt-10 space-y-8">
          {referencePatterns.map((pattern, index) => (
            <ReferencePatternCard key={pattern.slug} pattern={pattern} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="paper" ariaLabelledby="primer-heading">
        <h2 id="primer-heading" className="font-serif text-3xl font-semibold text-ink-900">
          How the Pieces Fit Together
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The larger architectures above separate three concerns. Keeping
          them apart is what lets the analysis scale with the work without
          giving any one part more access or responsibility than it needs.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
          <ol aria-label="Architecture layers">
            {architectureLayers.map((layer, index) => (
              <li key={layer.name}>
                {index > 0 && (
                  <div aria-hidden="true" className="flex justify-center py-1.5 text-ink-500">↓</div>
                )}
                <div className="rounded-lg border border-paper-line bg-white p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{layer.name}</p>
                  <p className="mt-2 font-serif text-lg font-semibold text-ink-900">
                    &ldquo;{layer.question}&rdquo;
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{layer.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div>
            <h3 className={labelClassName}>Transferable principles</h3>
            <ul className="mt-4 space-y-3 text-ink-700">
              {transferablePrinciples.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {principle}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg border border-gold-500/40 bg-gold-300/10 p-5 leading-relaxed text-ink-900">
              These patterns are implementation examples, not framework
              requirements. A team may implement the same Hyper-Agile
              principles using much simpler tooling.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dim" ariaLabelledby="patterns-heading">
        <h2 id="patterns-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Patterns in Practice
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Four patterns recur across these systems, whatever tools a team
          uses.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {patterns.map((pattern) => (
            <li key={pattern.title} className="flex flex-col rounded-lg border border-paper-line bg-white p-6">
              <h3 className="font-serif text-xl font-semibold text-ink-900">{pattern.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-700">{pattern.copy}</p>
              <div className="mt-5">{pattern.visual}</div>
              <p className="mt-auto pt-6 text-sm text-ink-500">
                <span className="font-semibold text-ink-700">Framework connection:</span>{" "}
                {pattern.connection}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" ariaLabelledby="operating-model-heading">
        <h2 id="operating-model-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Different Architectures. Same Operating Model.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The architectures above use different technologies and solve
          different problems, but they implement the same operating
          principles: apply quality effort according to risk, connect
          signals across delivery, keep responsibility close to the work,
          and make confidence visible before important decisions.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <li key={pillar.name} className="relative overflow-hidden rounded-lg border border-paper-line bg-white p-5">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${pillarAccents[index]}`} />
              <h3 className="font-serif text-lg font-semibold text-ink-900">{pillar.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{pillarInPractice[pillar.name]}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
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
            harder challenge is deciding what deserves deeper validation,
            which signals can be trusted, who owns the decision, and how the
            organization learns from the outcome.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-paper">
            <em>Hyper-Agile Testing</em> develops the operating model behind
            these decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/book">Explore the Book</CtaButton>
            <CtaButton href="/training" variant="outline-on-charcoal">
              Workshops &amp; Speaking
            </CtaButton>
            <CtaButton href={contactFormUrl("organizational-consulting")} variant="outline-on-charcoal">
              Discuss an Implementation
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
