import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import { JsonLd } from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/jsonld";
import { googleTagLoader } from "@/lib/googleTag";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        <JsonLd data={siteJsonLd} />
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        {/* Skipped entirely for EEA/UK/CH visitors — see src/lib/googleTag.ts. */}
        <Script id="google-tag">{googleTagLoader}</Script>
      </body>
    </html>
  );
}
