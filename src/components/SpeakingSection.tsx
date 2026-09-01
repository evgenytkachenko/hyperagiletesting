import Link from "next/link";

const speakingAppearances = [
  {
    event: "EuroSTAR Conference 2026",
    date: "June 16, 2026",
    location: "Copenhagen, Denmark",
    talk: "Redefining Quality for AI-Powered Systems",
    href: "https://conference.eurostarsoftwaretesting.com/conference/2026/programme/",
  },
  {
    event: "EuroSTAR Global Series 2026",
    date: "September 15, 2026",
    location: "Online",
    talk: "Redefining Quality for AI-Powered Systems",
    href: "https://conference.eurostarsoftwaretesting.com/global-series/",
  },
  {
    event: "Software Quality Summit Raleigh 2026",
    date: "September 30, 2026",
    location: "Cary, North Carolina",
    talk: "AI-Driven Quality Engineering: From QA Bottlenecks to Release Confidence",
    href: "https://www.testingmind.com/event/software-quality-summit-raleigh/summit-speakers/",
  },
];

/** Shared speaking-proof block (2026 appearances) used on the homepage and /book. */
export function SpeakingSection() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
        2026 Speaker
      </p>
      <h2
        id="speaking-heading"
        className="mt-3 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl"
      >
        Speaking on Modern Quality Engineering
      </h2>
      <p className="mt-4 max-w-2xl text-ink-700">
        Conversations about AI-powered systems, modern Quality Engineering,
        and building release confidence in an AI-accelerated world.
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakingAppearances.map((appearance) => (
          <li key={appearance.event} className="rounded-lg border border-paper-line bg-white p-6">
            <h3 className="font-serif text-lg font-semibold text-ink-900">
              <a
                href={appearance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
              >
                {appearance.event}
              </a>
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              {appearance.date} &middot; {appearance.location}
            </p>
            <p className="mt-2 text-ink-700">
              Talk: &ldquo;{appearance.talk}&rdquo;
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/speaking" className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">
          View Speaking Engagements →
        </Link>
      </div>
    </>
  );
}
