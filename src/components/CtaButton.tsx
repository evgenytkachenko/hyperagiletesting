import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-on-charcoal";
type Size = "default" | "compact";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-charcoal-950 hover:bg-gold-400 focus-visible:bg-gold-400",
  secondary:
    "bg-charcoal-900 text-paper hover:bg-charcoal-700 focus-visible:bg-charcoal-700",
  "outline-on-charcoal":
    "border border-mist-400 text-paper hover:border-gold-400 hover:text-gold-300",
};

/** Both sizes keep a 44px+ tap target; compact is for tight header/nav rows. */
const sizeClasses: Record<Size, string> = {
  default: "px-6 py-3 text-base",
  compact: "px-4 py-3 text-sm",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  external = false,
  accessibleName,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  accessibleName?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
