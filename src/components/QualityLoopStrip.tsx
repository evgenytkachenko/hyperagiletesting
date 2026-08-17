import { loopActivities } from "@/lib/content";

/**
 * Compact scan-friendly rendering of the ten Hyper-Agile Quality Loop
 * activities. Vertical sequence on small screens; wraps into a connected
 * horizontal flow on wider screens. No animation, no forced circle.
 */
export function QualityLoopStrip() {
  return (
    <ol className="flex flex-col divide-y divide-paper-line rounded-lg border border-paper-line bg-white sm:flex-row sm:flex-wrap sm:divide-y-0">
      {loopActivities.map((activity, index) => (
        <li
          key={activity.order}
          className="flex items-center gap-3 px-4 py-3 sm:w-1/2 lg:w-1/5"
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-charcoal-900 text-xs font-semibold text-gold-400"
            aria-hidden="true"
          >
            {activity.order}
          </span>
          <span className="text-sm font-medium text-ink-900">
            {activity.name}
          </span>
          <span className="sr-only">
            {index < loopActivities.length - 1 ? ", then" : ", loops back to Clarify intent"}
          </span>
        </li>
      ))}
    </ol>
  );
}
