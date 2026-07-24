import type { ReactNode } from "react";

/* ---------- primitives ---------- */

function Node({
  children,
  accent = false,
  sub,
}: {
  children: ReactNode;
  accent?: boolean;
  sub?: string;
}) {
  return (
    <div className={accent ? "node-accent" : "node"}>
      <div>{children}</div>
      {sub && (
        <div className="mt-1 text-[9px] normal-case tracking-normal text-ink-faint">
          {sub}
        </div>
      )}
    </div>
  );
}

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <span
      aria-hidden
      className={`select-none font-mono text-brand-400 ${
        vertical ? "rotate-90 py-0.5" : ""
      }`}
    >
      →
    </span>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="grid-bg overflow-x-auto rounded-2xl border border-ink-line bg-ink-paper p-6 md:p-8">
      {children}
    </div>
  );
}

/* ---------- 1. end-to-end pipeline ---------- */

export function PipelineDiagram() {
  const stages = [
    { k: "SOURCES", v: "Slack · Wiki · Code · Incidents" },
    { k: "DISTILLATION", v: "LLM extractors" },
    { k: "EMBEDDINGS", v: "pgvector · 3072-dim · HNSW" },
    { k: "RETRIEVAL", v: "six lists in parallel" },
    { k: "FUSION + RERANK", v: "RRF (k=60) → LLM rerank" },
    { k: "SYNTHESIS", v: "answer + citations" },
  ];
  return (
    <Frame>
      <div className="flex min-w-max flex-wrap items-stretch gap-3">
        {stages.map((s, i) => (
          <div key={s.k} className="flex items-center gap-3">
            <div className="flex min-w-[140px] flex-col rounded-lg border border-ink-line bg-white px-4 py-3">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
                {s.k}
              </span>
              <span className="mt-1 text-[11px] text-ink-mute">{s.v}</span>
            </div>
            {i < stages.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------- 2. one embeddings table ---------- */

export function EmbeddingsTableDiagram() {
  const sources = [
    "Slack",
    "Wiki / Confluence",
    "Code repos",
    "Netlists",
    "PRM docs",
    "Custom DBs",
  ];
  const outputs = ["MCP", "Web UI", "Agents"];
  return (
    <Frame>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="grid grid-cols-2 gap-2">
          {sources.map((s) => (
            <Node key={s}>{s}</Node>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <Arrow />
          <div className="rounded-xl border-2 border-brand-300 bg-brand-50 px-5 py-4 text-center">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
              One embeddings table
            </div>
            <div className="mt-2 space-y-1 text-left font-mono text-[10px] text-ink-mute">
              <div>document</div>
              <div>embedding</div>
              <div>metadata · source · ts</div>
            </div>
          </div>
          <Arrow />
        </div>

        <div className="grid gap-2">
          {outputs.map((o) => (
            <Node key={o} accent>
              {o}
            </Node>
          ))}
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
            one connector per source
          </p>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- 3. slack hybrid retrieval ---------- */

export function HybridRetrievalDiagram() {
  const signals = [
    { n: "01", k: "Full-text", v: "Exact tokens, pasted errors" },
    { n: "02", k: "Embedding", v: "Paraphrase across vocabulary" },
    { n: "03", k: "IDF", v: "Rare tokens beat filler" },
    { n: "04", k: "Age decay", v: "Newer answers win ties" },
  ];
  return (
    <Frame>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((s) => (
          <div
            key={s.n}
            className="flex flex-col gap-2 rounded-lg border border-ink-line bg-white p-4"
          >
            <span className="font-mono text-[11px] font-semibold text-brand-500">
              {s.n}
            </span>
            <span className="text-sm font-semibold text-ink">{s.k}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-mute">
              {s.v}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
        no single scorer is trusted on its own → fused at query time
      </p>
    </Frame>
  );
}

/* ---------- 4. distillation ---------- */

export function DistillationDiagram() {
  return (
    <Frame>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1.1fr]">
        <div className="space-y-2">
          <span className="mono-label">Full thread input</span>
          {[
            ["MAYA", "Restore stalls after manifest load on the larger cluster."],
            ["OWEN", "I can reproduce with 128 shards. Logs stop before warmup."],
            ["MAYA", "Setting CKPT_PREFETCH=4 makes it complete."],
          ].map(([who, msg], i) => (
            <div
              key={i}
              className="rounded-lg border border-ink-line bg-white px-3 py-2"
            >
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-500">
                {who}
              </div>
              <div className="mt-0.5 text-[12px] leading-snug text-ink-soft">
                {msg}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="mono-label">distill</span>
          <Arrow />
        </div>

        <div className="rounded-xl border-2 border-brand-300 bg-brand-50 p-4">
          <span className="mono-label text-brand-700">Structured artifact</span>
          <pre className="mt-2 overflow-x-auto font-mono text-[11px] leading-relaxed text-ink-soft">
            {`{
  "question": "Why does restore
     stall after manifest load?",
  "summary": "Large restores stop
     before cache warmup.",
  "resolution": "Set CKPT_PREFETCH=4
     for the NFS mount.",
  "systems": ["checkpoint", "NFS"],
  "code_refs": ["CKPT_PREFETCH"]
}`}
          </pre>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- 5. reciprocal rank fusion ---------- */

export function RerankDiagram() {
  const lists = [
    { k: "Vector", items: ["ckpt_loader.cc", "NFS stall", "wiki: format"] },
    { k: "Full-text", items: ["wiki: format", "ckpt_loader.cc", "INC-82"] },
    { k: "Slack", items: ["NFS stall", "cache warmup", "burst: flags"] },
  ];
  const merged = [
    ["CheckpointLoader", "0.0792"],
    ["INC-82: slow restore", "0.0776"],
    ["wiki: checkpoint format", "0.0640"],
    ["thread: NFS stall", "0.0640"],
  ];
  return (
    <Frame>
      <div className="grid items-start gap-6 md:grid-cols-[1.4fr_auto_1fr]">
        <div className="grid gap-3 sm:grid-cols-3">
          {lists.map((l) => (
            <div key={l.k}>
              <span className="mono-label">{l.k}</span>
              <div className="mt-2 space-y-1.5">
                {l.items.map((it, i) => (
                  <div
                    key={it}
                    className="rounded border border-ink-line bg-white px-2 py-1.5 font-mono text-[10px] text-ink-soft"
                  >
                    <span className="text-ink-faint">{i + 1}</span> {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 pt-6">
          <span className="mono-label">rrf</span>
          <Arrow />
        </div>

        <div>
          <span className="mono-label text-brand-700">Merged · reranked</span>
          <div className="mt-2 space-y-1.5">
            {merged.map(([name, score], i) => (
              <div
                key={name}
                className="flex items-center justify-between rounded border border-brand-200 bg-brand-50 px-2 py-1.5 font-mono text-[10px]"
              >
                <span className="text-ink-soft">
                  <span className="text-brand-500">{i + 1}</span> {name}
                </span>
                <span className="text-ink-faint">{score}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 font-mono text-[9px] text-ink-faint">
            score(d) = Σ 1 / (60 + rank_L(d))
          </p>
        </div>
      </div>
    </Frame>
  );
}

/* ---------- 6. planner → executor → synthesis ---------- */

export function PlannerDiagram() {
  const tools = [
    "search",
    "search_slack",
    "search_code",
    "recent_prs",
    "who_knows",
  ];
  return (
    <Frame>
      <div className="flex flex-col items-center gap-4">
        <Node accent>Question</Node>
        <Arrow vertical />
        <Node>Planner</Node>
        <Arrow vertical />
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map((t) => (
            <Node key={t}>{t}</Node>
          ))}
        </div>
        <Arrow vertical />
        <Node>Evidence · normalized rows</Node>
        <Arrow vertical />
        <Node accent>Synthesis · answer + citations</Node>
      </div>
    </Frame>
  );
}
