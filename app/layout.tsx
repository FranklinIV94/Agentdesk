import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prospyr 305 — AI Workflow Automation for Business",
  description: "We embed AI agents into your repetitive workflows — invoices, intake, scheduling — with human checkpoints. 80% automation, 99.9% reliability. By Prospyr 305.",
  openGraph: {
    title: "Prospyr 305 — AI Workflow Automation",
    description: "Your AI agent does the work. You approve the results.",
    url: "https://prospyr305.simplifyingbusinesses.com",
    siteName: "Prospyr 305",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}