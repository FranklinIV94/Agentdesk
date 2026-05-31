import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentdesk — AI Workflow Automation for Small Business",
  description:
    "Stop doing repetitive work. Agentdesk embeds AI agents into your business workflows — invoices, intake, scheduling — with a human approval checkpoint. 80% automation, 99.9% reliability.",
  openGraph: {
    title: "Agentdesk — AI Workflow Automation",
    description: "AI agents that do the work. You approve the results.",
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
      <body>{children}</body>
    </html>
  );
}