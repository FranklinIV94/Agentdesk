import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks — Agentdesk",
  description: "We'll be in touch within 24 hours.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">We got it.</h1>
        <p className="text-[var(--text-muted)] mb-8">
          We'll review your workflow and get back to you within 24 hours with a plan to automate it. No spam, no pitch — just a concrete proposal.
        </p>
        <a href="/" className="px-6 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] transition-colors">
          Back to home
        </a>
      </div>
    </div>
  );
}