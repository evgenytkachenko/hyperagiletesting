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
    "How hyperagiletesting.com handles information, including the Google Ads tag and inquiry-form submissions processed by Formspree.",
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
        intro="This page reflects what the site actually does."
      />

      <Section tone="paper">
        <div className="max-w-3xl space-y-8 text-ink-700">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              No accounts; Google Ads measurement
            </h2>
            <p className="mt-3 leading-relaxed">
              This site does not require account creation. It is built as a
              set of static pages.
            </p>
            <p className="mt-3 leading-relaxed">
              Pages load the Google tag (gtag.js) for Google Ads. It lets us
              measure how visitors who arrive from our ads use the site.
              Google may set cookies or use similar identifiers in your
              browser and receive information such as the pages you visit,
              your IP address, and browser details, and may collect
              information about your activity across different websites over
              time. Google processes this
              data under its own{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-600">
                privacy policy
              </a>
              . You can manage ad personalization in your{" "}
              <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-600">
                Google ad settings
              </a>{" "}
              or block cookies in your browser settings.
            </p>
            <p className="mt-3 leading-relaxed">
              The Google tag is not loaded for visitors in the European
              Economic Area, the United Kingdom, or Switzerland. The site
              infers your region from your browser&rsquo;s time zone setting,
              without looking up your IP address. If the time zone cannot be
              read, the tag is not loaded.
            </p>
            <p className="mt-3 leading-relaxed">
              This site does not change its behavior in response to
              &ldquo;Do Not Track&rdquo; browser signals.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Two ways to get in touch
            </h2>
            <p className="mt-3 leading-relaxed">
              The <Link href="/contact" className="underline hover:text-gold-600">Contact page</Link>{" "}
              offers two options. Direct email links open a pre-addressed
              message in your own email application — no information passes
              through this website or any third party in that case. The
              inquiry form is different, and is described below.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Information you provide
            </h2>
            <p className="mt-3 leading-relaxed">
              When you submit an inquiry, we collect the information you
              voluntarily provide, such as your name, work email address,
              organization, inquiry type, preferred timeframe, and message.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              How we use inquiry information
            </h2>
            <p className="mt-3 leading-relaxed">
              We use this information to respond to your inquiry, understand
              your organization&rsquo;s needs, evaluate a potential
              engagement, and maintain appropriate business correspondence.
              We do not sell this information or use it for unrelated
              marketing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Form processing
            </h2>
            <p className="mt-3 leading-relaxed">
              Inquiry submissions are processed by{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gold-600"
              >
                Formspree
              </a>
              , a third-party form-processing service. Formspree transmits
              the submission to Carunel LLC and may temporarily store
              submission data and process technical information needed to
              deliver and protect its service.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Retention
            </h2>
            <p className="mt-3 leading-relaxed">
              We retain inquiry information only for as long as reasonably
              necessary to respond, evaluate a potential engagement,
              maintain appropriate business records, or meet legal
              obligations. Formspree&rsquo;s handling and retention of
              submitted information are governed by its applicable terms,
              privacy policy, and account settings.
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
              marketing; ad measurement is limited to the Google tag described
              above.
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
            If our practices change, we will update this policy before any
            new data collection begins.
          </p>

          <p className="text-sm text-ink-500">Last updated: October 1, 2026.</p>
        </div>
      </Section>
    </>
  );
}
