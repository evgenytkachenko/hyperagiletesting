/**
 * Centralized testimonial data. An entry is only ever rendered when it is
 * `status: "approved"` AND passes `isPublishable` below — pending entries
 * (incomplete attribution, no quote yet) stay in source as a record of
 * who has been asked, without ever reaching the page. To activate a
 * pending entry once a real quotation is approved, add the `quote` and
 * flip `status` to `"approved"`; no other change is required.
 */

export type TestimonialStatus = "approved" | "pending";

export type Testimonial = {
  status: TestimonialStatus;
  quote?: string;
  name: string;
  title?: string;
  organization?: string;
  profileUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    status: "approved",
    quote:
      "This is a great book—so many important things that need to be said now. The personal stories that illustrate every chapter really bring the message home.",
    name: "Dorothy Graham",
    title: "Award-Winning Software Testing Author",
    profileUrl: "https://www.linkedin.com/in/dorothygraham/",
  },
  {
    status: "approved",
    quote:
      "This book provides a timely framework for leaders navigating AI-enabled transformation—connecting the speed of modern delivery with the governance, quality discipline, and shared ownership required for sustainable change.",
    name: "Markus Schmitt",
    title: "BPE / PMO – Digital Finance Transformation",
    organization: "Siemens Healthineers",
    profileUrl: "https://www.linkedin.com/in/markusschmittnyc/",
  },
  {
    status: "pending",
    name: "Barys",
  },
];

/** A testimonial with everything required to publish it. */
type ApprovedTestimonial = Testimonial & {
  status: "approved";
  quote: string;
} & ({ title: string } | { organization: string });

/**
 * A testimonial is safe to render only when it is explicitly
 * `status: "approved"` AND carries a real quotation, a complete name, and
 * a professional attribution (title or organization). All four conditions
 * are required — `status` alone is not trusted, and neither is field
 * completeness alone, so a pending entry can never slip onto the page as
 * an empty or name-only card even if someone drafts quote text for it
 * without approving it.
 */
export function isPublishable(testimonial: Testimonial): testimonial is ApprovedTestimonial {
  return (
    testimonial.status === "approved" &&
    Boolean(testimonial.quote?.trim()) &&
    Boolean(testimonial.name?.trim()) &&
    Boolean(testimonial.title?.trim() || testimonial.organization?.trim())
  );
}

export const approvedTestimonials: ApprovedTestimonial[] = testimonials.filter(isPublishable);
