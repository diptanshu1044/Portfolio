"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(
          json.error ??
            "Something went wrong. Please email me directly or try again.",
        );
        return;
      }

      setStatus("success");
      setMessage(json.message ?? "Message sent — I’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `Network error. Reach me at ${site.email} or try again in a moment.`,
      );
    }
  }

  const fieldClass =
    "focus-ring w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-ink outline-none placeholder:text-ink-soft transition-colors hover:border-line-strong focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-bg/70 p-5 md:p-8" noValidate>
      <div className="mb-7 flex items-center justify-between border-b border-line pb-5">
        <p className="font-mono text-xs uppercase tracking-[.16em] text-ink-muted">Start a conversation</p>
        <span className="h-2 w-2 rounded-full bg-accent" />
      </div>
      <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${fieldClass} mt-2`}
            placeholder="Your name"
            disabled={status === "loading"}
          />
        </label>
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${fieldClass} mt-2`}
            placeholder="you@example.com"
            disabled={status === "loading"}
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          Subject
        </span>
        <input
          name="subject"
          type="text"
          required
          className={`${fieldClass} mt-2`}
          placeholder="What are we talking about?"
          disabled={status === "loading"}
        />
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} mt-2 resize-y`}
          placeholder="Tell me about the role, project, or idea."
          disabled={status === "loading"}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message ↗"}
        </button>
        {message && (
          <p
            role="status"
            className={`text-sm ${status === "success" ? "text-accent" : "text-ink-muted"}`}
          >
            {message}
          </p>
        )}
      </div>
      </div>
    </form>
  );
}
