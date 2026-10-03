import { pillars } from "@/lib/content";
import type { ReferencePattern } from "@/lib/inPractice";
import { CtaButton } from "./CtaButton";
import { FlowDiagram } from "./FlowDiagram";
import { pillarAccents } from "./PillarGrid";

const labelClassName = "text-xs font-semibold uppercase tracking-wide text-ink-500";

/** Pillar tags get that pillar's accent; other practices get a neutral dot. */
export function DemonstratesTag({ name }: { name: string }) {
  const pillarIndex = pillars.findIndex((pillar) => pillar.name === name);
  const dot = pillarIndex >= 0 ? pillarAccents[pillarIndex] : "bg-ink-500";
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper px-3 py-1 text-sm text-ink-900">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot}`} />
      {name}
    </li>
  );
}

/**
 * Overview card for one reference pattern on /in-practice: problem,
 * intended benefit, inputs and output (in words), simplified flow, the
 * essential principles, and a link to the pattern's own page. Key concepts,
 * gap markers, and the full principle list live on the pattern page.
 */
export function ReferencePatternCard({
  pattern,
  index,
}: {
  pattern: ReferencePattern;
  index: number;
}) {
  const headingId = `${pattern.slug}-heading`;

  return (
    <article
      id={pattern.slug}
      aria-labelledby={headingId}
      className="relative overflow-hidden rounded-lg border border-paper-line bg-white shadow-sm"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold-500" />
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold text-ink-500">0{index + 1}</p>
        <h3 id={headingId} className="mt-2 font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
          {pattern.title}
        </h3>
        <p className="mt-2 text-lg text-ink-700">{pattern.subtitle}</p>

        {/* Phones read problem → benefit/inputs/output → diagram → principles;
            desktop puts the diagram in its own column beside the text. */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-7">
          <div className="space-y-6">
            <div>
              <h4 className={labelClassName}>Problem</h4>
              <p className="mt-2 leading-relaxed text-ink-700">{pattern.problem}</p>
            </div>
            <div>
              <h4 className={labelClassName}>Intended benefit</h4>
              <p className="mt-2 leading-relaxed text-ink-700">{pattern.benefit}</p>
            </div>
            <dl className="grid gap-4 rounded-lg border border-paper-line bg-paper p-4 sm:grid-cols-2">
              <div>
                <dt className={labelClassName}>Inputs</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-700">{pattern.inputs}</dd>
              </div>
              <div>
                <dt className={labelClassName}>Output</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-700">{pattern.output}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-paper-line bg-paper p-5 sm:p-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <FlowDiagram nodes={pattern.flow} label={`${pattern.title} flow`} compact />
          </div>

          <div>
            <h4 className={labelClassName}>Essential principles</h4>
            <ul className="mt-3 space-y-2 text-ink-700">
              {pattern.essentialPrinciples.map((principleIndex) => {
                const principle = pattern.principles[principleIndex];
                return (
                  <li key={principle} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {principle}
                  </li>
                );
              })}
            </ul>
            <CtaButton href={`/in-practice/${pattern.slug}`} variant="secondary" className="mt-8">
              View the {pattern.title} pattern →
            </CtaButton>
          </div>
        </div>
      </div>
    </article>
  );
}
