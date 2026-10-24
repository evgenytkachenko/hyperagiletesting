import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { BookCover } from "@/components/BookCover";
import { PreorderButton } from "@/components/PreorderButton";
import { BuyDirectCta } from "@/components/BuyDirectCta";
import { PraiseSection } from "@/components/PraiseSection";
import { SpeakingSection } from "@/components/SpeakingSection";
import { JsonLd } from "@/components/JsonLd";
import { book } from "@/lib/config";
import { bookJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "The Book by Evgeny Tkachenko",
  description:
    "Hyper-Agile Testing by Evgeny Tkachenko. Published by Apress in October 2026. Available on Amazon and through Springer Nature.",
  path: "/book",
});

const audience = [
  "Quality Engineers and QA/QE leaders",
  "Directors and VPs of Engineering",
  "Engineering Managers",
  "Product leaders",
  "CTOs and technology executives",
  "AI engineering and AI-enabled delivery teams",
];

const learn = [
  "Apply the Hyper-Agile Quality Loop from product intent through production learning.",
  "Match validation depth to risk, release stage, and customer impact.",
  "Build trustworthy automation and CI/CD signals that support release decisions.",
  "Apply a review-first approach to AI-assisted requirements review, test design and automation, change-impact analysis, release readiness, and defect triage—using AI to accelerate analysis while people retain judgment and accountability.",
];

const themes = [
  "Risk-based validation and how validation depth should adapt to reach and impact",
  "Trustworthy automation and CI/CD as a source of release-time confidence",
  "AI-augmented Quality Engineering, used alongside informed human judgment",
  "Release readiness as a visible, informed decision rather than a gate",
  "Prototypes, pilots, and early-access releases as part of the validation lifecycle",
  "Enabled ownership through timely, reusable quality context shared across Product, Engineering, and Quality Engineering",
  "Meaningful quality metrics and connected quality signals",
  "Organizational transformation toward a risk-based, AI-accelerated operating model",
];

const chapters = [
  "Foundations of Hyper-Agile Quality Engineering™",
  "Putting the Hyper-Agile Quality Loop into Practice",
  "Risk-Based Quality as the Cornerstone",
  "Building the Hyper-Agile Quality Pipeline",
  "CI/CD as the Backbone of Continuous Quality",
  "Test Automation Strategy for Compressed Delivery",
  "AI-Augmented Quality Engineering",
  "Turning Product Intent into Test Expectations",
  "Citizen Development and Prototype-Driven Delivery",
  "Collaborative Testing and Early Adopter Feedback",
  "Metrics, Quality Signals, and Learning Loops",
  "Transforming the QE Organization for Modern Delivery",
];

export default function BookPage() {
  return (
    <>
      <JsonLd data={bookJsonLd} />
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Book", path: "/book" },
      ])} />

      <PageHeader
        eyebrow="The book"
        title={book.title}
        intro={book.subtitle}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <BookCover priority />
            <div className="text-center lg:text-left">
              <p className="font-medium text-ink-900">{book.author}</p>
              <dl className="mt-2 space-y-1 text-sm text-ink-500">
                <div>
                  <dt className="inline font-medium text-ink-900">Publisher: </dt>
                  <dd className="inline">{book.publisher}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-ink-900">ISBN: </dt>
                  <dd className="inline">{book.isbn}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-ink-900">Format: </dt>
                  <dd className="inline">{book.formats.join(", ")}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-ink-900">Status: </dt>
                  <dd className="inline">{book.statusYear}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <PreorderButton />
              <BuyDirectCta className="mt-2 items-center lg:items-start" />
            </div>
          </div>

          <div>
            <p className="mb-6 max-w-2xl leading-relaxed text-ink-700">
              {book.status}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Overview
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
              AI-assisted delivery can create requirements, code, tests, and
              documentation faster than teams can build confidence in them.
              Hyper-Agile Testing presents a risk-based operating model for
              keeping product intent, risk, validation evidence, release
              readiness, and production learning connected, with validation
              depth matched to reach, release stage, and potential impact.
              It shows how trustworthy automation, CI/CD, AI-assisted
              analysis, early-access learning, and Quality Engineering
              enable that model without replacing human judgment.
            </p>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-ink-900">
              Who it&rsquo;s for
            </h2>
            <ul className="mt-4 grid gap-2 text-ink-700 sm:grid-cols-2">
              {audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-ink-900">
              What you&rsquo;ll learn
            </h2>
            <ul className="mt-4 space-y-3 text-ink-700">
              {learn.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-ink-900">
              Major themes
            </h2>
            <ul className="mt-4 space-y-3 text-ink-700">
              {themes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <PreorderButton />
              <Link href="/framework" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
                Explore the framework →
              </Link>
            </div>
            <BuyDirectCta className="mt-6 items-start" />
          </div>
        </div>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-3xl font-semibold text-ink-900">
          Inside the Book
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => (
            <li key={chapter} className="flex gap-3 rounded-lg border border-paper-line bg-white p-4">
              <span className="font-serif text-sm font-semibold text-ink-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink-700">{chapter}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="paper" ariaLabelledby="praise-heading">
        <PraiseSection />
      </Section>

      <Section tone="dim" ariaLabelledby="speaking-heading">
        <SpeakingSection />
      </Section>
    </>
  );
}
