import { book, ctaLabels } from "@/lib/config";
import { CtaButton } from "./CtaButton";

export function PreorderButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "secondary" | "outline-on-charcoal";
  className?: string;
}) {
  return (
    <CtaButton
      href={book.amazonUrl}
      external
      variant={variant}
      accessibleName={ctaLabels.preorderAccessibleName}
      className={className}
    >
      {ctaLabels.preorder}
    </CtaButton>
  );
}
