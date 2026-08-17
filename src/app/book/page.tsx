import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { BookCover } from "@/components/BookCover";
import { PreorderButton } from "@/components/PreorderButton";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { book, siteConfig } from "@/lib/config";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = buildMetadata({
  title: "The Book",
  description:
    "Hyper-Agile Testing by Evgeny Tkachenko — a forthcoming Apress book on risk-based Quality Engineering for AI-accelerated software delivery. Available for preorder on Amazon.",
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
  "Use AI responsibly for requirements review, test design and automation, change-impact analysis, release readiness, and defect triage.",
];

const themes = [
  "Risk-based validation and how validation depth should adapt to reach and impact",
  "Trustworthy automation and CI/CD as a source of release-time confidence",
  "AI-augmented Quality Engineering, used alongside informed human judgment",
  "Release readiness as a visible, informed decision rather than a gate",
  "Prototypes, pilots, and early-access releases as part of the validation lifecycle",
  "Collaborative ownership of quality across Product, Engineering, and Quality Engineering",
  "Meaningful quality metrics and connected quality signals",
  "Organizational transformation toward a risk-based, AI-accelerated operating model",
];

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  alternateName: `${book.title}: ${book.subtitle}`,
  author: { "@type": "Person", name: book.author },
  publisher: { "@type": "Organization", name: book.publisher },
  image: `${siteConfig.domain}${book.coverImage}`,
  url: `${siteConfig.domain}/book`,
  ...(book.publicationDate ? { datePublished: book.publicationDate } : {}),
};

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
              <p className="text-ink-700">{book.publisher}</p>
              <p className="mt-1 text-sm text-ink-500">{book.status}</p>
            </div>
            <PreorderButton />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Overview
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
              Hyper-Agile Testing follows quality from product intent through
              production learning. It presents a connected approach to
              risk-based validation, trustworthy automation and CI/CD,
              AI-augmented Quality Engineering, release readiness, prototypes
              and early-access releases, collaborative ownership, meaningful
              metrics, and organizational transformation.
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

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PreorderButton />
              <CtaButton href="/framework" variant="secondary">
                Explore the framework
              </CtaButton>
              <CtaButton href="/training" variant="secondary">
                See training
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
