export function VortexMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="vortex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-gold-400)" />
          <stop offset="35%" stopColor="var(--color-violet-500)" />
          <stop offset="70%" stopColor="var(--color-blue-500)" />
          <stop offset="100%" stopColor="var(--color-cyan-400)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#vortex-gradient)" strokeWidth="1.4" opacity="0.55">
        <ellipse cx="200" cy="200" rx="180" ry="70" transform="rotate(-18 200 200)" />
        <ellipse cx="200" cy="200" rx="145" ry="52" transform="rotate(-18 200 200)" />
        <ellipse cx="200" cy="200" rx="110" ry="36" transform="rotate(-18 200 200)" />
        <ellipse cx="200" cy="200" rx="75" ry="22" transform="rotate(-18 200 200)" />
      </g>
      <circle cx="200" cy="200" r="196" fill="none" stroke="var(--color-gold-500)" strokeWidth="0.75" opacity="0.3" />
    </svg>
  );
}
