/**
 * Google reCAPTCHA v3 (invisible) configuration for the /contact inquiry
 * form.
 *
 * The Site Key is public by design — Google's v3 widget ships it to every
 * page that renders the check, so unlike the Formspree form ID it doesn't
 * need to be env-configurable or kept out of source control. The
 * corresponding Secret Key is configured directly in Formspree's own
 * project settings, where Formspree verifies the `g-recaptcha-response`
 * field server-side; it must never appear in this repository or be sent
 * from the frontend.
 */
export const recaptcha = {
  siteKey: "6LdL9bQtAAAAAO4uzTQvUcSNaww4EfXCtezLoA13",
  action: "submit",
} as const;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Resolves once the grecaptcha script (loaded via next/script in
 * InquiryForm) is ready, then generates a fresh token for the configured
 * action. Per Google's guidance, tokens are short-lived — call this
 * immediately before submitting, not on mount.
 */
export async function getRecaptchaToken(): Promise<string> {
  if (!window.grecaptcha) {
    throw new Error("reCAPTCHA has not finished loading.");
  }
  const grecaptcha = window.grecaptcha;
  await new Promise<void>((resolve) => grecaptcha.ready(resolve));
  return grecaptcha.execute(recaptcha.siteKey, { action: recaptcha.action });
}
