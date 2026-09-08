import { approvedTestimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialCard({ item }: { item: Testimonial }) {
  const attribution = [item.title, item.organization].filter(Boolean).join(", ");

  return (
    <li className="h-full">
      <figure className="flex h-full flex-col rounded-lg border border-paper-line bg-white p-6 text-left">
        <blockquote className="flex-1 leading-relaxed text-ink-700">
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
        </figcaption>
      </figure>
    </li>
  );
}

/**
 * Shared praise/testimonial grid used on both the homepage and /book. A
 * narrow two-column layout (stacking on mobile) with equal-height cards
 * so author attribution lines up along the bottom (see
 * src/lib/testimonials.ts).
 */
export function PraiseSection() {
  return (
    <>
      <h2
        id="praise-heading"
        className="text-center font-serif text-3xl font-semibold text-ink-900 sm:text-4xl"
      >
        Praise for Hyper-Agile Testing
      </h2>
      <ul className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {approvedTestimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
}
