const stages = [
  {
    k: "Sources",
    chips: ["one connector per source", "shared schema"],
    body: "Slack threads, code chunks, wiki sections, incidents, and custom database rows all land in one table — document, embedding, metadata, source, timestamps. Each connector defines what the data is, how to reach it, and how often to fetch. Adding a source is a pull request.",
  },
  {
    k: "Distillation",
    chips: ["LLM extractors"],
    body: "Raw text is keyword-searchable the moment it lands via a Postgres full-text index. For vector search, an LLM distills each thread into a normalized document — the question being asked, a summary, the resolution, and the systems and code references mentioned — and that is what gets embedded, not the raw transcript.",
  },
  {
    k: "Embeddings",
    chips: ["pgvector", "3072-dim", "HNSW"],
    body: "One embeddings table in Postgres. Anything that lands in it — from a Slack thread to a netlist — is immediately queryable through the same interface, with no per-source search stack to maintain.",
  },
  {
    k: "Retrieval",
    chips: ["six lists in parallel"],
    body: "Full-text catches exact tokens and pasted errors, embeddings catch paraphrase across vocabularies, IDF separates rare signal from filler, and age decay favors fresher answers. No single scorer is trusted on its own — each produces its own ranked list at query time.",
  },
  {
    k: "Fusion + rerank",
    chips: ["RRF (k=60)", "LLM rerank 0–10"],
    body: "Reciprocal rank fusion merges the incompatible lists — score(d) = Σ 1 / (60 + rank) — then duplicates are merged and per-file contributions capped. A diverse top twenty goes to a small reranker, the top ten survive, and winners are expanded with their neighboring context.",
  },
  {
    k: "Synthesis",
    chips: ["planner → executor → synthesizer", "citations"],
    body: "A planner picks the retrieval tools, an executor runs them, and a synthesizer writes the answer strictly from the evidence rows it was handed — every claim carrying a citation back to the thread, file, or ticket it came from.",
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute bottom-6 left-[23px] top-6 w-px bg-ink-line"
      />
      <div className="flex flex-col gap-12">
        {stages.map((s, i) => (
          <div
            key={s.k}
            className="relative grid gap-3 pl-16 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-ink-line bg-white font-mono text-[11px] font-semibold text-brand-500">
              0{i + 1}
            </div>
            <div>
              <h3 className="pt-3 font-display text-lg font-semibold tracking-tight text-ink">
                {s.k}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-brand-200/70 bg-brand-50 px-2.5 py-1 font-mono text-[10px] text-brand-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-[1.8] text-ink-soft md:pt-3">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
