import { book, ctaLabels } from "@/lib/config";
import { CtaButton } from "./CtaButton";

/**
 * Secondary "buy from the publisher" CTA, placed directly below the Amazon
 * button. The link is an Awin affiliate link, so it carries an inline
 * disclosure (see also the Privacy page).
 */
export function BuyDirectCta({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const textClass = tone === "dark" ? "text-mist-400" : "text-ink-500";

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className={`text-sm ${textClass}`}>
        Prefer to purchase directly from the publisher?
      </p>
      {/* Grouped so the disclosure centers under the button's own width,
          not the full (left-aligned) column — it reads as attached to the
          button rather than floating at the card's left edge. */}
      <div className="flex flex-col items-center gap-2">
        <CtaButton
          href={book.springerUrl}
          external
          rel="sponsored"
          variant={tone === "dark" ? "outline-on-charcoal" : "outline"}
          accessibleName={ctaLabels.buyDirectAccessibleName}
        >
          {ctaLabels.buyDirect}
        </CtaButton>
        <p className={`text-xs ${textClass}`}>(affiliate link)</p>
      </div>
    </div>
  );
}
