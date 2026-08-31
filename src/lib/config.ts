/**
 * Central site configuration.
 *
 * This is the single source of truth for brand facts, the Amazon preorder
 * URL, contact addresses, and navigation. Every page and component should
 * import values from here rather than hard-coding copies.
 */

export const siteConfig = {
  name: "Hyper-Agile Testing",
  domain: "https://hyperagiletesting.com",
  description:
    "Hyper-Agile Quality Engineering is a risk-based operating model for AI-accelerated software delivery, introduced in the forthcoming Apress book Hyper-Agile Testing by Evgeny Tkachenko.",
} as const;

export const book = {
  title: "Hyper-Agile Testing",
  subtitle: "Delivering Software in an AI-Accelerated World",
  author: "Evgeny Tkachenko",
  publisher: "Apress",
  status: "Forthcoming from Apress — available for preorder on Amazon",
  amazonUrl:
    "https://www.amazon.com/Hyper-Agile-Testing-Delivering-Software-AI-Accelerated/dp/B0HBHS228V",
  isbn: "9798868832307",
  /**
   * Set this once Apress confirms a publication date, e.g. "2026-11-01".
   * When null, no publication date is rendered or added to structured data.
   */
  publicationDate: null as string | null,
  coverImage: "/images/book-cover.png",
  coverAlt:
    "Hyper-Agile Testing by Evgeny Tkachenko, forthcoming from Apress.",
  coverWidth: 2844,
  coverHeight: 4104,
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
  shortBio:
    "Evgeny Tkachenko is CEO of Carunel LLC, author of the forthcoming Apress book Hyper-Agile Testing, and originator of the Hyper-Agile Quality Engineering™ framework and the Hyper-Agile Quality Loop.",
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
};

export const primaryNav: NavItem[] = [
  { label: "Book", href: "/book" },
  { label: "Framework", href: "/framework" },
  { label: "Consulting", href: "/consulting" },
  { label: "Speaking", href: "/speaking" },
  { label: "About", href: "/about" },
];

/**
 * Footer link groups. Quality Loop is deliberately grouped under the
 * Framework (not listed as a flat top-level peer) to reflect that it is a
 * component of the framework, not an equal, separate destination.
 */
export const footerGroups: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore the Framework",
    items: [
      { label: "Framework", href: "/framework" },
      { label: "Quality Loop", href: "/quality-loop" },
    ],
  },
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
  preorder: "Preorder on Amazon",
  preorderAccessibleName: "Preorder Hyper-Agile Testing on Amazon",
  exploreFramework: "Explore the Framework",
  exploreFrameworkFull: "Explore Hyper-Agile Quality Engineering",
  discussTraining: "Discuss Workshops & Training",
  speakingInquiry: "Speaking Inquiry",
  discussConsulting: "Discuss an Organizational Engagement",
} as const;

function mailto(email: string, subject: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const contactLinks = {
  training: mailto(carunel.contactEmail, "Training Inquiry — Hyper-Agile Quality Engineering"),
  general: mailto(carunel.contactEmail, "General Inquiry — Hyper-Agile Testing"),
} as const;

export const legal = {
  footerStatement:
    "Hyper-Agile Quality Engineering™ is a framework and operating model originated by Evgeny Tkachenko. Organizational consulting, implementation support, workshops, and training are offered by Carunel LLC.",
  copyright: "Copyright © 2026 Carunel LLC. All rights reserved.",
  carunelRelationship: "Organizational consulting and implementation support are offered by Carunel LLC.",
} as const;
