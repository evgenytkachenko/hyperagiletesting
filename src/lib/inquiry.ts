/**
 * Central definitions for the /contact professional-inquiry form: the
 * inquiry-type and timeframe select options, the topic query-param
 * allowlist used to preselect an inquiry type from a linking CTA, and a
 * shared helper for building links to the form.
 */

export const inquiryTypeOptions = [
  "Engineering leadership opportunity",
  "Speaking engagement",
  "Book or media inquiry",
  "Other",
] as const;

export const timeframeOptions = [
  "Exploring options",
  "Within the next three months",
  "Three to six months",
  "More than six months",
  "Not sure yet",
] as const;

export type TopicSlug =
  | "leadership-opportunity"
  | "speaking"
  | "book-media";

/**
 * Allowlist mapping a `?topic=` query-string value to the inquiry-type
 * select option it preselects. Unknown values are ignored by the caller
 * (see InquiryForm) rather than falling back to a guess.
 */
export const topicSlugToInquiryType: Record<TopicSlug, (typeof inquiryTypeOptions)[number]> = {
  "leadership-opportunity": "Engineering leadership opportunity",
  speaking: "Speaking engagement",
  "book-media": "Book or media inquiry",
};

/** Builds a link to the inquiry form on /contact, optionally preselecting a topic. */
export function contactFormUrl(topic?: TopicSlug): string {
  return topic ? `/contact?topic=${topic}#inquiry-form` : `/contact#inquiry-form`;
}
