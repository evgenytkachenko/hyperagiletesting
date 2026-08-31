"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    } finally {
      setTimeout(() => setState("idle"), 4000);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-mist-400 px-6 py-3 text-base font-semibold text-ink-900 transition-colors duration-150 hover:border-gold-600 hover:text-gold-700"
      >
        Copy Email Address
      </button>
      <p role="status" aria-live="polite" className="mt-2 min-h-5 text-sm text-ink-500">
        {state === "copied" && "Email address copied"}
        {state === "failed" && `Couldn’t copy automatically — please select and copy ${email} manually.`}
      </p>
    </div>
  );
}
