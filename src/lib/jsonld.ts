import { siteConfig, book, author, carunel } from "./config";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`,
    })),
  };
}

// Stable IDs connect references across pages without conflating the publisher
// (Apress) with the organization offering consulting and training (Carunel).
export const entityIds = {
  website: `${siteConfig.domain}/#website`,
  organization: `${siteConfig.domain}/#organization`,
  author: `${siteConfig.domain}/about#person`,
  book: `${siteConfig.domain}/book#book`,
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": entityIds.website,
      url: `${siteConfig.domain}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": entityIds.organization },
      about: [{ "@id": entityIds.book }, { "@id": entityIds.author }],
    },
    {
      "@type": "Organization",
      "@id": entityIds.organization,
      name: carunel.name,
      url: carunel.url,
    },
    {
      "@type": "Person",
      "@id": entityIds.author,
      name: author.name,
      jobTitle: "Founder",
      description: author.shortBio,
      url: `${siteConfig.domain}/about`,
      worksFor: { "@id": entityIds.organization },
      sameAs: [author.linkedinUrl],
    },
  ],
};

export const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": entityIds.book,
  inLanguage: "en",
  name: book.title,
  alternateName: `${book.title}: ${book.subtitle}`,
  author: { "@type": "Person", "@id": entityIds.author, name: book.author },
  publisher: { "@type": "Organization", name: book.publisher },
  image: `${siteConfig.domain}${book.coverImage}`,
  url: `${siteConfig.domain}/book`,
  isbn: book.isbn,
  bookEdition: book.edition,
  identifier: { "@type": "PropertyValue", propertyID: "ASIN", value: book.asin },
  ...(book.pageCount ? { numberOfPages: book.pageCount } : {}),
  ...(book.publicationDate ? { datePublished: book.publicationDate } : {}),
};
