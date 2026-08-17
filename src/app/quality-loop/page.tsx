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
          eyebrow="Inside the Hyper-Agile Quality Engineering™ framework"
          title="Quality Knowledge Should Move With the Work"
          intro="The Hyper-Agile Quality Loop is the operational flow within the Hyper-Agile Quality Engineering™ framework. It connects product intent, risk, validation, automation, release readiness, production signals, and organizational learning so that quality knowledge moves with the work."
        />
      </div>

      <Section tone="paper">
        <p className="max-w-3xl leading-relaxed text-ink-700">
          Each activity below produces something the next activity depends
          on: clarified intent shapes what risk looks like, identified risk
          shapes how deep validation needs to go, validated behavior shapes
          what can be automated and reused, and so on through release and
          production. Nothing here requires re-reading the diagram in a
          circle — the order below is the order the work actually happens
          in.
        </p>
        <div className="mt-10">
          <QualityLoopDetail />
        </div>
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
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <CtaButton href="/framework" variant="secondary">
            Return to the Framework Overview
          </CtaButton>
          <CtaButton href="/training" variant="secondary">
            Learn it in a workshop
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
