import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prospyr 305 — AI Workflow Automation for Business",
  description: "We embed AI agents into your repetitive workflows — invoices, intake, scheduling — with human checkpoints. 80% automation, 99.9% reliability.",
  openGraph: {
    title: "Prospyr 305 — AI Workflow Automation",
    description: "Your AI agent does the work. You approve the results.",
    url: "https://prospyr305.simplifyingbusinesses.com",
    siteName: "Prospyr 305",
    type: "website",
  },
};

const WORKFLOWS = [
  {
    title: "Invoice Processing",
    desc: "Agent extracts line items, matches to POs, flags discrepancies, routes for approval. You sign off before payment.",
    tags: ["AP/AR", "PO matching", "Discrepancy flagging"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Customer Intake",
    desc: "Agent handles new customer forms, verifies info, creates CRM records, sends confirmations. You handle edge cases.",
    tags: ["CRM sync", "Verification", "Auto-response"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.635-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Scheduling & Follow-up",
    desc: "Agent books appointments, sends reminders, follows up on no-shows, reschedules automatically. You handle the exceptions.",
    tags: ["Calendar sync", "Reminders", "Auto-reschedule"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Document Automation",
    desc: "Agent generates contracts, proposals, reports from templates. Pulls data from your systems. You review and send.",
    tags: ["Templates", "Data merge", "E-signatures"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h4.5m-4.5 0v-4.5m4.5 4.5v-4.5m0 0h4.5m-4.5 0V8.25m4.5 4.5V8.25" />
      </svg>
    ),
  },
  {
    title: "Lead Qualification",
    desc: "Agent responds to inbound leads within 60 seconds, asks qualifying questions, books calls. You talk to warm leads.",
    tags: ["Instant response", "Scoring", "Call booking"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v.375m-9 0h9" />
      </svg>
    ),
  },
  {
    title: "Financial Analysis",
    desc: "Agent pulls SEC filings, runs forensic scores (Beneish, Altman Z, Piotroski), generates reports. You interpret and advise.",
    tags: ["SEC EDGAR", "Forensic scores", "Reporting"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Workflow Audit",
    desc: "We map your repetitive tasks and identify what an agent can automate. Free. Takes 30 minutes.",
    detail: "You show us your day. We find the 4-8 hours of admin that an agent can handle.",
  },
  {
    num: "02",
    title: "Agent Deployment",
    desc: "We build and deploy your AI agent with human-in-the-loop checkpoints. Goes live in 7 days.",
    detail: "The agent does 80% of the work. You approve the final 20%. Every output has your stamp.",
  },
  {
    num: "03",
    title: "Ongoing Optimization",
    desc: "Your agent learns from every approval. Accuracy improves weekly. We handle all updates and scaling.",
    detail: "We monitor, refine, and expand. You just approve and go.",
  },
];

const STATS = [
  { value: "4.8h", label: "hours/day small business owners spend on admin", accent: false },
  { value: "23%", label: "of manually processed invoices contain errors", accent: false },
  { value: "67%", label: "of leads go cold before a human responds", accent: false },
  { value: "7", label: "days from audit to live deployment", accent: true },
];

const PRICING = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    setup: "$2,500 one-time setup",
    desc: "1 workflow, 1 agent, email support",
    features: [
      "1 automated workflow",
      "1 AI agent",
      "Human approval dashboard",
      "Weekly accuracy reports",
      "Email support",
      "Cancel anytime",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "/mo",
    setup: "$5,000 one-time setup",
    desc: "3 workflows, 2 agents, priority support",
    features: [
      "3 automated workflows",
      "2 AI agents",
      "Priority review queue",
      "Slack/Discord integration",
      "Daily accuracy reports",
      "Custom workflow design",
      "Priority support",
    ],
    cta: "Go Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$1,999",
    period: "/mo",
    setup: "$8,000 one-time setup",
    desc: "Unlimited workflows, dedicated agent, SLA",
    features: [
      "Unlimited workflows",
      "Dedicated AI agent",
      "24/7 monitoring & approval",
      "All integrations",
      "Custom SLA",
      "Dedicated account manager",
      "White-label option",
    ],
    cta: "Contact for Enterprise",
    highlight: false,
  },
];

const FAQS = [
  { q: "What does \"human-in-the-loop\" mean in practice?", a: "The AI agent handles the repetitive 80% — reading invoices, filling forms, scheduling. Before anything goes out, you (or someone on your team) approves it. The agent never acts alone. You always have the final stamp." },
  { q: "How fast can I go live?", a: "7 business days from workflow audit to live deployment. The audit takes 30 minutes. Most of the week is building, testing, and connecting your systems." },
  { q: "What if the agent makes a mistake?", a: "It won't reach your customers — because you approve every output. If a draft looks wrong, you reject it and the agent learns. Over time, corrections become rare." },
  { q: "Do I need to change my existing tools?", a: "No. We connect to what you already use — email, Google Workspace, QuickBooks, your CRM. If a tool doesn't have an API, we build the integration." },
  { q: "Is my data secure?", a: "All data encrypted in transit and at rest. Your agent runs in an isolated environment. We don't store your data after processing. SOC 2 roadmap available on request." },
  { q: "Why Prospyr 305 and not a chatbot?", a: "Chatbots answer questions. Our agents do work — they read documents, fill forms, send emails, update databases — and they do it 24/7 with human checkpoints. This is automation, not conversation." },
];

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight">Prospyr 305</span>
              <span className="text-[10px] text-slate-500 ml-2 uppercase tracking-widest">AI Division</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#workflows" className="hover:text-white transition-colors">Workflows</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="ml-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors">Book audit</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting first 5 clients — waived setup fee
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up animate-fade-up-delay-1">
            Your business runs on<br />
            <span className="text-gradient">repetitive work.</span><br />
            <span className="text-slate-300">An agent can do it.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-up animate-fade-up-delay-2">
            Prospyr 305 embeds AI agents into your workflows — invoices, intake, scheduling, follow-ups — with a human checkpoint on every output. 80% automation. 99.9% reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-delay-3">
            <a href="#contact" className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-colors glow-ring">
              Book a free workflow audit
            </a>
            <a href="#how-it-works" className="px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-medium text-lg hover:border-slate-500 transition-colors">
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 animate-fade-up animate-fade-up-delay-4">
            By <a href="https://simplifyingbusinesses.com" className="hover:text-slate-300 transition-colors">Prospyr 305</a> · AI Innovation & Implementation · All Lines Business Solutions
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.value} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/50 text-center">
                <div className={`text-3xl font-bold mb-1 ${s.accent ? "text-blue-400" : "text-white"}`}>{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps. Seven days. Zero risk.</h2>
            <p className="text-slate-400 text-lg">We don't sell software. We embed an agent into your actual workflows.</p>
          </div>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-mono text-sm font-bold">{s.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-slate-400 mb-2">{s.desc}</p>
                    <p className="text-sm text-slate-500">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The difference */}
      <section className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Why HITL</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                95% accuracy<br />sounds great.<br />
                <span className="text-blue-400">Until you do the math.</span>
              </h2>
              <p className="text-slate-400 mb-4">
                1,000 operations at 95% accuracy = 50 errors. That's 50 wrong invoices, 50 missed leads, 50 botched appointments. <strong className="text-white">Per day.</strong>
              </p>
              <p className="text-slate-400">
                Human-in-the-loop turns 95% into 99.9%+. The agent catches the pattern, you catch the exception. Every output has your stamp.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Manual process", pct: "0%", bar: "5%", sub: "0% automation — you do everything", color: "bg-slate-600" },
                { label: "Full AI autonomy", pct: "95%", bar: "95%", sub: "50 errors per 1,000 operations", color: "bg-amber-500" },
                { label: "Prospyr 305 (HITL)", pct: "99.9%", bar: "99%", sub: "<1 error per 1,000 operations", color: "bg-blue-500" },
              ].map((row) => (
                <div key={row.label} className="p-5 rounded-xl border border-slate-800/50 bg-slate-950/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-sm">{row.label}</span>
                    <span className="text-blue-400 font-mono text-sm font-semibold">{row.pct}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className={`h-full rounded-full ${row.color}`} style={{ width: row.bar }} />
                  </div>
                  <div className="text-xs text-slate-500 mt-2">{row.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the work you actually do.</h2>
            <p className="text-slate-400 text-lg">Every workflow includes human approval. The agent does the heavy lifting — you approve the output.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOWS.map((w) => (
              <div key={w.title} className="p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-blue-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600/20 transition-colors">
                  {w.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{w.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800/50 text-[11px] text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8 text-sm">
            Need a custom workflow? <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">Tell us what you do repeatedly — we&apos;ll automate it.</a>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-y border-slate-800/50 bg-slate-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Pricing</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. Real ROI.</h2>
            <p className="text-slate-400 text-lg">Implementation pays for itself in month one through time saved.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {PRICING.map((plan) => (
              <div key={plan.name} className={`p-6 rounded-2xl border ${plan.highlight ? "border-blue-500/50 bg-slate-900/80 glow-ring" : "border-slate-800/50 bg-slate-900/30"}`}>
                {plan.highlight && (
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">Most popular</div>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <div className="text-sm text-slate-500 mb-5">{plan.setup}</div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-2.5 rounded-xl font-medium transition-colors ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-500" : "border border-slate-700 text-slate-400 hover:border-slate-500"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-6 text-sm">
            First 5 clients get setup fees waived · Cancel anytime · No lock-in
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-3xl font-bold">Questions people ask before they sign up.</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group p-5 rounded-xl border border-slate-800/50 bg-slate-900/30 hover:border-slate-700/50 transition-colors">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-slate-800/50 bg-slate-900/20">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Get started</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free workflow audit.</h2>
            <p className="text-slate-400 text-lg">
              Tell us what you spend too much time on. We&apos;ll show you exactly what an agent can automate — and what it can&apos;t. 30 minutes, zero commitment.
            </p>
          </div>
          <form className="space-y-4" action="https://formsubmit.co/hello@simplifyingbusinesses.com" method="POST">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5">Business</label>
                <input type="text" name="business" className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none transition-colors" placeholder="Business name" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none transition-colors" placeholder="you@business.com" />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">What repetitive task takes up most of your time?</label>
              <textarea name="task" rows={3} className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none transition-colors" placeholder="e.g., processing invoices, responding to leads, scheduling appointments..." />
            </div>
            <input type="hidden" name="_subject" value="Prospyr 305 — New Workflow Audit Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://prospyr305.simplifyingbusinesses.com/thanks" />
            <button type="submit" className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition-colors glow-ring">
              Book my free workflow audit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <span className="font-semibold text-sm">Prospyr 305</span>
            <span className="text-slate-500 text-xs">AI Division</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="https://simplifyingbusinesses.com" className="hover:text-slate-300 transition-colors">All Lines Business Solutions</a>
            <span>·</span>
            <a href="https://control.simplifyingbusinesses.com" className="hover:text-slate-300 transition-colors">Dashboard</a>
            <span>·</span>
            <span>© 2026 Prospyr Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}