export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">A</div>
            <span className="text-lg font-semibold tracking-tight">agentdesk</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-[var(--text-muted)]">
            <a href="#how-it-works">How it works</a>
            <a href="#workflows">Workflows</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-light)] transition-colors">Get started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            Now accepting first clients
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your AI agent<br />
            <span className="text-[var(--accent)]">does the work.</span><br />
            You approve the results.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
            Agentdesk embeds AI agents directly into your business workflows — invoices, customer intake, scheduling — with a human checkpoint. 80% automation, 99.9% reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3.5 rounded-lg bg-[var(--accent)] text-white font-semibold text-lg hover:bg-[var(--accent-light)] transition-colors">
              Book a free workflow audit
            </a>
            <a href="#how-it-works" className="px-8 py-3.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] font-medium text-lg hover:border-[var(--text-muted)] transition-colors">
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            No setup fees for first 5 clients · Implementation in 7 days · Cancel anytime
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-[var(--text-muted)] mb-6">Built with technology trusted by</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[var(--text-muted)] text-lg font-medium">
            <span>OpenAI</span>
            <span>Anthropic</span>
            <span>AWS</span>
            <span>Stripe</span>
            <span>SEC EDGAR</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">You didn't start a business to do paperwork.</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { num: "4.8h", label: "average hours small business owners spend on admin per day" },
              { num: "$29", label: "cost per hour of manual data entry that could be automated" },
              { num: "23%", label: "of invoices contain errors when processed manually" },
              { num: "67%", label: "of customer leads go cold before a human responds" },
            ].map((stat) => (
              <div key={stat.num} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="text-4xl font-bold text-[var(--accent)] mb-2">{stat.num}</div>
                <div className="text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps. Seven days. Zero risk.</h2>
            <p className="text-[var(--text-muted)] text-lg">We don't sell software. We embed an AI agent into your actual workflows.</p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Workflow Audit",
                desc: "We map your repetitive tasks — invoices, intake forms, scheduling, follow-ups — and identify what an agent can automate. Free. Takes 30 minutes.",
                icon: "📋"
              },
              {
                step: "02",
                title: "Agent Deployment",
                desc: "We build and deploy your AI agent with human-in-the-loop checkpoints. The agent does 80% of the work. You approve the final 20%. Goes live in 7 days.",
                icon: "⚡"
              },
              {
                step: "03",
                title: "Ongoing Optimization",
                desc: "Your agent learns from every approval and correction. Accuracy improves weekly. We handle all updates, monitoring, and scaling. You just approve and go.",
                icon: "📈"
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                <div className="text-3xl">{s.icon}</div>
                <div>
                  <div className="text-xs text-[var(--accent)] font-mono mb-1">STEP {s.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-[var(--text-muted)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section id="workflows" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the work you actually do.</h2>
            <p className="text-[var(--text-muted)] text-lg">Every workflow includes human approval. The agent does the heavy lifting — you approve the output.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Invoice Processing",
                desc: "Agent reads incoming invoices, extracts line items, matches to POs, flags discrepancies. You approve before payment.",
                tags: ["AP/AR", "Matching", "Discrepancy flagging"],
              },
              {
                title: "Customer Intake",
                desc: "Agent handles new customer forms, verifies information, creates records in your CRM, sends confirmation. You review edge cases.",
                tags: ["CRM sync", "Verification", "Auto-response"],
              },
              {
                title: "Scheduling & Follow-up",
                desc: "Agent manages appointment booking, sends reminders, follows up on no-shows, reschedules. You handle the exceptions.",
                tags: ["Calendar sync", "Reminders", "Rescheduling"],
              },
            ].map((w) => (
              <div key={w.title} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors">
                <h3 className="text-lg font-semibold mb-3">{w.title}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">{w.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-[var(--bg)] text-xs text-[var(--text-muted)]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--text-muted)] mt-8 text-sm">
            Need a custom workflow? <a href="#contact" className="text-[var(--accent-light)]">Tell us what you do repeatedly — we'll automate it.</a>
          </p>
        </div>
      </section>

      {/* The human-in-the-loop difference */}
      <section className="py-24 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">95% accuracy sounds great.<br /><span className="text-[var(--accent)]">Until you do the math.</span></h2>
              <p className="text-[var(--text-muted)] mb-6">
                1,000 operations at 95% accuracy = 50 errors. That's 50 wrong invoices, 50 missed leads, 50 botched appointments. Per day.
              </p>
              <p className="text-[var(--text-muted)]">
                Human-in-the-loop turns 95% into 99.9%+. The agent catches the pattern, you catch the exception. Every output has your stamp on it.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Manual process", value: "0%", bar: "5%", note: "0% automation" },
                { label: "Full AI autonomy", value: "95%", bar: "95%", note: "50 errors per 1,000 ops" },
                { label: "Agentdesk (HITL)", value: "99.9%", bar: "99%", note: "<1 error per 1,000 ops" },
              ].map((row) => (
                <div key={row.label} className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{row.label}</span>
                    <span className="text-[var(--accent)] font-mono text-sm">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: row.bar }} />
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">{row.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. Real ROI.</h2>
            <p className="text-[var(--text-muted)] text-lg">Implementation pays for itself in the first month through time saved.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/mo",
                setup: "$2,500 implementation",
                desc: "1 workflow, 1 AI agent",
                features: ["1 automated workflow", "1 AI agent", "Human approval dashboard", "Email support", "Weekly accuracy reports"],
                cta: "Start with Starter",
                highlight: false,
              },
              {
                name: "Professional",
                price: "$999",
                period: "/mo",
                setup: "$5,000 implementation",
                desc: "3 workflows, 2 agents, priority",
                features: ["3 automated workflows", "2 AI agents", "Priority human review queue", "Slack/Discord integration", "Priority support", "Daily accuracy reports", "Custom workflow design"],
                cta: "Go Professional",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "$1,999",
                period: "/mo",
                setup: "$8,000 implementation",
                desc: "Unlimited workflows, dedicated agent",
                features: ["Unlimited workflows", "Dedicated AI agent", "24/7 monitoring & approval", "All integrations", "Dedicated account manager", "Custom SLA", "White-label option"],
                cta: "Contact for Enterprise",
                highlight: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`p-6 rounded-xl border ${plan.highlight ? "border-[var(--accent)] bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]"}`}>
                {plan.highlight && <div className="text-xs font-semibold text-[var(--accent)] mb-2 uppercase tracking-wider">Most popular</div>}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-[var(--text-muted)]">{plan.period}</span>
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-4">{plan.setup} · {plan.desc}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--green)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-2.5 rounded-lg font-medium transition-colors ${plan.highlight ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]" : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)]"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[var(--surface)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions people ask before they sign up.</h2>
          <div className="space-y-6">
            {[
              { q: "What does \"human-in-the-loop\" actually mean?", a: "The AI agent handles the repetitive 80% — reading invoices, filling forms, scheduling appointments. Before anything goes out, you (or someone on your team) approves it. The agent never acts alone. You always have the final stamp." },
              { q: "How fast can I go live?", a: "7 business days from workflow audit to live deployment. The audit takes 30 minutes. Most of the week is us building, testing, and connecting your systems." },
              { q: "What if the agent makes a mistake?", a: "It won't — because you approve every output. The agent drafts, you approve. If it's wrong, you reject and it learns. Over time, the agent gets so accurate you'll wonder why you ever did it manually." },
              { q: "Do I need to change my existing tools?", a: "No. Agentdesk works with what you already use — email, Google Sheets, QuickBooks, your CRM. We connect to your tools via API. If your tool doesn't have an API, we build one." },
              { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. We don't store your data after processing. Your agent runs in an isolated environment. SOC 2 compliance roadmap available on request." },
              { q: "What happens after 60 days?", a: "Your agent keeps running. The monthly retainer covers monitoring, updates, and optimization. You can cancel anytime. No lock-in." },
            ].map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[var(--text-muted)] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free workflow audit.<br />No commitment.</h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Tell us what you spend too much time on. We'll show you exactly what an AI agent can automate — and what it can't. 30 minutes, zero risk.
          </p>
          <form className="space-y-4 text-left" action="https://formsubmit.co/hello@simplifyingbusinesses.com" method="POST">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Business name</label>
                <input type="text" name="business" className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] focus:outline-none" placeholder="Your business" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-[var(--text-muted)] mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] focus:outline-none" placeholder="you@business.com" />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-muted)] mb-1">What repetitive task takes up most of your time?</label>
              <textarea name="task" rows={3} className="w-full px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] focus:outline-none" placeholder="e.g., processing invoices, responding to new leads, scheduling appointments..." />
            </div>
            <input type="hidden" name="_subject" value="Agentdesk — New Workflow Audit Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://agentdesk.simplifyingbusinesses.com/thanks" />
            <button type="submit" className="w-full py-3.5 rounded-lg bg-[var(--accent)] text-white font-semibold text-lg hover:bg-[var(--accent-light)] transition-colors">
              Book my free workflow audit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="font-semibold">agentdesk</span>
            <span className="text-[var(--text-muted)] text-sm">by Prospyr 305</span>
          </div>
          <div className="text-sm text-[var(--text-muted)]">
            © 2026 Prospyr 305 · All Lines Business Solutions · <a href="https://simplifyingbusinesses.com" className="hover:text-white">simplifyingbusinesses.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}