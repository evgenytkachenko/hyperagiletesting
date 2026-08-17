import { pillars } from "@/lib/content";

const accents = ["bg-gold-500", "bg-violet-500", "bg-blue-500", "bg-cyan-500"];

export function PillarGrid() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2">
      {pillars.map((pillar, index) => (
        <li
          key={pillar.name}
          className="relative overflow-hidden rounded-lg border border-paper-line bg-white p-6 shadow-sm"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 top-0 h-1 ${accents[index % accents.length]}`}
          />
          <span className="text-sm font-semibold text-ink-500">
            0{index + 1}
          </span>
          <h3 className="mt-2 font-serif text-xl font-semibold text-ink-900">
            {pillar.name}
          </h3>
          <p className="mt-3 text-ink-700 leading-relaxed">
            {pillar.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
