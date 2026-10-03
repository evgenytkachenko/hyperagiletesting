import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
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

/**
 * Illustrative formats drawn from the topic list — not fixed packages.
 * Takeaways describe work participants may develop; no sample outputs are
 * published.
 */
const illustrativeSessions = [
  {
    title: "Risk-Based Release Planning",
    audience: "Engineering and QE leaders and release contributors",
    activity:
      "Examine a selected change or release, identify uncertainty, and discuss appropriate validation depth and regression focus.",
    duration: "90–120 minutes",
    takeaway: "A shared validation approach and priorities for unresolved risks.",
  },
  {
    title: "Review-First AI for Quality Engineering",
    audience: "QEs, automation engineers, and technical leads",
    activity:
      "Examine a chosen AI-assisted workflow, identify the context and verification it requires, and define review responsibilities.",
    duration: "2–3 hours",
    takeaway: "Agreed review expectations and boundaries for a practical pilot.",
  },
  {
    title: "Applying the Hyper-Agile Quality Loop",
    audience: "Product, Engineering, QE, and relevant delivery partners",
    activity:
      "Map intent, risk, validation, release decisions, and production feedback in the team's own workflow.",
    duration: "A half-day working session",
    takeaway: "A mapped Quality Loop and prioritized adoption actions.",
  },
];

const workshopEnquiryLabel = "Discuss a Workshop or Training Session";

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
      >
        <div className="mt-8">
          <CtaButton href={contactFormUrl("workshops-training")}>{workshopEnquiryLabel}</CtaButton>
        </div>
      </PageHeader>

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

      <Section tone="dim" ariaLabelledby="sessions-heading">
        <h2 id="sessions-heading" className="font-serif text-3xl font-semibold text-ink-900">
          Illustrative session formats
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">
          Three examples of how a session might be shaped. They are
          illustrative, not fixed packages: final duration and scope are
          tailored to the organization&rsquo;s goals.
        </p>
        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {illustrativeSessions.map((session) => (
            <li key={session.title} className="flex flex-col rounded-lg border border-paper-line bg-white p-6">
              <h3 className="font-serif text-xl font-semibold text-ink-900">{session.title}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Audience</dt>
                  <dd className="mt-1 text-ink-700">{session.audience}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Activity</dt>
                  <dd className="mt-1 text-ink-700">{session.activity}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Indicative duration</dt>
                  <dd className="mt-1 text-ink-700">{session.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Takeaway</dt>
                  <dd className="mt-1 text-ink-700">{session.takeaway}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss a workshop or training session
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Share your team&rsquo;s context and goals, and a session can be
          shaped around them. A workshop can stand on its own; it does not
          require a broader consulting engagement.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton href={contactFormUrl("workshops-training")}>{workshopEnquiryLabel}</CtaButton>
          <CtaButton href="/consulting" variant="outline-on-charcoal">
            Explore Organizational Consulting
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
