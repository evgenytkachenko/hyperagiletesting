import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { HeadshotPlaceholder } from "@/components/HeadshotPlaceholder";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { author, carunel } from "@/lib/config";
import { bioParagraphs } from "@/lib/bio";

export const metadata = buildMetadata({
  title: "About Evgeny Tkachenko",
  description:
    "Evgeny Tkachenko is CEO of Carunel LLC, author of the forthcoming Apress book Hyper-Agile Testing, and creator of the Hyper-Agile Quality Engineering framework.",
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
            <HeadshotPlaceholder />
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
        <div className="mt-6 flex flex-wrap gap-4">
          <CtaButton href="/book" variant="secondary">
            The book
          </CtaButton>
          <CtaButton href="/framework" variant="secondary">
            The framework
          </CtaButton>
          <CtaButton href="/training" variant="secondary">
            Training
          </CtaButton>
          <CtaButton href="/speaking" variant="secondary">
            Speaking
          </CtaButton>
          <CtaButton href={carunel.url} variant="secondary" external>
            Carunel LLC
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
