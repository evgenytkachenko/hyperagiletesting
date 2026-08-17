import { primaryNav } from "@/lib/config";
import { Wordmark } from "./Wordmark";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { PreorderButton } from "./PreorderButton";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal-line bg-charcoal-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-charcoal-950"
      >
        Skip to content
      </a>
      <Container className="flex items-center justify-between gap-4 py-3">
        <Wordmark onDark />
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
        >
          {primaryNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-mist-300 transition-colors hover:text-paper"
              activeClassName="!text-gold-400 font-semibold"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PreorderButton className="whitespace-nowrap" />
        </div>
        <MobileNav items={primaryNav} />
      </Container>
    </header>
  );
}
