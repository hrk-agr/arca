import Image from "next/image";
import Link from "next/link";
import { useCases } from "@/data/use-cases";
import UseCaseCard from "@/components/UseCaseCard";

const techPartners = [
  "Anthropic", "OpenAI", "AWS", "Google Cloud", "Microsoft Azure",
  "Slack", "GitHub", "Jira", "Salesforce", "Notion",
];

const steps = [
  {
    number: "01",
    title: "Free Audit",
    description:
      "We spend 30 minutes with your team mapping your operations and identifying where AI can have the most impact. You receive a written report — no strings attached.",
  },
  {
    number: "02",
    title: "Scoped Design",
    description:
      "We design a solution tailored to your existing stack, your data, and your team's workflows. No rip-and-replace. No new platforms to adopt.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We build and ship the agents directly into your systems — tested, documented, and ready for your team to use from day one.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We monitor, iterate, and expand as your needs evolve. You grow your AI capabilities without growing your headcount.",
  },
];

const painPoints = [
  {
    heading: "AI is moving fast.",
    body: "Keeping pace with it internally requires an expensive team with a very specific skill set. Most companies don't have one.",
  },
  {
    heading: "You don't know where to start.",
    body: "There are a hundred ways to use AI in your business. Finding the ones that actually move the needle takes time you don't have.",
  },
  {
    heading: "You can't build a dedicated AI team overnight.",
    body: "Hiring is slow, expensive, and uncertain. You need results now, not in eighteen months.",
  },
];

const previewUseCases = useCases.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(107,163,216,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
          <p className="text-sm text-slate-500">
            We work with your team to figure out where AI fits — then build it.
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            We build AI<br />
            <span className="text-brand-400">for your business.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
            Arca AI partners with growing companies to find where AI has the biggest impact, then builds and deploys it — inside your existing stack.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
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
              See what we build →
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              The problem every growing company faces
            </h2>
            <p className="text-slate-500">
              You know AI can help. You just don&apos;t know where to start, and you don&apos;t have the team to figure it out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.heading} className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{p.heading}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              How it works
            </h2>
            <p className="text-slate-500">
              From a 30-minute call to a deployed agent — here&apos;s what working with Arca AI looks like.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="text-3xl font-bold text-brand-200">{step.number}</span>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases preview */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                A sample of what we deploy
              </h2>
              <p className="text-slate-500">
                From engineering to finance to sales — AI agents that slot into your existing workflows.
              </p>
            </div>
            <Link
              href="/use-cases"
              className="shrink-0 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
            >
              View full catalog →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewUseCases.map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech partners */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center mb-8">
            Works with your existing stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techPartners.map((name) => (
              <span key={name} className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            See where AI fits in your business.
          </h2>
          <p className="text-lg text-slate-500">
            A 30-minute call. A written audit. No commitment. Just a clear picture of where AI can move the needle for your team.
          </p>
          <a
            href="mailto:hello@arca-global.com?subject=Free AI Audit Request"
            className="mt-2 px-8 py-3.5 rounded-lg bg-brand-400 text-white font-medium text-sm hover:bg-brand-500 transition-colors"
          >
            Get a Free Audit
          </a>
          <p className="text-xs text-slate-400">We respond within one business day.</p>
        </div>
      </section>
    </>
  );
}
