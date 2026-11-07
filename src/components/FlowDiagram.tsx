/*
 * How a project works, left to right:
 * channels flow in → the project compiles a wiki + index → you build on top,
 * for humans and for agents (via the API).
 */

const channels = [
  { k: "Direct upload", v: "Files, folders, PDFs" },
  { k: "Project email", v: "CC it on any thread" },
  { k: "Meeting notes", v: "Transcripts, automatically" },
  { k: "Slack", v: "Channels you choose" },
  { k: "WhatsApp", v: "Groups & chats", soon: true },
];

const builds = ["Chat", "Artifacts", "Workflows", "Routines"];

function Arrow() {
  return (
    <div className="flex items-center justify-center py-2 lg:px-2 lg:pt-8 lg:py-0" aria-hidden>
      <span className="h-6 w-px bg-gradient-to-b from-transparent to-brand-300 lg:h-px lg:w-8 lg:bg-gradient-to-r" />
      <svg viewBox="0 0 6 10" className="hidden h-2.5 w-1.5 text-brand-300 lg:block">
        <path d="M0 0 L6 5 L0 10" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 text-brand-300 lg:hidden">
        <path d="M0 0 L5 6 L10 0" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-line/80 bg-white/60 p-6 shadow-[0_24px_70px_-30px_rgba(83,40,17,0.25)] backdrop-blur-sm md:p-10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative flex flex-col lg:flex-row lg:items-stretch">
        {/* 1 — channels */}
        <div className="flex flex-col lg:w-[30%]">
          <p className="mono-label mb-4">01 · Send it in</p>
          <ul className="flex flex-1 flex-col justify-center space-y-2">
            {channels.map((c) => (
              <li
                key={c.k}
                className="flex items-center justify-between rounded-xl border border-ink-line bg-white px-4 py-2.5 shadow-sm"
              >
                <span>
                  <span className="block text-[13px] font-medium text-ink">{c.k}</span>
                  <span className="block text-[11px] text-ink-faint">{c.v}</span>
                </span>
                {c.soon && (
                  <span className="rounded-full bg-ink-wash px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
                    Soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Arrow />

        {/* 2 — the project */}
        <div className="flex flex-col lg:flex-1">
          <p className="mono-label mb-4">02 · It organises itself</p>
          <div className="flex flex-1 flex-col justify-center"><div className="rounded-2xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 p-px shadow-[0_16px_40px_-16px_rgba(160,74,23,0.5)]">
            <div className="rounded-[calc(1rem-1px)] bg-vault-800 p-6">
              <h3 className="font-display text-xl font-medium text-ink-paper">The project</h3>
              <p className="mt-1.5 text-[13px] font-light leading-relaxed text-ink-line/80">
                A long-running agent reads everything that arrives and keeps a living
                wiki up to date.
              </p>
              <div className="mt-5 space-y-2">
                {[
                  ["Living wiki", "People, decisions, timelines, open questions"],
                  ["Agent-ready index", "Embeddings + retrieval, built for models"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-xl border border-brand-400/25 bg-brand-500/10 px-4 py-2.5"
                  >
                    <span className="block text-[13px] font-medium text-brand-100">{k}</span>
                    <span className="block text-[11px] text-brand-200/70">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        <Arrow />

        {/* 3 — build */}
        <div className="flex flex-col lg:w-[26%]">
          <p className="mono-label mb-4">03 · Build on top</p>
          <div className="flex flex-1 flex-col justify-center">
          <div className="grid grid-cols-2 gap-2">
            {builds.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-ink-line bg-white px-3 py-4 text-center font-display text-[15px] text-ink shadow-sm"
              >
                {b}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-dashed border-ink-line px-3 py-2.5 text-center">
              <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">For</span>
              <span className="block text-[13px] text-ink">People</span>
            </div>
            <div className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50/60 px-3 py-2.5 text-center">
              <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-700">Via API</span>
              <span className="block text-[13px] text-ink">Your agents</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
