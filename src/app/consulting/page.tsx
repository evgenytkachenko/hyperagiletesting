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
    "Carunel LLC provides Hyper-Agile Quality Engineering consulting and advisory services for organizations modernizing Quality Engineering for AI-accelerated delivery.",
  path: "/consulting",
});

const engagements = [
  "Quality Engineering operating-model assessment",
  "Hyper-Agile Quality Engineering adoption",
  "AI-accelerated delivery readiness",
  "Risk-based validation strategy",
  "Automation and quality-signal strategy",
  "Release-confidence and readiness assessment",
  "Quality Engineering organizational transformation",
  "Leadership advisory and facilitated working sessions",
];

export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Consulting", path: "/consulting" },
      ])} />

      <PageHeader
        eyebrow="Organizational consulting"
        title="Hyper-Agile Quality Engineering Consulting"
        intro="Carunel LLC provides Hyper-Agile Quality Engineering consulting and advisory services to organizations seeking to strengthen release confidence, modernize Quality Engineering, and adapt their delivery practices for AI-accelerated development."
      />

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Potential engagements
        </h2>
        <ul className="mt-6 grid gap-3 text-ink-700 sm:grid-cols-2">
          {engagements.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dim">
        <p className="max-w-2xl rounded-lg border border-paper-line bg-white p-6 leading-relaxed text-ink-700">
          Consulting services are designed for organizations and
          cross-functional teams. Individual coaching and consumer
          consulting are not currently offered.
        </p>
      </Section>

      <Section tone="charcoal">
        <h2 className="font-serif text-3xl font-semibold">
          Discuss an organizational engagement
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">
          Share your organization&rsquo;s context and goals, and Evgeny will
          follow up to discuss scope and fit.
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
