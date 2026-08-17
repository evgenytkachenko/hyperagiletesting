import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center bg-charcoal-950 text-paper">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
          This page doesn&rsquo;t exist
        </h1>
        <p className="mt-5 text-lg text-mist-300">
          The page you&rsquo;re looking for may have moved. Try the
          homepage, or explore the framework and the book.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <CtaButton href="/" variant="primary">
            Go to homepage
          </CtaButton>
          <CtaButton href="/framework" variant="outline-on-charcoal">
            Explore the framework
          </CtaButton>
        </div>
      </Container>
    </div>
  );
}
