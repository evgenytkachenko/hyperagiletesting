import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { contactLinks, ctaLabels } from "@/lib/config";

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
