import Link from "next/link";
import { Section } from "./Section";

/**
 * PLACEHOLDER CONTENT. Replace `endorsements`, `speakingHistorySummary`,
 * and `sampleChapterUrl` below with real material once available. To
 * remove this section from the homepage, delete the `<ProofSection />`
 * line in src/app/page.tsx.
 */
const endorsements = [
  {
    quote:
      "Placeholder endorsement quote — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title",
    company: "Placeholder Company",
  },
  {
    quote:
      "Placeholder endorsement quote — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title",
    company: "Placeholder Company",
  },
  {
    quote:
      "Placeholder endorsement quote — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title",
    company: "Placeholder Company",
  },
];

const speakingHistorySummary =
  "Placeholder: featured speaker at [Conference], [Conference], and [Conference].";

const sampleChapterUrl = "#";

export function ProofSection() {
  return (
    <Section tone="paper" ariaLabelledby="trust-heading">
      <h2 id="trust-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
        What Readers and Peers Are Saying
      </h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {endorsements.map((item, index) => (
          <li key={index} className="rounded-lg border border-paper-line bg-white p-6">
            <p className="leading-relaxed text-ink-700">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold text-ink-900">{item.name}</p>
            <p className="text-sm text-ink-500">
              {item.title}, {item.company}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-paper-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-700">{speakingHistorySummary}</p>
        <Link
          href={sampleChapterUrl}
          className="shrink-0 font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
        >
          Read a sample chapter →
        </Link>
      </div>
    </Section>
  );
}
