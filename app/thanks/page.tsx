import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks — Prospyr 305",
  description: "We'll be in touch within 24 hours.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 grid-bg">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Request received.</h1>
        <p className="text-slate-400 mb-8">
          We&apos;ll review your workflow and reach out within 24 hours with a concrete plan. No pitch deck — just what we&apos;d automate and how.
        </p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-500 transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </a>
      </div>
    </div>
  );
}