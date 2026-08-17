"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { NavItem, book, ctaLabels } from "@/lib/config";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex items-center justify-center rounded-md p-2 text-paper hover:bg-charcoal-700"
      >
        <span className="sr-only">Open menu</span>
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-charcoal-950 text-paper"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-lg font-semibold">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-charcoal-700"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-6 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal-line py-4 text-lg font-medium hover:text-gold-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ctaLabels.preorderAccessibleName}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-gold-500 px-6 py-3 text-center font-semibold text-charcoal-950"
            >
              {ctaLabels.preorder}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
