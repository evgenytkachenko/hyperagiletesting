import { approvedTestimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialCard({ item }: { item: Testimonial }) {
  const attribution = [item.title, item.organization].filter(Boolean).join(", ");

  return (
    <li className="w-full md:w-[calc((100%-3rem)/3)]">
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

/**
 * Shared praise/testimonial grid used on both the homepage and /book.
 * Cards are centered as a group so the row still looks balanced when there
 * are fewer than three approved testimonials (see src/lib/testimonials.ts).
 */
export function PraiseSection() {
  return (
    <>
      <h2
        id="praise-heading"
        className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl"
      >
        Praise for Hyper-Agile Testing
      </h2>
      <ul className="mt-10 flex flex-wrap justify-center gap-6">
        {approvedTestimonials.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
}
