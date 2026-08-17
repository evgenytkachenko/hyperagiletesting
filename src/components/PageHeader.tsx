import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="bg-charcoal-950 text-paper">
      <Container className="py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300">
            {intro}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
