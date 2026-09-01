import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { Headshot } from "@/components/Headshot";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { author, carunel } from "@/lib/config";
import { bioParagraphs } from "@/lib/bio";

export const metadata = buildMetadata({
  title: "About Evgeny Tkachenko",
  description:
    "Evgeny Tkachenko is Founder of Carunel LLC, author of the forthcoming Apress book Hyper-Agile Testing, and originator of the Hyper-Agile Quality Engineering™ framework and the Hyper-Agile Quality Loop.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])} />

      <PageHeader eyebrow="About" title="Evgeny Tkachenko" intro={author.shortBio} />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
          <div className="flex justify-center lg:justify-start">
            <Headshot />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-700">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dim">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">
          Explore more
        </h2>
        <div className="mt-6">
          <CtaButton href="/book" variant="secondary">
            The book
          </CtaButton>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: "The framework", href: "/framework" },
            { label: "Consulting", href: "/consulting" },
            { label: "Workshops & Training", href: "/training" },
            { label: "Speaking", href: "/speaking" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={carunel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
            >
              Carunel LLC
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
