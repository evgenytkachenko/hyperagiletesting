import Link from "next/link";
import { Section } from "./Section";
import { PraiseSection } from "./PraiseSection";

const speakerBanner =
  "2026 speaker at EuroSTAR Conference, EuroSTAR Global Series, and Software Quality Summit Raleigh.";

export function ProofSection() {
  return (
    <Section tone="paper" ariaLabelledby="praise-heading">
      <PraiseSection />

      <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-paper-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-700">{speakerBanner}</p>
        <Link
          href="/speaking"
          className="shrink-0 font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
        >
          View Speaking Engagements →
        </Link>
      </div>
    </Section>
  );
}
