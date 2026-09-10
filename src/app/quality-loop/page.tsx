import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { QualityLoopDetail } from "@/components/QualityLoopDetail";
import { VortexMotif } from "@/components/VortexMotif";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Hyper-Agile Quality Loop",
  description:
    "Explore the Hyper-Agile Quality Loop, the operational flow within the Hyper-Agile Quality Engineering™ framework that connects product intent, risk, validation, release confidence, production learning, and feedback.",
  path: "/quality-loop",
});

export default function QualityLoopPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Framework", path: "/framework" },
        { name: "Quality Loop", path: "/quality-loop" },
      ])} />

      <div className="relative overflow-hidden">
        <VortexMotif className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-70" />
        <PageHeader
          eyebrow="The Framework in Motion"
          title="The Hyper-Agile Quality Loop"
          intro="The Hyper-Agile Quality Loop is the operational flow within Hyper-Agile Quality Engineering™. The four pillars define how confidence is built; the Quality Loop shows how those principles move through ten connected delivery activities—from product intent and risk to release decisions and production learning."
        >
          <div className="mt-8 max-w-2xl rounded-lg border border-mist-400/20 bg-charcoal-900/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
              Where this fits
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist-300">
              <em>Hyper-Agile Testing</em> introduces the ideas and
              practices. Hyper-Agile Quality Engineering™ organizes them
              into an operating framework. The Quality Loop shows how that
              framework works across delivery.
            </p>
          </div>
          <Link
            href="/framework"
            className="mt-5 inline-block text-sm font-semibold text-mist-300 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-300"
          >
            ← Explore the Framework Overview
          </Link>
        </PageHeader>
      </div>

      <Section tone="paper">
        <p className="max-w-3xl leading-relaxed text-ink-700">
          Each activity creates context or evidence that strengthens what
          follows. Clarified intent shapes risk and test expectations;
          reviewed expectations guide validation, reusable artifacts,
          testability, and automation candidates; implementation and change
          impact focus regression; and release evidence determines what must
          be monitored in production. The activities may overlap, compress,
          or be revisited. Their connection remains even when the depth and
          timing change.
        </p>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-ink-900">
          The Ten Connected Activities
        </h2>
        <div className="mt-6">
          <QualityLoopDetail />
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-700">
          A permission risk identified while clarifying intent should shape
          negative test expectations, automated protection, regression
          focus, release evidence, and production monitoring. If production
          reveals a missed role or configuration, that learning becomes
          reusable context for the next change.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Depth changes, connection doesn&rsquo;t
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          A low-risk change might move through these ten activities quickly,
          with lightweight validation and mostly automated regression
          selection. A high-risk change moves through the same ten
          activities with more validation depth, more deliberate regression
          selection, and closer scrutiny before release. What stays constant
          is that intent, risk, validation, automation, release readiness,
          and production learning all stay connected — none of them happen
          in isolation from the others.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">
          The Loop is not a requirement to create ten artifacts or pass ten
          gates. It is a discipline for retaining the context and evidence
          needed by the next decision, with effort proportional to risk.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <CtaButton href="/framework" variant="secondary">
            Return to the Framework Overview
          </CtaButton>
          <CtaButton href="/consulting" variant="secondary">
            Apply the Framework in Your Organization
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
