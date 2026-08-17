import Link from "next/link";
import { footerGroups, carunel, book, legal, ctaLabels } from "@/lib/config";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-charcoal-line bg-charcoal-950 text-mist-300">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Wordmark onDark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              A book and framework for building release confidence in
              AI-accelerated software delivery.
            </p>
          </div>

          <nav aria-label="Footer" className="contents">
            {footerGroups.map((group) => (
              <div key={group.heading} className="text-sm">
                <h2 className="mb-3 font-semibold text-paper">{group.heading}</h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-paper">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="text-sm">
            <h2 className="mb-3 font-semibold text-paper">Elsewhere</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ctaLabels.preorderAccessibleName}
                  className="hover:text-paper"
                >
                  {ctaLabels.preorder}
                </a>
              </li>
              <li>
                <a
                  href={carunel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper"
                >
                  Carunel LLC
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-line pt-8 text-xs leading-relaxed text-mist-400">
          <p>{legal.footerStatement}</p>
          <p className="mt-2">{legal.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
