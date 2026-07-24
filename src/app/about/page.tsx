import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Arca",
  description:
    "Arca builds the enterprise knowledge base that meets information where it already lives — and answers with citations.",
};

const principles = [
  {
    title: "Meet data where it lives.",
    description:
      "The single source of truth rarely works in practice. We extract from Slack, code, wikis, and incidents directly — with minimal change to how your teams already work.",
  },
  {
    title: "No migration, no rip-and-replace.",
    description:
      "Every source lands in one embeddings table behind one connector. Anything in that table is immediately queryable through the same interface.",
  },
  {
    title: "Trust the evidence, not one scorer.",
    description:
      "Full-text, embeddings, IDF, and recency each cover the others' weaknesses. We fuse, rerank, and expand context so answers come with citations you can check.",
  },
  {
    title: "Built for humans and agents.",
    description:
      "The same retrieval layer serves a web UI, MCP tools, and automations — narrow, structured, and stable enough for any client to build on.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-ink-line bg-ink-paper px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">About Arca</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Connecting people and systems to useful information.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-mute">
            As companies grow, the same questions pile up in every channel:
            where can I find X, who is the expert in Y, what is Z. Arca exists to
            answer them — from the information your teams are already creating.
          </p>
        </div>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              What we build
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink-mute">
              <p>
                Arca is an enterprise knowledge base. At its core is a single
                Postgres table that holds embeddings, summaries, and metadata
                from every source — Slack threads, code repositories, wiki
                sections, incidents, and custom databases.
              </p>
              <p>
                The system continually ingests data from across your company and
                maintains a query-ready datastore, then fuses several retrieval
                techniques to return cited answers through a web UI, MCP tools,
                and automations.
              </p>
              <p>
                Developers can extend it. Adding a new source is a pull request:
                a small connector that emits rows shaped like the shared
                embeddings table, and everything downstream works unchanged.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Why it works
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink-mute">
              <p>
                Most knowledge tools fail because they ask people to change where
                they work. Arca doesn&apos;t. It meets information where it
                already lives and stays flexible enough for real company data —
                while staying structured enough to remain useful as you grow.
              </p>
              <p>
                We combine full-text and vector search, term rarity, and recency,
                then rerank against the actual question and expand the winners
                with surrounding context. The result is evidence you can trust,
                with sources you can check.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-paper px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Principles</p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
            How we think about knowledge.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-ink-line bg-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Ask your company anything.
          </h2>
          <p className="text-ink-mute">
            See how Arca connects to your stack and starts returning cited
            answers.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
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
      </section>
    </div>
  );
}
