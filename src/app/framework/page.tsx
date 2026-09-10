import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PillarGrid } from "@/components/PillarGrid";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "Framework",
  description:
    "Hyper-Agile Quality Engineering™ is a risk-based operating model built on four pillars, with the Quality Loop putting them into practice across AI-accelerated delivery.",
  path: "/framework",
});

export default function FrameworkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Framework", path: "/framework" },
      ])} />

      <PageHeader
        eyebrow="The operating framework"
        title="Hyper-Agile Quality Engineering™"
        intro="A risk-based operating model for delivery environments where teams move quickly, use AI-assisted workflows, release in smaller increments, and continuously learn from production."
      />

      <Section tone="paper">
        <div className="rounded-lg border border-gold-500/40 bg-gold-300/10 p-6">
          <p className="text-lg leading-relaxed text-ink-900">
            <span className="font-semibold">Hyper-Agile Testing</span> is the
            book. <span className="font-semibold">Hyper-Agile Quality
            Engineering™</span> is the operating framework introduced in the
            book.
          </p>
        </div>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Why this model exists
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          AI-assisted tools now let teams produce requirements, code, tests,
          and documentation far faster than before. That speed doesn&rsquo;t
          automatically translate into confidence that a release is safe:
          faster creation does not automatically create faster confidence.
          Hyper-Agile Quality Engineering™ exists to close that gap by
          treating quality as a connected, risk-based capability rather than
          a late gate.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">
          The framework doesn&rsquo;t ask teams to test everything to the
          same depth, and it doesn&rsquo;t ask them to remove rigor to move
          faster. It asks them to match validation depth to risk, keep
          quality signals connected across the lifecycle, and make release
          decisions with visible, informed confidence.
        </p>

        <h2 className="mt-12 max-w-3xl border-t border-paper-line pt-10 font-serif text-3xl font-semibold text-ink-900">
          How Hyper-Agile Extends Agile Quality
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Agile brought quality conversations closer to the work through
          smaller increments, earlier involvement, collaboration, and fast
          feedback. Hyper-Agile Quality Engineering™ builds on that
          foundation for an environment where AI can compress the path from
          idea to implementation and release. It keeps product intent, risk,
          reusable quality artifacts, validation evidence, and production
          learning connected across the full delivery path so confidence
          does not have to be reconstructed at the end.
        </p>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          The four pillars
        </h2>
        <div className="mt-8">
          <PillarGrid />
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-700">
          The four pillars operate as one system. Risk-Based Validation
          Depth determines the rigor appropriate to the change. Continuous
          Quality Signals accumulate evidence and expose uncertainty.
          Enabled Ownership gets that context to the people who can still
          change the work or own the decision. Informed Confidence is the
          result: an explainable release decision grounded in what was
          expected, what was validated, what remains uncertain, and what
          risk is being accepted. The Hyper-Agile Quality Loop puts this
          system into motion.
        </p>
      </Section>

      <Section tone="dim">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
          How the framework operates
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900">
          The Hyper-Agile Quality Loop
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The four pillars define the framework&rsquo;s principles. The
          Hyper-Agile Quality Loop puts those principles into motion across
          ten connected delivery activities.
        </p>
        <div className="mt-8">
          <CtaButton href="/quality-loop" variant="secondary">
            Explore the Quality Loop in Depth →
          </CtaButton>
        </div>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Adaptive, risk-based validation depth
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Not every change carries the same risk, reach, or potential impact.
          A configuration tweak behind a feature flag doesn&rsquo;t need the
          same validation depth as a change to a payment path used by every
          customer. Hyper-Agile Quality Engineering™ asks teams to calibrate
          validation depth deliberately — considering risk, reach, release
          stage, and potential impact — rather than applying one fixed
          process to every change regardless of consequence.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">
          The same capability may also require more depth as its role
          changes: prototype, internal pilot, early access or beta, general
          availability, and high-risk or regulated use. A prototype should
          not receive a GA process, but a capability people have begun to
          depend on should not retain prototype-level controls.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          AI assistance and informed human judgment
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          AI can accelerate requirements review, test design, automation
          drafts, change-impact analysis, release-signal interpretation, and
          defect triage. Hyper-Agile Quality Engineering™ applies a
          review-first discipline: AI drafts or analyzes; people review,
          challenge, tailor, verify, and approve the output at a depth
          proportional to the decision it could influence. Human judgment
          remains responsible for acceptable risk, remaining uncertainty,
          and release readiness.
        </p>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Product, Engineering, Quality Engineering, Support, and Operations
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Quality is not the sole responsibility of a single team. Product
          shapes intent and acceptable risk. Engineering builds with
          testability and change-impact in mind. Quality Engineering designs
          risk-based validation strategy and reusable quality artifacts.
          Support and Operations bring production signal back into the loop.
          Hyper-Agile Quality Engineering™ connects these roles instead of
          treating quality as a handoff at the end of the process.
        </p>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Intent, validation, release readiness, and production learning
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          The framework connects four moments that are often disconnected in
          practice: clarifying what is intended, validating it at a depth
          appropriate to risk, deciding release readiness with visible
          confidence and known gaps, and learning from what actually happens
          in production. Each moment feeds the next, and production learning
          feeds back into the beginning of the cycle. This connected flow is
          detailed activity by activity on the{" "}
          <Link href="/quality-loop" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
            Quality Loop page
          </Link>
          .
        </p>
      </Section>

      <Section tone="paper">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Supporting fast-moving teams without removing rigor
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-ink-700">
          Hyper-Agile Quality Engineering™ is not a claim that testing should
          happen faster in isolation, or that Quality Engineering is a
          bottleneck to route around. It is a way to keep rigor in place
          while delivery speeds up — by making validation depth proportional
          to risk, by capturing quality knowledge as reusable artifacts
          instead of repeated effort, and by keeping release decisions
          informed rather than assumed.
        </p>
        <div className="mt-8">
          <CtaButton href="/consulting" variant="secondary">
            Apply the Framework in Your Organization
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
