/**
 * Formspree configuration for the organizational-inquiry form on /contact.
 *
 * NEXT_PUBLIC_FORMSPREE_FORM_ID is a public build-time environment
 * variable (inlined into the static export, like any NEXT_PUBLIC_* var —
 * it is a public endpoint identifier, not a secret). See .env.example for
 * local setup and README.md for the GitHub Actions repository variable
 * this is sourced from in production builds.
 */

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export const formspree = {
  formId: formId || null,
  endpoint: formId ? `https://formspree.io/f/${formId}` : null,
  isConfigured: Boolean(formId),
} as const;
