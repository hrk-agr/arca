import type { Metadata } from "next";
import Link from "next/link";
import {
  PipelineDiagram,
  EmbeddingsTableDiagram,
  HybridRetrievalDiagram,
  RerankDiagram,
  PlannerDiagram,
} from "@/components/diagrams";

export const metadata: Metadata = {
  title: "How Arca works — architecture",
  description:
    "The architecture behind Arca: one embeddings table, per-source connectors, hybrid retrieval, reciprocal rank fusion, reranking, and an MCP surface for agents.",
};

const steps = [
  {
    id: "sources",
    n: "01",
    k: "Sources",
    title: "Every source lands in one table",
    body: "Slack threads, code chunks, wiki sections, incidents, and custom database rows all share a single schema — document, embedding, metadata, source, timestamps. Each source defines what the data is, how to connect, and how often to fetch. Add a connector with a pull request.",
    diagram: <EmbeddingsTableDiagram />,
  },
  {
    id: "distillation",
    n: "02",
    k: "Distillation",
    title: "Normalize before you embed",
    body: "Raw text is keyword-searchable the moment it lands via a Postgres full-text index. For vector search, an LLM distills each thread into a normalized document — a searchable question, a summary, the resolution, and the systems and code references mentioned — which is embedded instead of the raw transcript.",
    diagram: null,
  },
  {
    id: "retrieval",
    n: "03",
    k: "Retrieval",
    title: "Hybrid signals, fused",
    body: "Full-text catches exact tokens, embeddings catch paraphrase, IDF separates signal from filler, and age decay favors fresher answers. No single scorer is trusted on its own — each produces its own ranked view, fused at query time.",
    diagram: <HybridRetrievalDiagram />,
  },
  {
    id: "fusion",
    n: "04",
    k: "Fusion & rerank",
    title: "Consensus beats a single strong vote",
    body: "Reciprocal rank fusion combines incompatible result lists — weight / (60 + rank) per list. We merge duplicates, cap per-file contributions, send a diverse top twenty to a small reranker scoring 0–10, keep the top ten, then expand winners with neighboring context.",
    diagram: <RerankDiagram />,
  },
  {
    id: "mcp",
    n: "05",
    k: "MCP & agents",
    title: "Retrieval primitives, not a black box",
    body: "MCP exposes narrow, LLM-free tools — search, search_slack, search_code, who_knows — so any agent can call them cheaply and own the orchestration. The web UI wires the same tools into an end-to-end planner → executor → synthesizer that returns cited answers.",
    diagram: <PlannerDiagram />,
  },
  {
    id: "organization",
    n: "06",
    k: "Organization",
    title: "Relevant by default",
    body: "Projects bundle the Slack channels, repos, databases, and doc spaces relevant to a team. The same source can belong to multiple projects. New hires pick a default project at onboarding and get high-signal answers without learning which channels matter.",
    diagram: null,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-ink-line bg-ink-paper px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Architecture</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            One embeddings table. Six retrievers. Cited answers.
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-mute">
            Arca continually ingests data from across your company into a single
            query-ready datastore, then fuses several retrieval techniques to
            return trustworthy, cited answers — to humans, automations, and
            agents alike.
          </p>
          <div className="mt-12">
            <PipelineDiagram />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-20">
          {steps.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-t border-ink-line pt-12"
            >
              <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold text-brand-200">
                      {s.n}
                    </span>
                    <span className="mono-label text-brand-500">{s.k}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                    {s.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-2xl leading-[1.75] text-ink-soft">
                    {s.body}
                  </p>
                  {s.diagram && <div className="mt-8">{s.diagram}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-line bg-ink-paper px-6 py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="eyebrow">Go deeper</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Read the full engineering write-up.
          </h2>
          <p className="text-ink-mute">
            The design decisions, the trade-offs, and the details behind every
            stage of the pipeline.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/blog/how-we-built-our-knowledge-base"
              className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
            >
              How we built our knowledge base →
            </Link>
            <a
              href="mailto:hello@arca-global.com?subject=Arca demo"
              className="rounded-lg border border-ink-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink-faint hover:bg-white"
            >
              Get a demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
