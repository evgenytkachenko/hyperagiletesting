import { book, ctaLabels } from "@/lib/config";
import { CtaButton } from "./CtaButton";

export function PreorderButton({
  variant = "primary",
  size = "default",
  label = ctaLabels.preorder,
  className = "",
}: {
  variant?: "primary" | "secondary" | "outline-on-charcoal";
  size?: "default" | "compact";
  label?: string;
  className?: string;
}) {
  return (
    <CtaButton
      href={book.amazonUrl}
      external
      variant={variant}
      size={size}
      accessibleName={ctaLabels.preorderAccessibleName}
      className={className}
    >
      {label}
    </CtaButton>
  );
}
