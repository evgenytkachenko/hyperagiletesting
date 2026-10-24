/**
 * Central site configuration.
 *
 * This is the single source of truth for brand facts, the book purchase
 * URLs, contact addresses, and navigation. Every page and component should
 * import values from here rather than hard-coding copies.
 */

export const siteConfig = {
  name: "Hyper-Agile Testing",
  domain: "https://hyperagiletesting.com",
  description:
    "Explore Evgeny Tkachenko’s work on Quality Engineering leadership and software delivery transformation, the Hyper-Agile Testing book, and release confidence in AI-accelerated development.",
  /** Google Ads tag (gtag.js), loaded on every page from the root layout. */
  googleTagId: "AW-18364813337",
} as const;

export const book = {
  title: "Hyper-Agile Testing",
  subtitle: "Delivering Software in an AI-Accelerated World",
  author: "Evgeny Tkachenko",
  publisher: "Apress",
  status:
    "Published by Apress in October 2026. Available on Amazon and through Springer Nature.",
  amazonUrl:
    "https://www.amazon.com/Hyper-Agile-Testing-Delivering-Software-AI-Accelerated/dp/B0HBHS228V",
  springerUrl:
    "https://www.awin1.com/cread.php?awinmid=26429&awinaffid=3121782&campaign=author&ued=https%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F979-8-8688-3231-4",
  isbn: "9798868832307",
  asin: "B0HBHS228V",
  edition: "First Edition",
  /**
   * Short, retailer-agnostic status shown alongside the confirmed facts
   * (publisher, ISBN, format). Keep in sync with publicationDateDisplay.
   */
  statusYear: "Published October 2026",
  /**
   * Page count is unconfirmed — retailer and publisher metadata have
   * conflicted. Leave null until a confirmed count is available; do not
   * sync to Amazon's "Print length", which is a placeholder for
   * forthcoming titles.
   */
  pageCount: null as number | null,
  /** Confirmed available formats. */
  formats: ["Paperback", "Digital"] as readonly string[],
  /**
   * Publication month only: Amazon has listed both October 1 and
   * October 15, 2026, and Apress/Springer shows no date. Switch to a full
   * date only once the publisher confirms one. Update alongside
   * publicationDate.
   */
  publicationDateDisplay: "October 2026" as string | null,
  /** ISO 8601 year-month for structured data (schema.org datePublished). */
  publicationDate: "2026-10" as string | null,
  coverImage: "/images/book-cover.png",
  coverAlt:
    "Hyper-Agile Testing by Evgeny Tkachenko, published by Apress in October 2026.",
  coverWidth: 800,
  coverHeight: 1154,
} as const;

export const carunel = {
  url: "https://carunel.com/",
  name: "Carunel LLC",
  /**
   * Confirmed Carunel business contact address, used for training,
   * speaking, consulting, and general inquiries. A dedicated
   * consulting@carunel.com alias may be introduced later — do not switch
   * to it until that alias is confirmed as live.
   */
  contactEmail: "business@carunel.com",
} as const;

export const author = {
  name: "Evgeny Tkachenko",
  linkedinUrl: "https://www.linkedin.com/in/eugenetkachenko/",
  professionalIdentity: "Quality Engineering Leader | Author | Industry Speaker",
  shortBio:
    "Evgeny Tkachenko is a software engineering and Quality Engineering leader, three-time published author, and creator of the Hyper-Agile Quality Engineering™ operating model. With more than 20 years of experience across organizations including Amazon, Wayfair, One Medical, and ServiceTrade, his work focuses on modernizing software delivery, applying AI responsibly across the development lifecycle, and helping engineering teams build release confidence as delivery accelerates.",
  /**
   * Author headshot, used on /about and /speaking via the shared Headshot
   * component. Swap this file (and this path, if the filename changes) to
   * update it site-wide; no layout change is required.
   */
  headshot: "/images/evgeny-headshot.jpg" as string | null,
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Rendered smaller/indented in the footer — used for a link that is a
   * deeper layer of another item just above it, not a peer-level site
   * section. Not currently used by any footer entry. */
  subordinate?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Book", href: "/book" },
  { label: "Framework", href: "/framework" },
  { label: "In Practice", href: "/in-practice" },
  { label: "Consulting", href: "/consulting" },
  { label: "Training", href: "/training" },
  { label: "Speaking", href: "/speaking" },
  { label: "About", href: "/about" },
];

/**
 * Footer link group. Framework is already in the primary nav and Quality
 * Loop is one click from it (via the Framework page and its own
 * in-content CTAs), so neither is repeated here — that duplication was
 * the actual footer issue, not column density. Workshops & Training sits
 * here instead of being dropped, since it isn't in the primary nav.
 */
export const footerGroups: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Site",
    items: [
      { label: "Book", href: "/book" },
      { label: "Consulting", href: "/consulting" },
      { label: "Workshops & Training", href: "/training" },
      { label: "Speaking", href: "/speaking" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export const ctaLabels = {
  preorder: "View on Amazon",
  preorderAccessibleName: "View Hyper-Agile Testing on Amazon",
  buyDirect: "Buy Direct from Springer Nature",
  buyDirectAccessibleName: "Buy Hyper-Agile Testing direct from Springer Nature",
  exploreFramework: "Explore the Operating Model",
  discussTraining: "Discuss Workshops & Training",
  speakingInquiry: "Speaking Inquiry",
  discussConsulting: "Discuss an Organizational Engagement",
  discussStartingPoint: "Discuss a Starting Point",
} as const;

function mailto(email: string, subject: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const contactLinks = {
  general: mailto(carunel.contactEmail, "General Inquiry — Hyper-Agile Testing"),
} as const;

export const legal = {
  footerStatement:
    "Hyper-Agile Quality Engineering™ is a framework and operating model originated by Evgeny Tkachenko. Organizational consulting, implementation support, workshops, and training are offered by Carunel LLC.",
  copyright: "Copyright © 2026 Carunel LLC. All rights reserved.",
  carunelRelationship: "Organizational consulting and implementation support are offered by Carunel LLC.",
} as const;
