import { loopActivities } from "@/lib/content";

const accents = ["bg-gold-500", "bg-violet-500", "bg-blue-500", "bg-cyan-500"];

export function QualityLoopDetail() {
  return (
    <div>
      <ol className="grid gap-5 sm:grid-cols-2">
        {loopActivities.map((activity) => (
          <li
            key={activity.order}
            className="relative overflow-hidden rounded-lg border border-paper-line bg-white p-6"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-1 ${accents[(activity.order - 1) % accents.length]}`}
            />
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-semibold text-ink-500">
                {String(activity.order).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                {activity.name}
              </h3>
            </div>
            <p className="mt-3 leading-relaxed text-ink-700">
              {activity.description}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-8 rounded-lg border border-gold-500/40 bg-gold-300/10 p-5 text-ink-900">
        <span className="font-semibold">The loop closes here:</span> learning
        captured in production feeds back into activity 1, Clarify intent, so
        the next round of work starts with more knowledge than the last.
      </p>
    </div>
  );
}
