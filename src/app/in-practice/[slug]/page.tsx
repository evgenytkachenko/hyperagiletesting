import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { FlowDiagram } from "@/components/FlowDiagram";
import { DemonstratesTag } from "@/components/ReferencePatternCard";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ctaLabels } from "@/lib/config";
import { contactFormUrl } from "@/lib/inquiry";
import {
  getReferencePattern,
  referencePatternDisclaimer,
  referencePatterns,
} from "@/lib/inPractice";

export const dynamicParams = false;

export function generateStaticParams() {
  return referencePatterns.map((pattern) => ({ slug: pattern.slug }));
}

export async function generateMetadata({ params }: PageProps<"/in-practice/[slug]">) {
  const { slug } = await params;
  const pattern = getReferencePattern(slug);
  if (!pattern) return {};
  return buildMetadata({
    title: `${pattern.title} — Reference Pattern`,
    description: pattern.purpose,
    path: `/in-practice/${pattern.slug}`,
  });
}

const labelClassName = "text-xs font-semibold uppercase tracking-wide text-ink-500";
const linkClass =
  "font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600";

export default async function ReferencePatternPage({ params }: PageProps<"/in-practice/[slug]">) {
  const { slug } = await params;
  const pattern = getReferencePattern(slug);
  if (!pattern) notFound();

  const others = referencePatterns.filter((other) => other.slug !== pattern.slug);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "In Practice", path: "/in-practice" },
        { name: pattern.title, path: `/in-practice/${pattern.slug}` },
      ])} />

      <PageHeader eyebrow="Reference pattern" title={pattern.title} intro={pattern.purpose}>
        <Link
          href="/in-practice#reference-architectures"
          className="mt-8 inline-block text-sm font-semibold text-mist-300 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-300"
        >
          ← Back to In Practice
        </Link>
      </PageHeader>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
          <div className="space-y-8">
            <div>
              <h2 className={labelClassName}>Problem</h2>
              <p className="mt-2 text-lg leading-relaxed text-ink-700">{pattern.problem}</p>
            </div>
            <div>
              <h2 className={labelClassName}>Conceptual architecture</h2>
              <p className="mt-2 text-lg leading-relaxed text-ink-700">{pattern.concept}</p>
            </div>
            {pattern.tags && (
              <div>
                <h2 className={labelClassName}>{pattern.tags.heading}</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {pattern.tags.items.map((item) => (
                    <li
                      key={item}
                      className={
                        pattern.tags?.mono
                          ? "rounded border border-dashed border-gold-600 bg-gold-300/15 px-2.5 py-1 font-mono text-xs text-ink-900"
                          : "rounded border border-paper-line bg-paper px-2.5 py-1 text-sm text-ink-700"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className={labelClassName}>Transferable principles</h2>
              <ul className="mt-3 space-y-2 text-ink-700">
                {pattern.principles.map((principle) => (
                  <li key={principle} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-lg border border-paper-line bg-white p-5 sm:p-6 lg:self-start">
            <FlowDiagram nodes={pattern.flow} label={`${pattern.title} flow`} />
          </div>
        </div>
      </Section>

      <Section tone="dim">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Connection to Hyper-Agile Quality Engineering
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">{pattern.connection}</p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-500">Framework pillars</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {pattern.pillars.map((name) => (
                <DemonstratesTag key={name} name={name} />
              ))}
            </ul>
            {pattern.practices.length > 0 && (
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">Supporting practices:</span>{" "}
                {pattern.practices.join(", ")}
              </p>
            )}
          </div>
          <div className="rounded-lg border border-paper-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">Hypothetical example</p>
            <p className="mt-2 font-serif text-lg font-semibold text-ink-900">{pattern.example.setting}</p>
            <ol className="mt-4 space-y-2 text-ink-700">
              {pattern.example.steps.map((step, index) => (
                <li key={step} className="flex gap-3 leading-relaxed">
                  <span className="w-5 shrink-0 text-sm font-semibold text-ink-500">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-10 rounded-lg border border-gold-500/40 bg-gold-300/10 p-5 text-sm leading-relaxed text-ink-900">
          {referencePatternDisclaimer}
        </p>
      </Section>

      <Section tone="paper">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">
            The architecture is the visible part
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Deciding what deserves deeper validation, which signals can be
            trusted, and who owns the decision is the operating model behind
            this pattern. An organizational engagement can start with one
            workflow like this one; workshops can help a team apply the
            approach. The operating model is developed in{" "}
            <Link href="/book" className={linkClass}>
              <em>Hyper-Agile Testing</em>
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CtaButton href={contactFormUrl("organizational-consulting")}>
              {ctaLabels.discussStartingPoint}
            </CtaButton>
            <CtaButton href="/training" variant="secondary">
              Explore Workshops &amp; Training
            </CtaButton>
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-ink-500">
            Other reference patterns
          </p>
          <ul className="mt-3 space-y-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={`/in-practice/${other.slug}`} className={linkClass}>
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
