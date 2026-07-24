import Link from "next/link";
import {
  PipelineDiagram,
  EmbeddingsTableDiagram,
  HybridRetrievalDiagram,
} from "@/components/diagrams";

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-line bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] grid-bg" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Enterprise knowledge base</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Ask your company
              <br />
              <span className="text-brand-500">anything.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-mute">
              Arca meets your information where it already lives — Slack, code,
              wikis, incidents — and turns it into cited, trustworthy answers for
              humans, automations, and agents.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@arca-global.com?subject=Arca demo"
                className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
              >
                Get a demo
              </a>
              <Link
                href="/how-it-works"
                className="rounded-lg border border-ink-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink-faint hover:bg-ink-wash"
              >
                See the architecture →
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink-line bg-ink-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="bg-ink-paper px-6 py-8">
              <div className="font-display text-4xl font-semibold text-ink">
                {s.v}
              </div>
              <div className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-brand-500">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-ink-mute">{s.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Meeting data where it lives */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Meeting data where it lives</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The single source of truth rarely works in practice.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-mute">
              Information is generated wherever it&apos;s convenient: suggested
              edits in a doc, threads in Slack, code references in GitHub, status
              in Jira. Each platform is tailor-made for its domain. So instead of
              forcing everything into one rigid system, Arca extracts from each
              source directly — with minimal change to how your teams already
              work.
            </p>
          </div>

          <div className="mt-12">
            <EmbeddingsTableDiagram />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-mute">
            Every source, from Slack threads to netlists, lands in the same
            embeddings table — and anything in that table is immediately
            queryable through the same interface.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="border-y border-ink-line bg-ink-paper py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">One connector per source</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Connect what you have. Query it the same way.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-mute">
              Each source defines what the data is, how to connect to it, and how
              often to fetch it. Every resulting row follows the same interface —
              no migration, no rip-and-replace.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sources.map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-ink-line bg-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {s.k}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid retrieval */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Hybrid retrieval</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              No single scorer is trusted on its own.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-mute">
              Vector search alone isn&apos;t enough for messy real-world data.
              Every thread is retrievable through several techniques at once,
              where each makes up for the weaknesses of the others — then the
              results are fused and reranked.
            </p>
          </div>

          <div className="mt-12">
            <HybridRetrievalDiagram />
          </div>
        </div>
      </section>

      {/* Interfaces */}
      <section id="interfaces" className="border-y border-ink-line bg-ink-paper py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Humans, automations, and agents</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              One retrieval layer. Every consumer.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {interfaces.map((i) => (
              <div
                key={i.k}
                className="flex flex-col rounded-xl border border-ink-line bg-white p-6"
              >
                <span className="mono-label">{i.k}</span>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {i.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28 px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="eyebrow">Get started</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
            Give every team a single place to ask.
          </h2>
          <p className="text-lg text-ink-mute">
            See how Arca connects to your stack and starts returning cited answers
            — usually within the first week.
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@arca-global.com?subject=Arca demo"
              className="rounded-lg bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
            >
              Get a demo
            </a>
            <Link
              href="/blog/how-we-built-our-knowledge-base"
              className="rounded-lg border border-ink-line px-8 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink-faint hover:bg-ink-wash"
            >
              Read how we built it →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
