import HeroDiagram from "@/components/HeroDiagram";
import ArchitectureFlow from "@/components/ArchitectureFlow";

const stats = [
  { v: "1", k: "embeddings table", s: "every source lands in the same place" },
  { v: "6", k: "retrievers in parallel", s: "fused, then reranked" },
  { v: "3072", k: "dimensions", s: "pgvector · HNSW" },
  { v: "∞", k: "connectors", s: "add one with a pull request" },
];

const sources = [
  { k: "Slack", v: "Threads distilled into searchable Q&A, live over Socket Mode." },
  { k: "Code repos", v: "Language-aware chunking across 40 GB+ repositories." },
  { k: "Wiki / Confluence", v: "Sections embedded with neighbors kept for context." },
  { k: "Incidents & Jira", v: "Status and resolutions, ranked by recency." },
  { k: "Netlists & PRM docs", v: "Domain artifacts, queryable like everything else." },
  { k: "Custom databases", v: "A small Python plugin emits rows into the shared table." },
];

const interfaces = [
  {
    k: "Web UI",
    v: "Ask a question, get a cited answer. Planner → executor → synthesizer runs end to end.",
  },
  {
    k: "MCP",
    v: "Retrieval primitives exposed as direct, LLM-free tools. Claude Code owns the orchestration.",
  },
  {
    k: "Automations",
    v: "The same query surface for bots and pipelines — narrow, structured, stable inputs and outputs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — dark */}
      <section className="relative overflow-hidden bg-night-900">
        <div className="pointer-events-none absolute inset-0 aurora-dark" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow-dark">Arca</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.06] tracking-tight text-white md:text-6xl">
              Context Engine for
              <br />
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-indigo-300 bg-clip-text text-transparent">
                Modern Product Teams
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-400">
              Arca reconstructs the context scattered across Slack, code, wikis,
              and incidents into cited answers that engineers, automations, and
              agents can trust.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@arca-global.com?subject=Arca demo"
                className="rounded-full bg-brand-500 px-7 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(59,106,240,0.35)] transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_0_36px_rgba(59,106,240,0.5)]"
              >
                Get a demo
              </a>
              <a
                href="#architecture"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                See the architecture ↓
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <HeroDiagram />
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="font-display text-4xl font-medium text-white">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-brand-300">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-slate-500">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources — light */}
      <section id="sources" className="relative scroll-mt-16 bg-white px-6 py-24">
        <div className="pointer-events-none absolute inset-0 aurora-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Meeting data where it lives</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              The single source of truth rarely works in practice.
            </h2>
            <p className="mt-4 font-light leading-relaxed text-ink-mute">
              Information is generated wherever it&apos;s convenient: suggested
              edits in a doc, threads in Slack, code references in GitHub, status
              in Jira. Each platform is tailor-made for its domain. So instead of
              forcing everything into one rigid system, Arca extracts from each
              source directly — with minimal change to how your teams already
              work.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sources.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-ink-line/70 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-200 hover:shadow-[0_8px_30px_rgba(15,20,32,0.06)]"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {s.k}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-ink-mute">
                  {s.v}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-ink-mute">
            Projects bundle the channels, repos, databases, and doc spaces
            relevant to a team — the same source can belong to several — so new
            hires pick a default project at onboarding and get high-signal
            answers without learning which channels matter.
          </p>
        </div>
      </section>

      {/* Architecture — the technical implementation */}
      <section
        id="architecture"
        className="relative scroll-mt-16 bg-gradient-to-b from-white via-ink-paper to-white px-6 py-24"
      >
        <div className="pointer-events-none absolute inset-0 aurora-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">The technical implementation</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              One embeddings table. Six retrievers. Cited answers.
            </h2>
            <p className="mt-4 font-light leading-relaxed text-ink-mute">
              Arca continually ingests data from across your company into a
              single query-ready datastore, then fuses several retrieval
              techniques — each covering the weaknesses of the others — before
              synthesizing an answer.
            </p>
          </div>

          <div className="mt-14">
            <ArchitectureFlow />
          </div>
        </div>
      </section>

      {/* Interfaces */}
      <section id="interfaces" className="relative scroll-mt-16 bg-white px-6 pb-28 pt-8">
        <div className="pointer-events-none absolute inset-0 rotate-180 aurora-light" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Humans, automations, and agents</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              One retrieval layer. Every consumer.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {interfaces.map((i) => (
              <div
                key={i.k}
                className="flex flex-col rounded-2xl border border-ink-line/70 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-[0_8px_30px_rgba(15,20,32,0.06)]"
              >
                <span className="mono-label">{i.k}</span>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
                  {i.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="relative overflow-hidden bg-night-900 px-6 py-28">
        <div className="pointer-events-none absolute inset-0 aurora-dark" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="eyebrow-dark">Get started</p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-white">
            Give every team a single place to ask.
          </h2>
          <p className="text-lg font-light text-slate-400">
            See how Arca connects to your stack and starts returning cited
            answers — usually within the first week.
          </p>
          <a
            href="mailto:hello@arca-global.com?subject=Arca demo"
            className="mt-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(59,106,240,0.35)] transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_0_36px_rgba(59,106,240,0.5)]"
          >
            Get a demo
          </a>
        </div>
      </section>
    </>
  );
}
