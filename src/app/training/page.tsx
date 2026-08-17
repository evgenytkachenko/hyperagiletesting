import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { carunel, contactLinks, ctaLabels, legal } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Training",
  description:
    "Hyper-Agile Quality Engineering: From Intent to Production Confidence — a professional workshop for QE teams, engineering leaders, and delivery organizations, offered by Carunel LLC.",
  path: "/training",
});

const topics = [
  "Identifying delivery and quality risk",
  "Turning requirements into test expectations",
  "Selecting appropriate validation depth",
  "Automation strategy",
  "AI-assisted Quality Engineering",
  "Change-impact analysis and regression focus",
  "Release readiness",
  "Production feedback and learning",
  "Applying the framework to prototypes, pilots, early access, and general availability",
];

const audience = [
  "QE and QA teams",
  "Engineering leaders",
  "Product and Engineering teams",
  "Cross-functional delivery organizations",
];

const formats = [
  "Conference workshop",
  "Private team workshop",
  "Leadership briefing",
  "Training session",
];

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Training", path: "/training" },
      ])} />

      <PageHeader
        eyebrow="Professional training"
        title="Hyper-Agile Quality Engineering™ Training"
        intro="Hyper-Agile Quality Engineering: From Intent to Production Confidence — a workshop that guides participants through the operating model and Hyper-Agile Quality Loop using practical examples."
      />

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Purpose
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          This workshop helps QE teams, engineering leaders, and delivery
          organizations apply Hyper-Agile Quality Engineering to their own
          context — connecting intent, risk, validation, automation, release
          readiness, and production learning into one working operating
          model rather than a set of disconnected practices.
        </p>
      </Section>

      <Section tone="dim">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Who it&rsquo;s for
            </h2>
            <ul className="mt-4 space-y-3 text-ink-700">
              {audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
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
          </div>
        </div>
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
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Learning outcomes
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Participants leave with a working understanding of the Hyper-Agile
          Quality Loop, a way to reason about validation depth relative to
          risk, and practical direction for connecting quality signals across
          requirements, testing, CI/CD, release readiness, and production in
          their own environment.
        </p>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss training for your organization
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          {legal.carunelRelationship} Reach out to talk through your team&rsquo;s
          context and which format fits best.
        </p>
        <div className="mt-8">
          <CtaButton href={contactLinks.training} variant="primary">
            {ctaLabels.discussTraining}
          </CtaButton>
        </div>
        <p className="mt-6 text-sm text-mist-400">
          Training and educational services are offered by{" "}
          <a href={carunel.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-300">
            Carunel LLC
          </a>
          .
        </p>
      </Section>
    </>
  );
}
