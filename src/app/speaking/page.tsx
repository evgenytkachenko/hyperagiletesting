import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Headshot } from "@/components/Headshot";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { author, contactLinks, ctaLabels } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Speaking",
  description:
    "Evgeny Tkachenko is available for conference talks, panels, workshops, and podcasts on Hyper-Agile Quality Engineering, risk-based testing, and AI-assisted QE.",
  path: "/speaking",
});

const topics = [
  "Hyper-Agile Quality Engineering",
  "AI-accelerated software delivery",
  "Modern Quality Engineering",
  "Risk-based testing",
  "AI-assisted QE",
  "Release confidence",
  "Quality Engineering organizational transformation",
];

const featuredTalks = [
  {
    title: "Redefining Quality for AI-Powered Systems",
    description:
      "Probabilistic, data-driven AI systems require Quality Engineering approaches that address accuracy, robustness, fairness, interpretability, changing behavior, and production monitoring.",
  },
  {
    title: "AI-Driven Quality Engineering: From QA Bottlenecks to Release Confidence",
    description:
      "How AI-assisted workflows can connect requirements analysis, test expectations, reusable artifacts, automation, change-impact analysis, regression focus, release readiness, and production learning — while keeping people responsible for judgment and approval.",
  },
  {
    title: "Hyper-Agile Quality Engineering",
    description:
      "A talk, leadership briefing, or workshop about building release confidence as quickly as teams create change, through risk-based validation depth, continuous quality signals, enabled ownership, and informed confidence.",
  },
];

const upcomingAppearances = [
  {
    event: "EuroSTAR Global Series",
    date: "September 15, 2026",
    location: "Online",
    talk: "Redefining Quality for AI-Powered Systems",
    href: "https://conference.eurostarsoftwaretesting.com/global-series/",
  },
  {
    event: "Software Quality Summit Raleigh",
    date: "September 30, 2026",
    location: "Raleigh, North Carolina",
    talk: "AI-Driven Quality Engineering: From QA Bottlenecks to Release Confidence",
    href: "https://www.testingmind.com/event/software-quality-summit-raleigh/summit-speakers/",
  },
];

const recentAppearance = {
  event: "EuroSTAR Conference 2026",
  date: "June 16, 2026",
  talk: "Redefining Quality for AI-Powered Systems",
  href: "https://conference.eurostarsoftwaretesting.com/event/2026/redefining-quality-for-ai-powered-systems/",
};

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Speaking", path: "/speaking" },
      ])} />

      <PageHeader
        eyebrow="Speaking & conferences"
        title="Speaking & Conferences"
        intro="Evgeny Tkachenko is available for conference talks, panels, workshops, podcasts, and leadership discussions."
      />

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Topics
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Featured talks
        </h2>
        <p className="mt-4 max-w-2xl text-ink-700">
          Available topics for conference talks, leadership briefings, and
          workshops. Confirmed events are listed separately below.
        </p>
        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredTalks.map((talk) => (
            <li key={talk.title} className="rounded-lg border border-paper-line bg-white p-6">
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                {talk.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {talk.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Upcoming appearances
        </h2>
        <ul className="mt-6 space-y-4">
          {upcomingAppearances.map((appearance) => (
            <li key={appearance.event} className="rounded-lg border border-paper-line bg-white p-6">
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                <a
                  href={appearance.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
                >
                  {appearance.event}
                </a>
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                {appearance.date} &middot; {appearance.location}
              </p>
              <p className="mt-2 text-ink-700">
                Talk: &ldquo;{appearance.talk}&rdquo;
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Recent appearance
        </h2>
        <div className="mt-6 rounded-lg border border-paper-line bg-white p-6 sm:max-w-xl">
          <h3 className="font-serif text-lg font-semibold text-ink-900">
            <a
              href={recentAppearance.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
            >
              {recentAppearance.event}
            </a>
          </h3>
          <p className="mt-2 text-sm text-ink-500">{recentAppearance.date}</p>
          <p className="mt-2 text-ink-700">
            Talk: &ldquo;{recentAppearance.talk}&rdquo;
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Speaker profile
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[0.3fr_0.7fr] sm:items-start">
          <Headshot />
          <p className="max-w-2xl leading-relaxed text-ink-700">
            {author.name} is a software engineering and quality leader with
            more than twenty years of experience across large-scale product
            organizations, including Amazon and Wayfair, as well as
            healthcare and startup environments. He is the author of the
            forthcoming Apress book <em>Hyper-Agile Testing: Delivering
            Software in an AI-Accelerated World</em> and the originator of
            the Hyper-Agile Quality Engineering™ framework and the
            Hyper-Agile Quality Loop.
          </p>
        </div>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Invite Evgeny to speak
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Share your event, audience, and format, and Evgeny will follow up
          to discuss fit.
        </p>
        <div className="mt-8">
          <CtaButton href={contactLinks.speaking} variant="primary">
            {ctaLabels.speakingInquiry}
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
