import Link from "next/link";

export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-2 font-serif text-xl font-semibold tracking-tight"
      aria-label="Hyper-Agile Testing home"
    >
      <span className={onDark ? "text-paper" : "text-ink-900"}>Hyper-Agile</span>
      <span className="text-gold-500">Testing</span>
    </Link>
  );
}
