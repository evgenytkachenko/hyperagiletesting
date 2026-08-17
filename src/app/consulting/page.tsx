import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { carunel, contactLinks, ctaLabels } from "@/lib/config";

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
      "Work with leaders and teams through advisory sessions, facilitated working sessions, workshops, and training as appropriate.",
  },
  {
    name: "Review and refine",
    description:
      "Evaluate learning from implementation and adjust the operating approach as the organization evolves.",
  },
];

const focusAreas = [
  "Quality Engineering operating-model assessment",
  "Hyper-Agile Quality Engineering™ adoption and implementation support",
  "AI-accelerated delivery readiness",
  "Risk-based validation strategy",
  "Requirements and test-expectation alignment",
  "Automation and quality-signal strategy",
  "Change-impact analysis and regression focus",
  "Release-confidence and readiness assessment",
  "Production feedback and organizational learning",
  "Quality Engineering organizational transformation",
  "Leadership advisory and facilitated working sessions",
];

const audience = [
  "Engineering and technology leaders",
  "Quality Engineering and QA leaders",
  "Product and Engineering teams",
  "Cross-functional delivery organizations",
  "Organizations modernizing delivery through AI-assisted workflows",
];

const formats = [
  "Organizational assessment and recommendations",
  "Advisory and implementation-support engagement",
  "Leadership briefing or working session",
  "Facilitated cross-functional working sessions",
  "Private organizational workshop",
  "Team training as part of adoption or capability-building",
];

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
        intro="Carunel LLC provides organization-specific consulting and advisory services for leaders and teams seeking to strengthen release confidence, modernize Quality Engineering, and adapt their delivery practices for AI-accelerated development."
      >
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist-300">
          Engagements begin with the organization&rsquo;s context and pain
          points — not with a predetermined training program. Evgeny
          Tkachenko works with engineering, product, and quality leaders to
          assess the current operating model, identify gaps and priorities,
          adapt the Hyper-Agile Quality Engineering™ framework, and support
          practical implementation.
        </p>
      </PageHeader>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Purpose
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The purpose of an engagement is to help an organization connect
          product intent, risk, validation, automation, release readiness,
          and production learning into a coherent operating model. The work
          may include current-state assessment, recommendations, adoption
          planning, facilitated implementation, and capability-building
          through workshops or training.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          How an engagement may work
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          A typical engagement moves through these steps, but not every
          engagement includes every step — scope is tailored to the
          organization.
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
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Potential focus areas
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
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
            <li key={item} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              {item}
            </li>
          ))}
        </ul>
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
          Potential engagement outputs
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          Depending on the agreed scope, an engagement may include:
        </p>
        <ul className="mt-6 space-y-3 text-ink-700">
          {outputs.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss an organizational engagement
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Share your organization&rsquo;s context, current challenges, and
          goals. Evgeny will follow up to discuss fit, potential scope, and
          an appropriate starting point.
        </p>
        <div className="mt-8">
          <CtaButton href={contactLinks.consulting} variant="primary">
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
