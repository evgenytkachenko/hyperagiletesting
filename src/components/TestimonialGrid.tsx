import { approvedTestimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialCard({ item }: { item: Testimonial }) {
  const attribution = [item.title, item.organization].filter(Boolean).join(", ");

  return (
    <figure className="h-full rounded-lg border border-paper-line bg-white p-6">
      <blockquote className="leading-relaxed text-ink-700">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4">
        {item.profileUrl ? (
          <a
            href={item.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink-900 hover:text-gold-600"
          >
            {item.name}
          </a>
        ) : (
          <p className="text-sm font-semibold text-ink-900">{item.name}</p>
        )}
        {attribution && <p className="text-sm text-ink-500">{attribution}</p>}
        {item.descriptor && <p className="text-xs text-ink-500">{item.descriptor}</p>}
      </figcaption>
    </figure>
  );
}

/**
 * Renders only publishable testimonials (see src/lib/testimonials.ts).
 * Layout adapts to how many are approved: a single entry gets one
 * centered, max-width card rather than sitting alone in a grid built for
 * three; two or three entries fill out a proper grid.
 */
export function TestimonialGrid() {
  const items = approvedTestimonials;

  if (items.length === 0) return null;

  if (items.length === 1) {
    return (
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-xl">
          <TestimonialCard item={items[0]} />
        </div>
      </div>
    );
  }

  return (
    <ul
      className={`mt-10 grid gap-6 ${
        items.length === 2
          ? "mx-auto max-w-3xl sm:grid-cols-2"
          : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <li key={item.name}>
          <TestimonialCard item={item} />
        </li>
      ))}
    </ul>
  );
}
