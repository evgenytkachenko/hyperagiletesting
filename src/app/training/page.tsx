import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ctaLabels } from "@/lib/config";
import { contactFormUrl } from "@/lib/inquiry";

export const metadata = buildMetadata({
  title: "Workshops & Training",
  description:
    "Organizational workshops and training on Hyper-Agile Quality Engineering™ — delivered as focused sessions or included within a broader consulting and implementation engagement from Carunel LLC.",
  path: "/training",
});

const formats = [
  "Private organizational workshop",
  "Leadership briefing",
  "Cross-functional working session",
  "Team training session",
  "Framework adoption session within a consulting engagement",
];

const topics = [
  "Identifying delivery and quality risk",
  "Turning requirements into test expectations",
  "Selecting appropriate validation depth",
  "Automation strategy",
  "Review-first AI for requirements, test design, automation, change impact, release signals, and production learning",
  "Change-impact analysis and regression focus",
  "Release readiness",
  "Production feedback and learning",
  "Applying the framework to prototypes, pilots, early access, and general availability",
];

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Workshops & Training", path: "/training" },
      ])} />

      <PageHeader
        eyebrow="Organizational workshops and training"
        title="Hyper-Agile Quality Engineering™ Workshops and Training"
        intro="Workshops help leaders and teams apply Hyper-Agile Quality Engineering™ to real delivery work: carry intent and risk into test expectations, choose validation depth proportional to exposure and impact, connect quality signals to release decisions, and turn production findings into reusable learning. Sessions can support a broader implementation engagement or focus on one organizational need."
      />

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Sessions shaped around organizational context
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Sessions are tailored to the participating organization&rsquo;s
          goals, delivery model, and quality challenges. They may combine
          framework education with facilitated application to current
          workflows, risks, quality signals, release decisions, and
          production learning.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">
          Available formats
        </h2>
        <ul className="mt-4 space-y-3 text-ink-700">
          {formats.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Potential topics
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          Sessions are shaped around the participating organization&rsquo;s
          context. Potential topics include:
        </p>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {topics.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl leading-relaxed text-ink-700">
          Depending on scope, participants may leave with a mapped Quality
          Loop, a draft quality-depth decision for a real feature, reviewed
          test expectations, a release-signal view, or a prioritized
          adoption action plan.
        </p>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss the right engagement for your organization
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Start with your organization&rsquo;s context and goals. The
          appropriate format may be a focused workshop, a training session,
          or a broader consulting and implementation engagement.
        </p>
        <div className="mt-8">
          <CtaButton href={contactFormUrl("organizational-consulting")} variant="primary">
            {ctaLabels.discussConsulting}
          </CtaButton>
        </div>
        <p className="mt-6 text-sm text-mist-400">
          Or{" "}
          <Link href={contactFormUrl("workshops-training")} className="underline hover:text-gold-300">
            discuss a specific workshop or training session
          </Link>{" "}
          directly.
        </p>
      </Section>
    </>
  );
}
