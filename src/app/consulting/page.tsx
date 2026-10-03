import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { carunel, ctaLabels } from "@/lib/config";
import { contactFormUrl } from "@/lib/inquiry";

export const metadata = buildMetadata({
  title: "Consulting",
  description:
    "Carunel LLC provides organization-specific Hyper-Agile Quality Engineering™ consulting — assessment, adoption roadmap, and implementation support for organizations and cross-functional teams.",
  path: "/consulting",
});

const engagementSteps = [
  {
    name: "Understand the context",
    description:
      "Discuss business goals, delivery model, constraints, and current quality challenges.",
  },
  {
    name: "Assess the operating model",
    description:
      "Examine how intent, risk, validation, automation, quality signals, release decisions, and production learning connect today.",
  },
  {
    name: "Identify priorities",
    description:
      "Make gaps, risks, and opportunities visible and determine where change would provide the most value.",
  },
  {
    name: "Define an adoption roadmap",
    description:
      "Adapt the Hyper-Agile Quality Engineering™ framework and Hyper-Agile Quality Loop to the organization's environment.",
  },
  {
    name: "Support implementation",
    description:
      "Work with leaders and teams through advisory sessions, facilitated working sessions, workshops, and training.",
  },
  {
    name: "Review and refine",
    description:
      "Evaluate learning from implementation and adjust the operating approach as the organization evolves.",
  },
];

/** Items with an href link to the page that shows that topic in practice. */
type LinkedItem = { label: string; href?: string };

const focusAreas: LinkedItem[] = [
  { label: "Quality Engineering operating-model assessment" },
  { label: "Hyper-Agile Quality Engineering™ adoption and implementation support" },
  { label: "AI-accelerated delivery readiness" },
  { label: "Risk-based validation strategy" },
  { label: "Requirements and test-expectation alignment" },
  { label: "Automation and quality-signal strategy", href: "/in-practice" },
  { label: "Change-impact analysis and regression focus", href: "/in-practice/release-risk-regression-planner" },
  { label: "Release-confidence and readiness assessment" },
  { label: "Production feedback and organizational learning" },
  { label: "Quality Engineering organizational transformation" },
  { label: "Leadership advisory and facilitated working sessions" },
];

const audience = [
  "Engineering and technology leaders",
  "Quality Engineering and QA leaders",
  "Product and Engineering teams",
  "Cross-functional delivery organizations",
  "Organizations modernizing delivery through AI-assisted workflows",
];

const formats: LinkedItem[] = [
  { label: "Organizational assessment and recommendations" },
  { label: "Advisory and implementation-support engagement" },
  { label: "Leadership briefing or working session" },
  { label: "Facilitated cross-functional working sessions" },
  { label: "Private organizational workshop", href: "/training" },
  { label: "Team training as part of adoption or capability-building", href: "/training" },
];

const startingEngagement = [
  "Examine one workflow or release-confidence problem",
  "Identify constraints and priorities",
  "Define an adoption approach",
  "Agree how progress will be evaluated",
];

const implementationSupport = [
  "Design and adoption guidance",
  "Advisory sessions",
  "Facilitated working sessions",
  "Team enablement through workshops and training",
];

const itemLinkClass =
  "font-medium text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600";

function ItemLabel({ item }: { item: LinkedItem }) {
  return item.href ? (
    <Link href={item.href} className={itemLinkClass}>
      {item.label}
    </Link>
  ) : (
    <>{item.label}</>
  );
}

const outputs = [
  "Current-state findings and prioritized opportunities",
  "A tailored adoption roadmap",
  "A mapping of the Hyper-Agile Quality Loop to the organization's delivery model",
  "Recommendations for validation depth, quality signals, ownership, and release readiness",
  "Facilitated implementation support",
  "Workshops or training designed around the organization's context",
];

export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Consulting", path: "/consulting" },
      ])} />

      <PageHeader
        eyebrow="Organizational consulting and implementation support"
        title="Hyper-Agile Quality Engineering™ Consulting"
        intro="Carunel LLC helps organizations close the gap between faster software creation and slower confidence-building. Engagements focus on the operating conditions that create downstream uncertainty: unclear intent, late risk discovery, broad or unreliable regression, scattered quality signals, unclear release ownership, and production learning that does not improve the next cycle."
      >
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist-300">
          Evgeny Tkachenko works with Engineering, Product, and Quality
          leaders to assess how quality context moves today, identify where
          uncertainty accumulates, adapt the Hyper-Agile Quality
          Engineering™ framework, and support practical implementation. The
          goal is to connect intent, risk, validation evidence, release
          decisions, and production learning at a depth appropriate to the
          organization&rsquo;s products and risks.
        </p>
      </PageHeader>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Purpose
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The purpose of an engagement is to help an organization adapt the
          Hyper-Agile Quality Engineering™ framework into a coherent,
          risk-based operating model for its own delivery environment.
          Engagements typically combine current-state assessment,
          recommendations, adoption planning, facilitated implementation,
          and capability-building through workshops or training, scoped to
          what the organization needs. Along the way, the engagement helps
          the organization make shared intent, evidence, decision
          responsibilities, and follow-up ownership explicit. Release and
          risk-acceptance responsibility remains with the organization.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          How an engagement works
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          Engagements move through these steps, scoped to what the
          organization actually needs.
        </p>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2">
          {engagementSteps.map((step, index) => (
            <li key={step.name} className="rounded-lg border border-paper-line bg-white p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-2xl font-semibold text-ink-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-semibold text-ink-900">
                  {step.name}
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-ink-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-lg border border-gold-500/40 bg-white p-6 sm:p-8">
          <h3 className="font-serif text-xl font-semibold text-ink-900">
            A practical starting engagement
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-700">
            An engagement can begin with a bounded first step rather than a
            full program:
          </p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {startingEngagement.map((item, index) => (
              <li key={item} className="rounded-lg border border-paper-line bg-paper p-4">
                <span className="text-sm font-semibold text-ink-500">0{index + 1}</span>
                <p className="mt-1 font-medium leading-snug text-ink-900">{item}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
            A pilot may be a sensible next step, but it is decided together
            rather than included automatically. For examples of workflows a
            first engagement might focus on, see{" "}
            <Link href="/in-practice" className={itemLinkClass}>
              Hyper-Agile in Practice
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Focus areas
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <li key={item.label} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              <span>
                <ItemLabel item={item} />
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Who it is for
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {audience.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl rounded-lg border border-paper-line bg-white p-6 leading-relaxed text-ink-700">
          Consulting services are designed for organizations and
          cross-functional teams. Individual coaching and consumer
          consulting are not currently offered.
        </p>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Engagement formats
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {formats.map((item) => (
            <li key={item.label} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              <span>
                <ItemLabel item={item} />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl rounded-lg border border-paper-line bg-white p-6">
          <h3 className="font-serif text-xl font-semibold text-ink-900">
            What implementation support covers
          </h3>
          <ul className="mt-4 grid gap-2 text-ink-700 sm:grid-cols-2">
            {implementationSupport.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-ink-700">
            Implementation support is tailored to the agreed scope and may
            include guidance, team enablement, and hands-on engineering
            where explicitly agreed.
          </p>
        </div>
        <p className="mt-6 text-ink-700">
          Looking specifically for a workshop or training session?{" "}
          <Link href="/training" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
            Explore Workshops &amp; Training
          </Link>
          .
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          What you get
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          Engagement outputs typically include:
        </p>
        <ul className="mt-6 space-y-3 text-ink-700">
          {outputs.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl rounded-lg border border-paper-line bg-white p-6 leading-relaxed text-ink-700">
          The intended result is a delivery system that spends less effort
          reconstructing context and more effort reducing the uncertainty
          that matters—through earlier clarification, more targeted
          validation, more trustworthy signals, clearer release decisions,
          and faster learning from production.
        </p>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss an organizational engagement
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Share your organization&rsquo;s context, current challenges, and
          goals. Evgeny will follow up to discuss fit, scope, and an
          appropriate starting point.
        </p>
        <div className="mt-8">
          <CtaButton href={contactFormUrl("organizational-consulting")} variant="primary">
            {ctaLabels.discussConsulting}
          </CtaButton>
        </div>
        <p className="mt-6 text-sm text-mist-400">
          Consulting services are offered by{" "}
          <a href={carunel.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-300">
            Carunel LLC
          </a>
          .
        </p>
      </Section>
    </>
  );
}
