import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { contactLinks, ctaLabels } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch about Hyper-Agile Quality Engineering training, speaking, consulting, or general inquiries.",
  path: "/contact",
});

const paths = [
  {
    heading: "Consulting inquiries",
    body: "Discuss an organizational Hyper-Agile Quality Engineering consulting engagement.",
    cta: ctaLabels.discussConsulting,
    href: contactLinks.consulting,
  },
  {
    heading: "Workshops & Training inquiries",
    body: "Discuss a workshop, private team training, or leadership briefing on Hyper-Agile Quality Engineering.",
    cta: ctaLabels.discussTraining,
    href: contactLinks.training,
  },
  {
    heading: "Speaking inquiries",
    body: "Invite Evgeny to speak at a conference, panel, workshop, or podcast.",
    cta: ctaLabels.speakingInquiry,
    href: contactLinks.speaking,
  },
  {
    heading: "General inquiries",
    body: "Anything else related to the book, the framework, or the site.",
    cta: "Send a General Inquiry",
    href: contactLinks.general,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])} />

      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro="Each inquiry type opens a pre-addressed email so your message reaches the right context."
      />

      <Section tone="paper">
        <ul className="grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <li key={path.heading} className="rounded-lg border border-paper-line bg-white p-6">
              <h2 className="font-serif text-xl font-semibold text-ink-900">
                {path.heading}
              </h2>
              <p className="mt-2 text-ink-700">{path.body}</p>
              <div className="mt-5">
                <CtaButton href={path.href} variant="secondary">
                  {path.cta}
                </CtaButton>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
