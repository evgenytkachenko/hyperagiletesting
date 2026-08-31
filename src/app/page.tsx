import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BookCover } from "@/components/BookCover";
import { PreorderButton } from "@/components/PreorderButton";
import { CtaButton } from "@/components/CtaButton";
import { PillarGrid } from "@/components/PillarGrid";
import { QualityLoopDiagram } from "@/components/QualityLoopDiagram";
import { VortexMotif } from "@/components/VortexMotif";
import { JsonLd } from "@/components/JsonLd";
import { problemChallenges } from "@/lib/content";
import { book, ctaLabels, siteConfig } from "@/lib/config";
import { author } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Hyper-Agile Testing | Quality Engineering for AI-Accelerated Delivery",
  socialTitle: "Hyper-Agile Testing | Quality Engineering for AI-Accelerated Delivery",
  description: siteConfig.description,
  path: "/",
});

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  alternateName: `${book.title}: ${book.subtitle}`,
  author: { "@type": "Person", name: book.author },
  publisher: { "@type": "Organization", name: book.publisher },
  image: `${siteConfig.domain}${book.coverImage}`,
  url: `${siteConfig.domain}/book`,
  isbn: book.isbn,
  ...(book.publicationDate ? { datePublished: book.publicationDate } : {}),
};

/**
 * Placeholder trust-section content — replace with real endorsements and
 * speaking history once available. See the "Trust & Social Proof" section
 * below for how these are used; delete that whole Section block (and these
 * two arrays plus the sampleChapterUrl constant) to remove the section.
 */
const endorsements = [
  {
    quote:
      "Placeholder endorsement — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title, Organization",
  },
  {
    quote:
      "Placeholder endorsement — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title, Organization",
  },
  {
    quote:
      "Placeholder endorsement — replace with a real quote from an early reader, reviewer, or industry peer.",
    name: "Placeholder Name",
    title: "Placeholder Title, Organization",
  },
];

const speakingHistory = [
  "Placeholder Conference Name — City, Year",
  "Placeholder Conference Name — City, Year",
  "Placeholder Conference Name — City, Year",
];

const sampleChapterUrl = "#";

export default function Home() {
  return (
    <>
      <JsonLd data={bookJsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal-950 text-paper" aria-labelledby="hero-heading">
        <VortexMotif className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-70 sm:-right-10 sm:-top-32" />
        <Container className="relative max-w-2xl py-16 sm:py-20 lg:py-28">
          <h1 id="hero-heading" className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.25rem]">
            Build Release Confidence as Fast as Teams Create Change
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300">
            Hyper-Agile Quality Engineering connects intent, risk,
            validation, automation, and production learning — so
            AI-accelerated teams move fast without pushing uncertainty
            downstream.
          </p>

          <div className="mt-8 rounded-lg border border-charcoal-line bg-charcoal-900/60 p-5">
            <p className="font-serif text-lg font-semibold">{book.title}</p>
            <p className="text-mist-300">by {book.author}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PreorderButton />
            <CtaButton href="/framework" variant="outline-on-charcoal">
              {ctaLabels.exploreFrameworkFull}
            </CtaButton>
          </div>

          <p className="mt-8 text-sm font-medium text-gold-300">
            A practical framework for quality engineering in AI-accelerated
            delivery.
          </p>
        </Container>
      </section>

      {/* The Problem */}
      <Section tone="paper" ariaLabelledby="problem-heading">
        <h2 id="problem-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          Software creation accelerated. Confidence-building didn&rsquo;t.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-700">
          AI accelerates requirements, code, and tests — but release
          confidence lags when validation happens late, quality signals stay
          disconnected, and production feedback arrives too slowly to act on.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problemChallenges.map((challenge) => (
            <li key={challenge.name} className="rounded-lg border border-paper-line bg-white p-5">
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                {challenge.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {challenge.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Framework Introduction */}
      <Section tone="dim" ariaLabelledby="framework-heading">
        <h2 id="framework-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          Hyper-Agile Quality Engineering&trade;
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-700">
          Hyper-Agile Quality Engineering is a risk-based operating model for
          teams working quickly with AI-assisted workflows, shipping smaller
          increments, and learning continuously from production.
        </p>
        <div className="mt-10">
          <PillarGrid />
        </div>
        <div className="mt-8">
          <Link href="/framework" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
            Read the full framework →
          </Link>
        </div>
      </Section>

      {/* Quality Loop */}
      <Section tone="paper" ariaLabelledby="loop-heading">
        <h2 id="loop-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          Quality Knowledge Should Move With the Work
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-700">
          Within the Hyper-Agile Quality Engineering framework, the Quality
          Loop connects ten activities from product intent through
          production learning.
        </p>
        <div className="mt-10">
          <QualityLoopDiagram />
        </div>
        <p className="mt-6 font-medium text-ink-900">
          The activities stay connected. The depth changes with risk.
        </p>
        <div className="mt-6">
          <Link href="/quality-loop" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
            Explore the Quality Loop →
          </Link>
        </div>
      </Section>

      {/* Trust & Social Proof — PLACEHOLDER CONTENT.
          Delete this entire <Section>...</Section> block (and the
          `endorsements`, `speakingHistory`, and `sampleChapterUrl`
          constants above) if you don't have real material yet. */}
      <Section tone="paper" ariaLabelledby="trust-heading">
        <h2 id="trust-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
          What Readers and Peers Are Saying
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {endorsements.map((item, index) => (
            <li key={index} className="rounded-lg border border-paper-line bg-white p-6">
              <p className="leading-relaxed text-ink-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-ink-900">{item.name}</p>
              <p className="text-sm text-ink-500">{item.title}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink-900">
              Recent Speaking
            </h3>
            <ul className="mt-4 space-y-2 text-ink-700">
              {speakingHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-3 rounded-lg border border-paper-line bg-white p-6">
            <p className="text-ink-700">
              Want a preview of the book before you preorder?
            </p>
            <Link href={sampleChapterUrl} className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
              Read a sample chapter →
            </Link>
          </div>
        </div>
      </Section>

      {/* Book Preview */}
      <Section tone="dim" ariaLabelledby="book-heading">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="flex justify-center lg:justify-start">
            <BookCover className="max-w-[240px]" />
          </div>
          <div>
            <h2 id="book-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
              {book.title}
            </h2>
            <p className="mt-1 text-lg text-ink-700">{book.subtitle}</p>
            <p className="mt-3 text-ink-700">
              {book.author} &middot; {book.publisher}
            </p>
            <p className="mt-1 text-sm font-medium text-ink-500">{book.status}</p>

            <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
              Hyper-Agile Testing follows quality from product intent through
              production learning — risk-based validation, trustworthy
              automation, AI-augmented Quality Engineering, release
              readiness, and organizational transformation.
            </p>

            <h3 className="mt-8 font-serif text-xl font-semibold text-ink-900">
              What you&rsquo;ll learn
            </h3>
            <ul className="mt-4 space-y-3 text-ink-700">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                Apply the Hyper-Agile Quality Loop from product intent through
                production learning.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                Match validation depth to risk, release stage, and customer
                impact.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                Build trustworthy automation and CI/CD signals that support
                release decisions.
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                Use AI responsibly for requirements review, test design and
                automation, change-impact analysis, release readiness, and
                defect triage.
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PreorderButton />
              <CtaButton href="/book" variant="secondary">
                More about the book
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Consulting Preview */}
      <Section tone="paper" ariaLabelledby="consulting-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="consulting-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
              Hyper-Agile Quality Engineering Consulting
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700">
              Evgeny Tkachenko, through Carunel LLC, helps organizations
              assess delivery and quality challenges, adapt the Hyper-Agile
              Quality Engineering framework, and implement it across
              engineering, product, and quality.
            </p>
            <div className="mt-6 rounded-lg border border-paper-line bg-white p-5">
              <p className="font-serif text-lg font-semibold text-ink-900">
                From Organizational Pain Points to Production Confidence
              </p>
              <p className="mt-2 text-ink-700">
                Each engagement assesses delivery constraints and quality
                risks, then builds a practical roadmap to implement the
                Quality Loop.
              </p>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Engagements may include assessments, advisory and
              implementation support, leadership working sessions,
              workshops, and training.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <CtaButton href="/consulting" variant="secondary">
              {ctaLabels.discussConsulting}
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* Speaking Preview */}
      <Section tone="dim" ariaLabelledby="speaking-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="speaking-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
              Speaking &amp; Conferences
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700">
              Evgeny speaks at conferences, on panels, and in podcasts on
              Hyper-Agile Quality Engineering and AI-accelerated delivery.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <CtaButton href="/speaking" variant="secondary">
              {ctaLabels.speakingInquiry}
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* About Preview */}
      <Section tone="paper" ariaLabelledby="about-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-heading" className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            About Evgeny Tkachenko
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            {author.shortBio}
          </p>
          <div className="mt-8">
            <Link href="/about" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
              Read more about Evgeny →
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-charcoal-950 text-paper" aria-labelledby="final-cta-heading">
        <Container className="flex flex-col items-center gap-8 py-16 text-center sm:py-20">
          <h2 id="final-cta-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
            Move Faster by Building Confidence Earlier
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <PreorderButton />
            <Link href="/framework" className="text-sm font-semibold text-mist-300 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-300">
              {ctaLabels.exploreFramework}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
