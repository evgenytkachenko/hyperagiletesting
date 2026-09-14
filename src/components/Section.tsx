import { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "dim" | "charcoal";
type Size = "default" | "compact";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink-900",
  dim: "bg-paper-dim text-ink-900",
  charcoal: "bg-charcoal-900 text-paper",
};

const sizeClasses: Record<Size, string> = {
  default: "py-16 sm:py-20 lg:py-24",
  /** For a section whose content is a single short line or box — the
   * default padding is sized for a heading plus paragraphs, which reads
   * as mostly dead space around one line (e.g. framework's "the book vs.
   * the framework" callout). */
  compact: "py-8 sm:py-10 lg:py-12",
};

export function Section({
  children,
  tone = "paper",
  size = "default",
  className = "",
  containerClassName = "",
  as: Tag = "section",
  ariaLabelledby,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
  ariaLabelledby?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
