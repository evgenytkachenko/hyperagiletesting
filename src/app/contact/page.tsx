import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { InquiryForm } from "@/components/InquiryForm";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { carunel, contactLinks } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a conversation about a Hyper-Agile Quality Engineering™ consulting engagement, workshop, speaking opportunity, or general inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])} />

      <PageHeader
        eyebrow="Contact"
        title="Start a Conversation"
        intro="Tell me a little about your organization, the challenge you are addressing, and the kind of support you are considering. I will review your inquiry and follow up directly."
      />

      <Section tone="paper" id="inquiry-form" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">
              Request a Conversation
            </h2>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>

          <div className="rounded-lg border border-paper-line bg-white p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Prefer Email?
            </h2>
            <p className="mt-3 text-ink-700">
              You can contact me directly at{" "}
              <a
                href={contactLinks.general}
                className="underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
              >
                {carunel.contactEmail}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CtaButton href={contactLinks.general} variant="secondary">
                Email Directly
              </CtaButton>
              <CopyEmailButton email={carunel.contactEmail} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
