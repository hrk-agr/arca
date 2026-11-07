/*
 * Hero product mock — one project workspace:
 * sources on the left, an answer-first canvas in the middle,
 * artifacts and routines on the right.
 */

const sources = [
  { glyph: "◉", k: "Kickoff call", v: "Transcript · 48 min" },
  { glyph: "✉", k: "Re: revised pricing", v: "Email · 6 replies" },
  { glyph: "#", k: "launch-team", v: "Slack · synced" },
  { glyph: "◎", k: "Vendor group", v: "WhatsApp · synced" },
  { glyph: "▤", k: "Brand guidelines.pdf", v: "Upload · 32 pages" },
];

const artifacts = [
  { k: "Launch brief", v: "Document · edited 2h ago" },
  { k: "Vendor tracker", v: "Web app · 3 viewers" },
];

function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 rounded bg-brand-50 px-1 font-mono text-[9px] font-medium text-brand-600">
      {n}
    </sup>
  );
}

export default function ProductMock() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* soft glow behind the window */}
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-[48px] bg-brand-200/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-white shadow-[0_40px_100px_-40px_rgba(83,40,17,0.45)]">
        {/* window chrome */}
        <div className="flex items-center gap-3 border-b border-ink-line/80 bg-ink-paper px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          </div>
          <div className="flex items-center gap-2 text-[12px] text-ink-mute">
            <span className="font-medium text-ink">Q4 Launch</span>
            <span className="text-ink-faint">/</span>
            <span>Ask</span>
          </div>
          <span className="ml-auto hidden rounded-full border border-ink-line bg-white px-2.5 py-0.5 font-mono text-[10px] text-ink-mute sm:inline">
            q4-launch@in.arca-global.com
          </span>
        </div>

        <div className="grid text-left lg:grid-cols-[220px_1fr_220px]">
          {/* sources */}
          <aside className="hidden border-r border-ink-line/80 bg-ink-paper/60 p-4 lg:block">
            <p className="mono-label">Sources · 214</p>
            <ul className="mt-3 space-y-1">
              {sources.map((s) => (
                <li key={s.k} className="flex items-start gap-2.5 rounded-lg px-2 py-2 hover:bg-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-ink-line bg-white font-mono text-[10px] text-brand-600">
                    {s.glyph}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-medium text-ink">{s.k}</span>
                    <span className="block text-[11px] text-ink-faint">{s.v}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-dashed border-brand-300/80 bg-brand-50/60 px-3 py-2.5">
              <p className="text-[11px] font-medium text-brand-700">Wiki · 42 pages</p>
              <p className="text-[11px] text-brand-700/70">Rewritten 4 min ago</p>
            </div>
          </aside>

          {/* answer canvas */}
          <div className="p-5 md:p-7">
            <div className="ml-auto max-w-md rounded-2xl rounded-tr-md bg-ink-wash px-4 py-3 text-[13px] text-ink">
              What did we agree with the vendor on timelines, and what&apos;s still open?
            </div>

            <div className="mt-5">
              <p className="mono-label text-brand-600">Answer</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                The vendor committed to delivering final packaging by{" "}
                <span className="font-medium text-ink">Nov 28</span>, conditional on artwork
                sign-off by Nov 14<Cite n={1} />. Pricing was revised down 6% in the email
                thread, but the new terms haven&apos;t been countersigned<Cite n={2} />. Still
                open: who owns the freight booking — raised in WhatsApp, never resolved
                <Cite n={3} />.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["1 · Kickoff call", "2 · Re: revised pricing", "3 · Vendor group"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink-line bg-ink-paper px-2.5 py-1 font-mono text-[10px] text-ink-mute"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* composer */}
            <div className="mt-7 rounded-2xl border border-ink-line bg-white p-3 shadow-sm">
              <p className="px-1 text-[13px] text-ink-faint">Ask anything, or build something…</p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {["Document", "Web app", "Routine", "Browse"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-line px-2.5 py-1 text-[11px] text-ink-mute"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[13px] text-ink-paper">
                  ↑
                </span>
              </div>
            </div>
          </div>

          {/* artifacts + routines */}
          <aside className="hidden border-l border-ink-line/80 bg-ink-paper/60 p-4 lg:block">
            <p className="mono-label">Artifacts</p>
            <ul className="mt-3 space-y-2">
              {artifacts.map((a) => (
                <li key={a.k} className="rounded-lg border border-ink-line bg-white px-3 py-2.5">
                  <span className="block text-[12px] font-medium text-ink">{a.k}</span>
                  <span className="block text-[11px] text-ink-faint">{a.v}</span>
                </li>
              ))}
            </ul>
            <p className="mono-label mt-6">Routines</p>
            <div className="mt-3 rounded-lg border border-ink-line bg-white px-3 py-2.5">
              <span className="flex items-center gap-1.5 text-[12px] font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Weekly digest
              </span>
              <span className="block text-[11px] text-ink-faint">Mondays 9:00 → #launch-team</span>
            </div>
            <div className="mt-2 rounded-lg border border-ink-line bg-white px-3 py-2.5">
              <span className="flex items-center gap-1.5 text-[12px] font-medium text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Competitor watch
              </span>
              <span className="block text-[11px] text-ink-faint">Daily · cloud browser</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
