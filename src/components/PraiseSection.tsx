import { approvedTestimonials, type Testimonial } from "@/lib/testimonials";

const GRID_SLOTS = 3;

function TestimonialCard({ item }: { item: Testimonial }) {
  const attribution = [item.title, item.organization].filter(Boolean).join(", ");

  return (
    <li>
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
        </figcaption>
      </figure>
    </li>
  );
}

function PlaceholderCard() {
  return (
    <li>
      <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-paper-line bg-paper-dim/60 p-6 text-center">
        <p className="text-sm font-medium text-ink-500">More praise coming soon</p>
      </div>
    </li>
  );
}

/**
 * Shared praise/testimonial grid used on both the homepage and /book. Always
 * renders GRID_SLOTS cells, filling any beyond the approved testimonials
 * with a clearly-marked placeholder so the grid holds its shape as more
 * testimonials are approved (see src/lib/testimonials.ts).
 */
export function PraiseSection() {
  const placeholderCount = Math.max(0, GRID_SLOTS - approvedTestimonials.length);

  return (
    <>
      <h2
        id="praise-heading"
        className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl"
      >
        Praise for Hyper-Agile Testing
      </h2>
      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {approvedTestimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <PlaceholderCard key={`praise-placeholder-${index}`} />
        ))}
      </ul>
    </>
  );
}
