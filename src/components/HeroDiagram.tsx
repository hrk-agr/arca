const SOURCES = [
  { k: "SLACK", v: "threads → Q&A, live over Socket Mode" },
  { k: "CODE REPOS", v: "language-aware chunks, 40 GB+" },
  { k: "WIKI / CONFLUENCE", v: "sections + neighboring context" },
  { k: "JIRA / INCIDENTS", v: "status · resolutions · recency" },
  { k: "CUSTOM DBS", v: "python plugin → shared rows" },
];

const CONSUMERS = [
  { label: "WEB UI", x: 830, w: 74 },
  { label: "MCP / AGENTS", x: 920, w: 116 },
  { label: "AUTOMATIONS", x: 1052, w: 106 },
];

/* Shared palette for the dark hero graphic. */
const C = {
  card: "#0E1526",
  cardLine: "rgba(148,163,184,0.18)",
  label: "#E2E8F0",
  sub: "#64748B",
  accent: "#8EB3FD",
  wire: "#7C93F7",
  dash: "rgba(94,140,249,0.55)",
  chipFill: "rgba(59,106,240,0.12)",
  chipLine: "rgba(94,140,249,0.45)",
};

function SourceCard({ x, y, k, v }: { x: number; y: number; k: string; v: string }) {
  return (
    <g>
      <rect x={x} y={y} width={236} height={64} rx={10} fill={C.card} stroke={C.cardLine} />
      <text x={x + 18} y={y + 27} fontSize={11.5} fontWeight={600} letterSpacing="1.2" fill={C.label} className="font-mono">
        {k}
      </text>
      <text x={x + 18} y={y + 46} fontSize={11} fill={C.sub} className="font-sans">
        {v}
      </text>
    </g>
  );
}

function DesktopDiagram() {
  const cardYs = [26, 118, 210, 302, 394];
  // Fan-in targets along the engine's left silhouette.
  const targets = [
    [497, 196],
    [489, 218],
    [485, 240],
    [489, 262],
    [497, 284],
  ];
  return (
    <svg
      viewBox="0 0 1160 500"
      className="hidden w-full md:block"
      role="img"
      aria-label="Diagram: Slack, code repos, wikis, incidents, and custom databases feed the Arca context engine, which produces a cited answer consumed by the web UI, MCP agents, and automations."
    >
      <defs>
        <radialGradient id="engine-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B6AF0" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#3B6AF0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B6AF0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* source cards + fan-in connectors */}
      {SOURCES.map((s, i) => (
        <SourceCard key={s.k} x={8} y={cardYs[i]} k={s.k} v={s.v} />
      ))}
      {cardYs.map((y, i) => {
        const cy = y + 32;
        const [tx, ty] = targets[i];
        return (
          <g key={y}>
            <path
              d={`M248 ${cy} C 350 ${cy}, 385 ${ty}, ${tx - 6} ${ty}`}
              fill="none"
              stroke={C.dash}
              strokeWidth={1.5}
              strokeDasharray="2 7"
              strokeLinecap="round"
            />
            <circle cx={248} cy={cy} r={2.5} fill={C.accent} />
            <circle cx={tx - 4} cy={ty} r={2.5} fill={C.accent} />
          </g>
        );
      })}

      {/* engine glow + hex rings */}
      <ellipse cx={575} cy={240} rx={210} ry={180} fill="url(#engine-glow)" />
      <polygon
        points="575,116 688,178 688,302 575,364 462,302 462,178"
        fill="none"
        stroke={C.wire}
        strokeOpacity={0.16}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <polygon
        points="575,92 710,166 710,314 575,388 440,314 440,166"
        fill="none"
        stroke={C.wire}
        strokeOpacity={0.08}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />

      {/* wireframe cube */}
      <g stroke={C.wire} strokeWidth={1.6} fill="none" strokeLinejoin="round">
        {/* top face */}
        <path d="M575 150 L653 195 L575 240 L497 195 Z" fill="rgba(59,106,240,0.10)" />
        {/* left + right faces */}
        <path d="M497 195 L497 285 L575 330 L575 240 Z" fill="rgba(59,106,240,0.05)" />
        <path d="M653 195 L653 285 L575 330 L575 240 Z" fill="rgba(59,106,240,0.02)" />
        {/* nested inner cube on the top face */}
        <path
          d="M575 186 L611 207 L575 228 L539 207 Z"
          strokeOpacity={0.7}
          strokeWidth={1.1}
        />
      </g>

      <text x={575} y={368} textAnchor="middle" fontSize={12} fontWeight={600} letterSpacing="2" fill={C.label} className="font-mono">
        ARCA CONTEXT ENGINE
      </text>
      <text x={575} y={388} textAnchor="middle" fontSize={10.5} letterSpacing="1" fill={C.sub} className="font-mono">
        distill · embed · retrieve · fuse
      </text>

      {/* engine → answer connector */}
      <path
        d="M661 240 C 735 240, 758 178, 824 178"
        fill="none"
        stroke={C.dash}
        strokeWidth={1.5}
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <circle cx={661} cy={240} r={2.5} fill={C.accent} />
      <circle cx={826} cy={178} r={2.5} fill={C.accent} />

      {/* answer card */}
      <rect x={830} y={60} width={322} height={240} rx={12} fill={C.card} stroke={C.cardLine} />
      <text x={850} y={92} fontSize={11} fontWeight={600} letterSpacing="1.5" fill={C.accent} className="font-mono">
        CITED ANSWER
      </text>
      <text x={850} y={120} fontSize={13.5} fontWeight={600} fill={C.label} className="font-sans">
        Why does restore stall
      </text>
      <text x={850} y={138} fontSize={13.5} fontWeight={600} fill={C.label} className="font-sans">
        after manifest load?
      </text>
      <text x={850} y={166} fontSize={12} fill="#94A3B8" className="font-sans">
        Set CKPT_PREFETCH=4 for the NFS mount —
      </text>
      <text x={850} y={184} fontSize={12} fill="#94A3B8" className="font-sans">
        large restores stop before cache warmup,
      </text>
      <text x={850} y={202} fontSize={12} fill="#94A3B8" className="font-sans">
        matching the incident pattern in INC-82.
      </text>
      {/* citation chips */}
      {[
        { t: "slack · #infra", x: 850, w: 96 },
        { t: "ckpt_loader.cc", x: 954, w: 104 },
        { t: "INC-82", x: 1066, w: 60 },
      ].map((c) => (
        <g key={c.t}>
          <rect x={c.x} y={222} width={c.w} height={22} rx={6} fill={C.chipFill} stroke={C.chipLine} />
          <text x={c.x + c.w / 2} y={237} textAnchor="middle" fontSize={10} fill={C.accent} className="font-mono">
            {c.t}
          </text>
        </g>
      ))}
      <text x={850} y={280} fontSize={10} letterSpacing="1" fill={C.sub} className="font-mono">
        GROUNDED · SIX RETRIEVERS FUSED
      </text>

      {/* answer → consumers */}
      <path
        d="M991 302 L991 344"
        fill="none"
        stroke={C.dash}
        strokeWidth={1.5}
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      {CONSUMERS.map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={350} width={c.w} height={28} rx={8} fill="transparent" stroke="rgba(148,163,184,0.25)" />
          <text x={c.x + c.w / 2} y={368} textAnchor="middle" fontSize={10} letterSpacing="1.2" fill="#CBD5E1" className="font-mono">
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MobileDiagram() {
  return (
    <div className="flex flex-col items-center gap-4 md:hidden">
      <div className="flex flex-wrap justify-center gap-2">
        {SOURCES.map((s) => (
          <span
            key={s.k}
            className="rounded-lg border border-white/10 bg-night-card px-3 py-1.5 font-mono text-[10px] tracking-[0.08em] text-slate-300"
          >
            {s.k}
          </span>
        ))}
      </div>

      <span aria-hidden className="font-mono text-brand-300">↓</span>

      <div className="relative rounded-xl border border-brand-500/40 bg-night-card px-6 py-4 text-center">
        <div className="absolute inset-0 rounded-xl bg-brand-500/10 blur-lg" />
        <div className="relative font-mono text-[11px] font-semibold tracking-[0.18em] text-white">
          ARCA CONTEXT ENGINE
        </div>
        <div className="relative mt-1 font-mono text-[10px] tracking-[0.08em] text-slate-500">
          distill · embed · retrieve · fuse
        </div>
      </div>

      <span aria-hidden className="font-mono text-brand-300">↓</span>

      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-night-card p-5">
        <div className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brand-300">
          CITED ANSWER
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-200">
          Why does restore stall after manifest load?
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">
          Set CKPT_PREFETCH=4 for the NFS mount — large restores stop before
          cache warmup, matching the incident pattern in INC-82.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["slack · #infra", "ckpt_loader.cc", "INC-82"].map((c) => (
            <span
              key={c}
              className="rounded-md border border-brand-500/40 bg-brand-500/10 px-2 py-1 font-mono text-[9px] text-brand-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <span aria-hidden className="font-mono text-brand-300">↓</span>

      <div className="flex flex-wrap justify-center gap-2">
        {["WEB UI", "MCP / AGENTS", "AUTOMATIONS"].map((c) => (
          <span
            key={c}
            className="rounded-lg border border-white/15 px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-slate-300"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroDiagram() {
  return (
    <div>
      <DesktopDiagram />
      <MobileDiagram />
    </div>
  );
}
