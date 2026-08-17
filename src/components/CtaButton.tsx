import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-on-charcoal";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-charcoal-950 hover:bg-gold-400 focus-visible:bg-gold-400",
  secondary:
    "bg-charcoal-900 text-paper hover:bg-charcoal-700 focus-visible:bg-charcoal-700",
  "outline-on-charcoal":
    "border border-mist-400 text-paper hover:border-gold-400 hover:text-gold-300",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  accessibleName,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  accessibleName?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150 ${variantClasses[variant]} ${className}`;

  const isMailto = href.startsWith("mailto:") || href.startsWith("tel:");

  if (isMailto) {
    return (
      <a href={href} className={classes} aria-label={accessibleName}>
        {children}
      </a>
    );
  }

  const externalProps: AnchorHTMLAttributes<HTMLAnchorElement> = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={accessibleName}
        {...externalProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={accessibleName}>
      {children}
    </Link>
  );
}
