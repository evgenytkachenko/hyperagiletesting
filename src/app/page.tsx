import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { BookCover } from "@/components/BookCover";
import { PreorderButton } from "@/components/PreorderButton";
import { PillarGrid } from "@/components/PillarGrid";
import { QualityLoopDiagram } from "@/components/QualityLoopDiagram";
import { PraiseSection } from "@/components/PraiseSection";
import { Headshot } from "@/components/Headshot";
import { VortexMotif } from "@/components/VortexMotif";
import { JsonLd } from "@/components/JsonLd";
import { contactFormUrl } from "@/lib/inquiry";
import { book, ctaLabels, siteConfig, author } from "@/lib/config";

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
  numberOfPages: book.pageCount,
  ...(book.publicationDate ? { datePublished: book.publicationDate } : {}),
};

const linkClass =
  "font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600";
const linkClassOnDark =
  "font-semibold text-mist-300 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-300";

export default function Home() {
  return (
    <>
      <JsonLd data={bookJsonLd} />

      {/* 1. Hero — full-bleed dark */}
      <section className="relative overflow-hidden bg-charcoal-950 text-paper" aria-labelledby="hero-heading">
        <VortexMotif className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-70 sm:-right-10 sm:-top-32" />
        <Container className="relative py-16 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1
                id="hero-heading"
                className="text-pretty font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.25rem]"
              >
                Quality Engineering for AI-Accelerated Delivery
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist-300">
                Faster creation doesn&rsquo;t automatically create faster
                confidence. Hyper-Agile Quality Engineering closes that gap.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <PreorderButton />
                <Link href="/framework" className={linkClassOnDark}>
                  {ctaLabels.exploreFramework}
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 lg:items-start">
              <div className="w-44 sm:w-52 lg:w-56">
                <BookCover priority sizes="(min-width: 1024px) 224px, (min-width: 640px) 208px, 176px" />
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-lg font-semibold">{book.title}</p>
                <p className="text-mist-300">by {book.author}</p>
                <p className="mt-1 text-sm text-mist-400">{book.status}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Framework — split two-column with the pillars as the visual */}
      <Section tone="paper" ariaLabelledby="framework-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="framework-heading" className="text-pretty font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
              Hyper-Agile Quality Engineering
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">
              Hyper-Agile Quality Engineering is a risk-based operating model
              for fast, AI-assisted teams shipping smaller increments and
              learning continuously from production.
            </p>
            <Link href="/framework" className={`mt-6 inline-block ${linkClass}`}>
              Read the full framework →
            </Link>
          </div>
          <PillarGrid />
        </div>
      </Section>

      {/* 3. Quality Loop — centered narrow editorial, the flagship diagram */}
      <Section tone="dim" ariaLabelledby="loop-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="loop-heading" className="text-pretty font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            Quality Knowledge Should Move With the Work
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-700">
            Quality knowledge shouldn&rsquo;t reset at every handoff. The
            Hyper-Agile Quality Loop keeps it moving from product intent
            through production learning.
          </p>
        </div>
        <div className="mt-10">
          <QualityLoopDiagram />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-6 font-medium text-ink-900">
            The activities stay connected. The depth changes with risk.
          </p>
          <Link href="/quality-loop" className={`mt-6 inline-block ${linkClass}`}>
            Explore the Quality Loop →
          </Link>
        </div>
      </Section>

      {/* 4. Credibility band — testimonials, author, speaking, book facts */}
      <Section tone="paper" ariaLabelledby="praise-heading">
        <PraiseSection />

        <div className="mt-14 grid gap-10 border-t border-paper-line pt-10 sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="w-16 shrink-0">
              <Headshot />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-ink-900">{author.name}</p>
              <p className="mt-1 text-sm text-ink-700">Founder, Carunel LLC</p>
              <Link href="/about" className={`mt-2 inline-block text-sm ${linkClass}`}>
                About Evgeny →
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              2026 Speaker
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              Speaking at EuroSTAR Conference, EuroSTAR Global Series, and
              Software Quality Summit Raleigh.
            </p>
            <Link href="/speaking" className={`mt-2 inline-block text-sm ${linkClass}`}>
              View Speaking Engagements →
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              The Book
            </p>
            <dl className="mt-2 space-y-1 text-sm text-ink-700">
              <div>
                <dt className="inline font-medium text-ink-900">Publisher: </dt>
                <dd className="inline">{book.publisher}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink-900">ISBN: </dt>
                <dd className="inline">{book.isbn}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink-900">Pages: </dt>
                <dd className="inline">~{book.pageCount}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink-900">Format: </dt>
                <dd className="inline">{book.formats.join(", ")}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink-900">Publication: </dt>
                <dd className="inline">
                  {book.publicationDateDisplay ?? "date to be announced"}
                </dd>
              </div>
            </dl>
            <Link href="/book" className={`mt-2 inline-block text-sm ${linkClass}`}>
              More about the book →
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. Final CTA — full-bleed dark, single primary action */}
      <section className="bg-charcoal-950 text-paper" aria-labelledby="final-cta-heading">
        <Container className="flex flex-col items-center gap-8 py-16 text-center sm:py-20">
          <h2 id="final-cta-heading" className="text-pretty font-serif text-3xl font-semibold sm:text-4xl">
            Move Faster by Building Confidence Earlier
          </h2>
          <PreorderButton />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/framework" className={`text-sm ${linkClassOnDark}`}>
              {ctaLabels.exploreFramework}
            </Link>
            <Link href={contactFormUrl("organizational-consulting")} className={`text-sm ${linkClassOnDark}`}>
              {ctaLabels.discussConsulting}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
