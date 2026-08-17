import { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "dim" | "charcoal";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink-900",
  dim: "bg-paper-dim text-ink-900",
  charcoal: "bg-charcoal-900 text-paper",
};

export function Section({
  children,
  tone = "paper",
  className = "",
  containerClassName = "",
  as: Tag = "section",
  ariaLabelledby,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
  ariaLabelledby?: string;
}) {
  return (
    <Tag
      className={`${toneClasses[tone]} py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
