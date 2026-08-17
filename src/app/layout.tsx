import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig, author, carunel } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Hyper-Agile Testing | Quality Engineering for AI-Accelerated Delivery",
    template: "%s | Hyper-Agile Testing",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.domain,
    title: "Hyper-Agile Testing | Quality Engineering for AI-Accelerated Delivery",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyper-Agile Testing | Quality Engineering for AI-Accelerated Delivery",
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: carunel.name,
  url: carunel.url,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  jobTitle: "CEO, Carunel LLC",
  description: author.shortBio,
  url: `${siteConfig.domain}/about/`,
  worksFor: {
    "@type": "Organization",
    name: carunel.name,
    url: carunel.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
