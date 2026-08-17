import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { carunel } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Privacy",
  description:
    "How hyperagiletesting.com handles information — kept simple because the site collects very little.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/privacy" },
      ])} />

      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This page reflects what the site actually does. It is intentionally short."
      />

      <Section tone="paper">
        <div className="max-w-3xl space-y-8 text-ink-700">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              No accounts, no analytics, no tracking
            </h2>
            <p className="mt-3 leading-relaxed">
              This site does not require account creation, does not run
              analytics or advertising scripts, and does not use tracking
              cookies. It is built as a set of static pages.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              No forms, no submitted data
            </h2>
            <p className="mt-3 leading-relaxed">
              Contact, training, speaking, and consulting links on this site
              open a pre-addressed email in your own email application. No
              form on this site collects, transmits, or stores information —
              any message you send goes directly through your own email
              provider, not through this website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Standard web server logs
            </h2>
            <p className="mt-3 leading-relaxed">
              Like most websites, the hosting provider for this site may keep
              basic technical server logs (such as request timestamps and IP
              addresses) for security and reliability purposes. This site
              itself does not access or use that data for tracking or
              marketing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              External links
            </h2>
            <p className="mt-3 leading-relaxed">
              This site links to external services, including Amazon (for
              book preorders) and{" "}
              <a href={carunel.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-600">
                Carunel LLC
              </a>{" "}
              (for training and consulting services). Those services have
              their own privacy practices, which this policy does not cover.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Questions
            </h2>
            <p className="mt-3 leading-relaxed">
              Questions about this policy can be sent through the{" "}
              <Link href="/contact" className="underline hover:text-gold-600">
                Contact page
              </Link>
              .
            </p>
          </div>

          <p className="text-sm text-ink-500">
            If this site&rsquo;s implementation changes to include analytics,
            forms with server-side storage, or accounts, this page should be
            updated to reflect that before launch.
          </p>
        </div>
      </Section>
    </>
  );
}
