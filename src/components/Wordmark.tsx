import Link from "next/link";

export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap font-serif text-lg font-semibold tracking-tight sm:gap-2 sm:text-xl"
      aria-label="Hyper-Agile Testing home"
    >
      <span className={onDark ? "text-paper" : "text-ink-900"}>Hyper-Agile</span>
      <span className="text-gold-500">Testing</span>
    </Link>
  );
}
