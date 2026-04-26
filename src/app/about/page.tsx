import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Arca AI",
  description: "Arca AI is an AI consulting and deployment firm for mid-market companies.",
};

const values = [
  {
    title: "We work with you, not at you.",
    description:
      "We start by listening. Every engagement begins with understanding your operations, your team, and your constraints — before we write a single line of code.",
  },
  {
    title: "No black boxes.",
    description:
      "The agents we build are yours. We document everything, hand off the keys, and make sure your team understands how to maintain and extend what we've built.",
  },
  {
    title: "Fit first, features second.",
    description:
      "The best AI solution is the one that works inside your existing stack without disruption. We never recommend a tool because it's new — only because it fits.",
  },
  {
    title: "Small bets, fast results.",
    description:
      "We scope tightly, deploy quickly, and prove value before expanding. You see results in weeks, not quarters.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-16">
        <div className="max-w-6xl mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">About Arca AI</h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            We believe most companies already have the data, the workflows, and the problems that AI can solve. They just don&apos;t have the team to figure out how.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">What we do</h2>
            <div className="flex flex-col gap-4 text-slate-500 text-sm leading-relaxed">
              <p>
                Arca AI is an AI consulting and deployment firm for mid-market companies. We partner with your team to identify where AI can have the most meaningful impact across your operations, then we build and deploy it — inside your existing systems.
              </p>
              <p>
                We work across engineering, security, HR, finance, operations, and go-to-market. Our work ranges from single-workflow automation agents to multi-system orchestration that touches your entire organisation.
              </p>
              <p>
                Every engagement starts with a free audit: a 30-minute call and a written report that maps your operations and identifies your highest-value AI opportunities — no commitment required.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Who we work with</h2>
            <div className="flex flex-col gap-4 text-slate-500 text-sm leading-relaxed">
              <p>
                We work best with companies in the 100–500 employee range: large enough to have real operational complexity, small enough that every efficiency gain is felt across the organisation.
              </p>
              <p>
                Our buyers are typically CTOs, VPs of Engineering, Heads of Operations, or founders who want to move fast on AI without hiring a dedicated team to do it.
              </p>
              <p>
                Industry doesn&apos;t matter. The problems we solve are universal. If you have data, workflows, and a team spending time on repetitive or information-heavy tasks, we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-12">How we work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Ready to find out where AI fits?
          </h2>
          <p className="text-slate-500">
            Start with a free 30-minute audit. We&apos;ll map your operations and tell you exactly where AI can help — in writing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:hello@arca-global.com?subject=Free AI Audit Request"
              className="px-6 py-3 rounded-lg bg-brand-400 text-white font-medium text-sm hover:bg-brand-500 transition-colors"
            >
              Get a Free Audit
            </a>
            <Link
              href="/use-cases"
              className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Browse use cases →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
