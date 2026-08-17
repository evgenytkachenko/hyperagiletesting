export function HeadshotPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex aspect-square w-full max-w-[220px] items-center justify-center rounded-full border border-paper-line bg-charcoal-900 ${className}`}
      role="img"
      aria-label="Photograph of Evgeny Tkachenko not yet available"
    >
      <span className="font-serif text-5xl font-semibold text-gold-400">ET</span>
    </div>
  );
}
