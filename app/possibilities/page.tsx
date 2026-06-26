import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  Shield,
  Workflow,
  Scale,
  Globe,
  Timer,
  Eye,
  GitBranch,
  Brain,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What We Could Build — Prospyr 305 | Agentic Possibilities",
  description: "Not what’s been done. What’s possible. Autonomous client onboarding, self-healing infrastructure, compliance-as-code, multi-agent deal rooms, AI-native SaaS, speed-to-lead systems, and more. Every project is something we can ship.",
  alternates: { canonical: "https://prospyr305.com/possibilities" },
  openGraph: {
    title: "What We Could Build — Prospyr 305",
    description: "Not what’s been done. What’s possible. Pick a future, or describe your own.",
    url: "https://prospyr305.com/possibilities",
    siteName: "Prospyr 305",
    images: [{ url: "https://prospyr305.com/og-image.png", width: 1200, height: 630 }],
  },
};

const possibilities = [
  {
    title: "Autonomous Client Onboarding",
    desc: "An agent that receives a lead, researches their business, drafts a proposal, sends the first email, and schedules the intro call — before your morning coffee.",
    tech: ["Agent Workforce", "MCP Infrastructure", "Email Automation"],
    icon: Users,
    price: "From $5,000 + $500/mo",
    timeline: "2-3 weeks build",
  },
  {
    title: "Self-Healing Infrastructure",
    desc: "Agents monitoring your stack 24/7. When something breaks, they diagnose, patch, and verify — then post the incident report. You wake up to a resolution, not an alert.",
    tech: ["Monitoring Agent", "Adversarial Security", "Auto-Remediation"],
    icon: Shield,
    price: "From $4,000 + $500/mo",
    timeline: "1-2 weeks build",
  },
  {
    title: "Compliance-as-Code Platform",
    desc: "SOC 2, HIPAA, ISO 27001 — baked into your CI/CD pipeline. Every deploy is audited. Every change is checked. Compliance isn't a quarterly scramble, it's a constant state.",
    tech: ["Agent Governance", "CI/CD for Agents", "Adversarial Testing"],
    icon: Scale,
    price: "From $7,500 + $500/mo",
    timeline: "3-4 weeks build",
  },
  {
    title: "Multi-Agent Deal Room",
    desc: "Due diligence agents, financial modeling agents, and legal review agents working in parallel on an M&A deal. Each specialized. All coordinated. Human-in-the-loop at every gate.",
    tech: ["Agent Workforce", "MCP Infrastructure", "Governance Policy"],
    icon: Workflow,
    price: "From $10,000 + $500/mo",
    timeline: "4-6 weeks build",
  },
  {
    title: "AI-Native SaaS Product",
    desc: "Not AI bolted onto existing software. Built from the ground up with agents at the core — autonomous workflows, real-time decisions, zero manual overhead. The product IS the agent.",
    tech: ["Full Stack", "Agent Workforce", "MCP Infrastructure"],
    icon: Globe,
    price: "From $8,000 + $500/mo",
    timeline: "4-6 weeks build",
  },
  {
    title: "Your Own Agent Team",
    desc: "We build and deploy agents that become your operations team. Onboarding, billing, support, reporting — each agent specialized, all working together, 24/7, for a fraction of headcount cost.",
    tech: ["Agent Workforce", "Workflow Redesign", "MCP Infrastructure"],
    icon: Users,
    price: "From $6,000 + $500/mo",
    timeline: "3-4 weeks build",
  },
  {
    title: "Speed-to-Lead Agent",
    desc: "An agent that watches every inbound channel and responds to leads in under 60 seconds. Personalized, contextual, not auto-acknowledgments. 21x qualification rate. Setup in a week, ROI on day one.",
    tech: ["Speed-to-Lead", "Agent Workforce", "MCP Infrastructure"],
    icon: Timer,
    price: "From $2,500 + $250/mo",
    timeline: "1 week build",
  },
  {
    title: "Agent Governance Dashboard",
    desc: "Policy engine, zero-trust identity, tamper-evident audit logs, and a real-time dashboard showing exactly what every agent is doing, what it's allowed to do, and what it tried to do. Compliance without spreadsheets.",
    tech: ["Agent Governance", "Adversarial Security", "CI/CD for Agents"],
    icon: Eye,
    price: "From $5,000 + $500/mo",
    timeline: "2-3 weeks build",
  },
  {
    title: "Self-Improving Browser Skills",
    desc: "An agent that visits your competitor's site, your vendor portal, your internal tools — and writes itself a skill file. Next time, it's 6x faster and 6x cheaper. Your browser operations compound in value instead of repeating from scratch.",
    tech: ["Browser Intelligence", "Agent Workforce", "Skill Architecture"],
    icon: Sparkles,
    price: "From $3,500 + $500/mo",
    timeline: "1-2 weeks build",
  },
  {
    title: "Agent CI/CD Pipeline",
    desc: "Every agent version is immutable. Every promotion passes quality, safety, and performance gates. Blue/green deployments with instant rollback. Your agents ship like your code — because they are code.",
    tech: ["CI/CD for Agents", "Agent Governance", "Adversarial Testing"],
    icon: GitBranch,
    price: "From $4,500 + $500/mo",
    timeline: "2-3 weeks build",
  },
  {
    title: "Multi-Council Decision Engine",
    desc: "18 AI personas across multiple LLM providers deliberate your hardest decisions. Socrates destroys assumptions, Feynman rebuilds from first principles. Anti-groupthink built in. Not consensus — clarity through structured dissent.",
    tech: ["Agent Workforce", "Workflow Redesign", "Multi-Model Orchestration"],
    icon: Brain,
    price: "From $7,500 + $500/mo",
    timeline: "3-4 weeks build",
  },
];

export default function PossibilitiesPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            What We Could Build
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Not what&apos;s been done. What&apos;s possible. Every project below
            is something we can build. Not a portfolio of past work — a catalog
            of futures we can ship. Pick one, or describe your own.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 grid sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-dark-800/30 border border-white/5">
            <div className="text-2xl font-black text-white">$2,500</div>
            <div className="text-dark-400 text-xs mt-1">Minimum engagement</div>
          </div>
          <div className="p-4 rounded-xl bg-dark-800/30 border border-white/5">
            <div className="text-2xl font-black text-white">$500/mo</div>
            <div className="text-dark-400 text-xs mt-1">Max maintenance &amp; advisory</div>
          </div>
          <div className="p-4 rounded-xl bg-dark-800/30 border border-white/5">
            <div className="text-2xl font-black text-white">1-6 wks</div>
            <div className="text-dark-400 text-xs mt-1">Typical build timeline</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {possibilities.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-brand-800/40 transition-all hover:bg-dark-800/80"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand-950 flex items-center justify-center text-brand-400 group-hover:bg-brand-900 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-medium text-accent-400 tracking-wider uppercase">
                    Possibility
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-dark-300 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/40 text-brand-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <div className="text-white font-bold text-sm">{item.price}</div>
                  <div className="text-dark-400 text-xs">{item.timeline}</div>
                </div>
                <div className="text-[10px] text-dark-400 font-medium tracking-wider uppercase">
                  Discovery from $2,500
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-300 text-sm mb-6 max-w-lg mx-auto">
            Every engagement starts with a Discovery phase — workflow mapping, architecture design, and scaffolding. The discovery fee applies toward your project cost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all"
          >
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
}