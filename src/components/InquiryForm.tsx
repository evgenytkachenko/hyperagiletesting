"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { formspree } from "@/lib/formspree";
import { carunel } from "@/lib/config";
import {
  inquiryTypeOptions,
  timeframeOptions,
  topicSlugToInquiryType,
  TopicSlug,
} from "@/lib/inquiry";

type Status = "idle" | "submitting" | "success" | "invalid" | "error";

const REQUIRED_FIELDS = ["name", "email", "organization", "topic", "message"] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];

const inputClassName =
  "w-full rounded-lg border border-paper-line bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500";
const invalidClassName = "border-red-400";
const labelClassName = "block text-sm font-semibold text-ink-900";
const errorClassName = "mt-2 text-sm text-red-700";

function validateField(name: RequiredField, value: string): string | null {
  const trimmed = value.trim();
  switch (name) {
    case "name":
      return trimmed ? null : "Please enter your full name.";
    case "email":
      if (!trimmed) return "Please enter your work email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
        ? null
        : "Please enter a valid email address.";
    case "organization":
      return trimmed ? null : "Please enter your organization.";
    case "topic":
      return trimmed ? null : "Please select what you’d like to discuss.";
    case "message":
      return trimmed
        ? null
        : "Please describe the challenge or opportunity you’d like to discuss.";
  }
}

function Field({
  label,
  name,
  type,
  autoComplete,
  maxLength,
  error,
  onInput,
}: {
  label: string;
  name: RequiredField;
  type: "text" | "email";
  autoComplete: string;
  maxLength: number;
  error?: string;
  onInput: () => void;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required
        aria-required="true"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        onInput={onInput}
        className={`mt-2 ${inputClassName} ${error ? invalidClassName : ""}`}
      />
      {error && (
        <p id={errorId} className={errorClassName}>
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  value,
  onChange,
  error,
  includeBlank,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  includeBlank?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`mt-2 ${inputClassName} ${error ? invalidClassName : ""}`}
      >
        {(includeBlank || !value) && <option value="">Select an option</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className={errorClassName}>
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  label,
  name,
  rows,
  maxLength,
  error,
  onInput,
  helpText,
}: {
  label: string;
  name: RequiredField;
  rows: number;
  maxLength: number;
  error?: string;
  onInput: () => void;
  helpText?: ReactNode;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        maxLength={maxLength}
        required
        aria-required="true"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        onInput={onInput}
        className={`mt-2 ${inputClassName} ${error ? invalidClassName : ""}`}
      />
      {error && (
        <p id={errorId} className={errorClassName}>
          {error}
        </p>
      )}
      {helpText && <p className="mt-2 text-sm text-ink-500">{helpText}</p>}
    </div>
  );
}

export function InquiryForm() {
  const [topic, setTopic] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reads the URL only on mount, on the client, to preselect a topic
    // passed in by a linking CTA — there is no way to know this during
    // static prerendering, so syncing it in on mount is the correct use
    // of an effect here (subscribing to external browser state).
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("topic");
    if (slug && Object.prototype.hasOwnProperty.call(topicSlugToInquiryType, slug)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTopic(topicSlugToInquiryType[slug as TopicSlug]);
    }
  }, []);

  useEffect(() => {
    if (!formspree.isConfigured && process.env.NODE_ENV !== "production") {
      console.warn(
        "[HyperAgileTesting] NEXT_PUBLIC_FORMSPREE_FORM_ID is not set — the inquiry form will show the direct-email fallback instead of submitting. See .env.example."
      );
    }
  }, []);

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  if (!formspree.isConfigured) {
    return (
      <div className="rounded-lg border border-paper-line bg-white p-6">
        {process.env.NODE_ENV !== "production" && (
          <p className="mb-4 rounded-md border border-dashed border-gold-600 bg-gold-300/10 p-3 text-sm text-ink-700">
            <strong>Development notice:</strong> set{" "}
            <code className="font-mono">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> in a
            local <code className="font-mono">.env.local</code> to preview the
            live form. See <code className="font-mono">.env.example</code>.
          </p>
        )}
        <p className="leading-relaxed text-ink-700">
          The inquiry form isn&rsquo;t available right now. Please reach out
          directly at{" "}
          <a
            href={`mailto:${carunel.contactEmail}`}
            className="underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
          >
            {carunel.contactEmail}
          </a>{" "}
          and I&rsquo;ll follow up personally.
        </p>
      </div>
    );
  }

  function clearError(name: RequiredField) {
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const errors: Partial<Record<RequiredField, string>> = {};
    for (const field of REQUIRED_FIELDS) {
      const message = validateField(field, String(data.get(field) ?? ""));
      if (message) errors[field] = message;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("invalid");
      const firstInvalid = REQUIRED_FIELDS.find((field) => errors[field]);
      if (firstInvalid) {
        (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      }
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const response = await fetch(formspree.endpoint as string, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTopic("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="rounded-lg border border-gold-500/40 bg-gold-300/10 p-6 text-ink-900"
      >
        <p className="font-semibold">Thank you.</p>
        <p className="mt-2 leading-relaxed">
          Your inquiry has been received, and you can expect a response
          within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <div
          ref={statusRef}
          role="alert"
          tabIndex={-1}
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          The inquiry could not be sent. Please try again or email{" "}
          <a href={`mailto:${carunel.contactEmail}`} className="underline">
            {carunel.contactEmail}
          </a>{" "}
          directly.
        </div>
      )}

      <Field
        label="Full name"
        name="name"
        type="text"
        autoComplete="name"
        maxLength={100}
        error={fieldErrors.name}
        onInput={() => clearError("name")}
      />
      <Field
        label="Work email"
        name="email"
        type="email"
        autoComplete="email"
        maxLength={254}
        error={fieldErrors.email}
        onInput={() => clearError("email")}
      />
      <Field
        label="Organization"
        name="organization"
        type="text"
        autoComplete="organization"
        maxLength={150}
        error={fieldErrors.organization}
        onInput={() => clearError("organization")}
      />
      <SelectField
        label="What would you like to discuss?"
        name="topic"
        required
        value={topic}
        onChange={(value) => {
          setTopic(value);
          clearError("topic");
        }}
        options={inquiryTypeOptions}
        error={fieldErrors.topic}
      />
      <TextareaField
        label="What challenge or opportunity would you like to discuss?"
        name="message"
        rows={6}
        maxLength={4000}
        error={fieldErrors.message}
        onInput={() => clearError("message")}
        helpText="Please do not include confidential, proprietary, or sensitive information."
      />
      <SelectField
        label="Preferred timeframe"
        name="timeframe"
        options={timeframeOptions}
        includeBlank
      />

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-base font-semibold text-charcoal-950 transition-colors duration-150 hover:bg-gold-400 focus-visible:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
        </button>
      </div>

      <p className="text-sm text-ink-500">
        By submitting this form, you acknowledge that Carunel LLC will use
        the information provided to respond to your inquiry. See our{" "}
        <Link href="/privacy" className="underline hover:text-gold-600">
          Privacy Policy
        </Link>
        .
      </p>

      <div aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your inquiry…" : ""}
      </div>
    </form>
  );
}
