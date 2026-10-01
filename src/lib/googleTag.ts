import { siteConfig } from "./config";

/**
 * IANA time zones in the EEA, UK and Switzerland (plus Gibraltar and the
 * Crown Dependencies). The Google tag is never loaded for visitors whose
 * browser reports one of these zones.
 *
 * The site is a static export with no server, so the browser time zone is
 * the only location signal available without sending the visitor's IP to a
 * third-party lookup. It is approximate (VPNs, travellers, manually set
 * clocks), so the check fails closed: an unreadable zone also blocks the tag.
 */
export const blockedTimeZones = [
  // EU member states
  "Europe/Amsterdam", "Europe/Athens", "Europe/Berlin", "Europe/Bratislava",
  "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen",
  "Europe/Copenhagen", "Europe/Dublin", "Europe/Helsinki", "Europe/Lisbon",
  "Europe/Ljubljana", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta",
  "Europe/Mariehamn", "Europe/Nicosia", "Europe/Paris", "Europe/Prague",
  "Europe/Riga", "Europe/Rome", "Europe/Sofia", "Europe/Stockholm",
  "Europe/Tallinn", "Europe/Vienna", "Europe/Vilnius", "Europe/Warsaw",
  "Europe/Zagreb", "Asia/Nicosia", "Asia/Famagusta", "Africa/Ceuta",
  "Atlantic/Azores", "Atlantic/Canary", "Atlantic/Madeira",
  // EU outermost regions
  "America/Cayenne", "America/Guadeloupe", "America/Marigot",
  "America/Martinique", "Indian/Mayotte", "Indian/Reunion",
  // EEA (non-EU)
  "Atlantic/Reykjavik", "Europe/Oslo", "Arctic/Longyearbyen", "Europe/Vaduz",
  // Switzerland
  "Europe/Zurich",
  // UK, Gibraltar, Crown Dependencies
  "Europe/London", "Europe/Belfast", "Europe/Gibraltar", "Europe/Guernsey",
  "Europe/Isle_of_Man", "Europe/Jersey",
  // Legacy aliases some browsers still report
  "GB", "GB-Eire", "Eire", "Iceland", "Poland", "Portugal", "CET", "MET",
  "EET", "WET",
] as const;

/** Inline script: loads gtag.js only outside the blocked regions. */
export const googleTagLoader = `(function () {
  var tz;
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) {}
  if (!tz || ${JSON.stringify(blockedTimeZones)}.indexOf(tz) !== -1) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleTagId}";
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "${siteConfig.googleTagId}");
})();`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Ads conversion for a successful organizational-consulting inquiry. */
export const consultingInquiryConversion = "AW-18364813337/THFECOzvnNocEJmgg7VE";

/**
 * Records the consulting-inquiry conversion. `window.gtag` only exists when
 * googleTagLoader ran (i.e. outside the blocked regions), so this is a no-op
 * wherever the tag is skipped. Sends no form data to Google.
 */
export function trackConsultingInquiryConversion() {
  try {
    window.gtag?.("event", "conversion", {
      send_to: consultingInquiryConversion,
      value: 1.0,
      currency: "USD",
    });
  } catch {
    // Tracking must never affect the form's success state.
  }
}
