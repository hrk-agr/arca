import type { Metadata } from "next";
import Link from "next/link";
import {
  EmbeddingsTableDiagram,
  HybridRetrievalDiagram,
  DistillationDiagram,
  RerankDiagram,
  PlannerDiagram,
} from "@/components/diagrams";

export const metadata: Metadata = {
  title: "How we built our knowledge base — Arca",
  description:
    "The architecture behind Arca: one embeddings table, hybrid retrieval over Slack, code, and docs, LLM distillation, reciprocal rank fusion, and an MCP surface for agents.",
};

const authors = ["The Arca Team"];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-16 scroll-mt-24 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-lg font-semibold text-ink">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-[1.75] text-ink-soft">{children}</p>;
}

function Figure({ children }: { children: React.ReactNode }) {
  return <div className="my-10">{children}</div>;
}

export default function ArticlePage() {
  return (
    <article className="bg-white">
      {/* Header */}
      <header className="border-b border-ink-line">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-10">
          <Link
            href="/how-it-works"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute hover:text-ink"
          >
            ← Engineering
          </Link>
          <p className="eyebrow mt-6">Jul 24 2026 · Engineering</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            How we built our knowledge base
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {authors.map((a) => (
              <span
                key={a}
                className="rounded bg-ink-wash px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <P>
          Teams ask an internal knowledge base thousands of questions a day —
          from humans, automations, and agents alike. As a company grows, the
          same questions pile up in every channel: <em>Where can I find X?</em>{" "}
          <em>Who is the expert in Y?</em> <em>What is Z?</em> We built Arca to
          connect people and systems to useful information.
        </P>
        <P>
          This is how it works under the hood: one embeddings table, hybrid
          retrieval, LLM distillation, and a query pipeline that fuses,
          reranks, and synthesizes cited answers.
        </P>

        <H2 id="meeting-data">Meeting data where it lives</H2>
        <P>
          Finding information inside an organization is hard. The data is
          scattered across tools, and every quarter someone proposes the same
          brilliant fix: record everything in one platform so all information
          lives in a single place. The dream of a single source of truth rarely
          works in practice.
        </P>
        <P>
          Information is generated wherever it&apos;s convenient and ergonomic:
          suggested edits in a document, threads in Slack, code references in
          GitHub, status metadata in Jira. These platforms are tailor-made for
          their domains. Discussing a pull request in a word processor would be
          a terrible experience. So we designed a system that requires minimal
          change to existing behavior — on the collection side, that means
          extracting data from each platform directly.
        </P>

        <H2 id="anatomy">Anatomy of a knowledge base</H2>
        <P>Our knowledge base provides three things:</P>
        <ul className="mt-4 space-y-2 text-ink-soft">
          <li className="flex gap-3">
            <span className="mt-1 font-mono text-xs text-brand-500">01</span>
            <span>A platform for collecting and storing internal data.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 font-mono text-xs text-brand-500">02</span>
            <span>A platform for querying that data.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 font-mono text-xs text-brand-500">03</span>
            <span>
              A layer that enforces authentication and authorization, with
              auditing and analytics.
            </span>
          </li>
        </ul>
        <P>
          At the core is a single Postgres table that holds embeddings, raw
          summaries, and metadata from many sources. The system continually
          ingests data from across the company and maintains a query-ready
          datastore. Every source, from Slack threads to netlists, lands in the
          same embeddings table — and anything in that table is immediately
          queryable through the same interface.
        </P>
        <Figure>
          <EmbeddingsTableDiagram />
        </Figure>

        <H2 id="slack">Slack</H2>
        <P>
          Slack was the most important source to design for. It&apos;s where the
          most up-to-date engineering discussions happen. We initially tested
          whether simple embeddings over raw text performed well enough, and
          quickly realized vector search alone was insufficient. Messages vary
          enormously in information density — “hey yeah sure mike” and a detailed
          kernel explanation are both messages — and meaning often depends on the
          surrounding conversation.
        </P>
        <P>
          We needed a hybrid approach, where every thread is retrievable through
          several techniques at once and each covers the others&apos; weaknesses:
        </P>
        <Figure>
          <HybridRetrievalDiagram />
        </Figure>
        <P>
          <strong>Full-text search</strong> catches exact tokens embeddings blur
          together — error strings, flag names, host names.{" "}
          <strong>Embedding search</strong> catches paraphrase: “restore hangs
          after manifest load” and “checkpoint stalls on the NFS mount” may never
          share vocabulary. <strong>Inverse document frequency</strong> separates
          signal from filler, so “sounds good, thanks!” scores near zero.{" "}
          <strong>Age decay</strong> encodes that Slack answers expire — when
          relevance is otherwise equal, the newer thread wins.
        </P>

        <H3>Socket Mode</H3>
        <P>
          To collect data in real time, we run a Slack bot in Socket Mode. Slack
          pushes every message event over a persistent WebSocket, so we get
          real-time updates without polling the Web API and burning rate limits.
          On each event we acknowledge, deduplicate by stable event ID, and mark
          the message for the ingest consumer.
        </P>
        <P>
          The consumer never saves a message in isolation. It resolves the thread
          the message belongs to, re-fetches the entire conversation — parent and
          every reply — and writes the whole thread back as one row. So the
          stored content, participant list, and last-activity timestamp always
          reflect the complete conversation. Each channel is its own data source,
          which lets busy incident channels refresh more often than quiet ones.
        </P>

        <H3>Distillation</H3>
        <P>
          Raw Slack text is keyword-searchable the moment it lands, thanks to a
          Postgres full-text (GIN) index. For useful vector search we do more: an
          LLM distills each thread into a normalized document — a one-line
          question an engineer would actually search for, a short summary, the
          resolution, and the systems and code references mentioned.
        </P>
        <Figure>
          <DistillationDiagram />
        </Figure>
        <P>
          We embed that normalized document instead of the raw transcript. In our
          experiments, accuracy increased significantly when the thread was
          normalized into a consistent format, and the extra metadata gives the
          semantic match more useful signal.
        </P>

        <H3>Bursting</H3>
        <P>
          Important messages inside long threads weren&apos;t always represented
          in the thread-level summary. So we also embed <em>bursts</em> — runs of
          consecutive messages from the same author — with the thread topic
          prepended as context. To keep low-signal data out, each burst must
          clear a threshold: a rare token (IDF ≥ 4.0), a combined length of at
          least 200 characters, and/or a reaction as a social boost.
        </P>

        <H2 id="code">Code repositories</H2>
        <P>
          With the rise of command-line coding agents, embedding code felt
          counterintuitive — it seemed like “grep is all you need.” But some
          repositories are larger than 40&nbsp;GB, and after several experiments
          we landed on CocoIndex, an open-source framework specialized in
          vectorizing codebases.
        </P>
        <P>
          For each repository we split code using language-specific boundaries
          ordered coarse to fine. The splitter tries classes first; if a chunk is
          still too large it falls back to methods, then smaller blocks. A single
          file may produce multiple embeddings at different levels of
          specificity. On each commit, only changed chunks are re-embedded —
          which works especially well because the sync state and embedding store
          live in the same database. Repository onboarding lives in config files
          teams submit themselves, with allowlists and denylists at the file-path
          level.
        </P>

        <H2 id="custom">Custom data sources</H2>
        <P>
          Some teams already had their own databases and didn&apos;t want to move
          data just to participate. They wanted the same query surface over their
          existing tables. So we treat custom sources as plugin scripts: a team
          opens a pull request with a small Python module that reads from its
          system and emits rows shaped like our embeddings table. As long as it
          writes the shared schema, the rest of the stack works unchanged — the
          data becomes queryable alongside Slack, code, and docs.
        </P>

        <H2 id="retrieval">Planning, fan-out, and reranking</H2>
        <P>
          For every query, a short planning pass lets an LLM decide which tools
          and sources are likely to matter — <code>search</code>,{" "}
          <code>search_slack</code>, <code>search_code</code>,{" "}
          <code>recent_prs</code>, <code>who_knows</code>, and a per-file{" "}
          <code>subsystem_index</code>. The planner works over a compact
          description of what&apos;s indexed and emits tool selections the
          executor fans out in parallel, normalizes into a common evidence
          format, and passes to synthesis.
        </P>
        <Figure>
          <PlannerDiagram />
        </Figure>
        <P>
          Before reranking, we combine the retrievers&apos; incompatible result
          lists with reciprocal rank fusion (RRF): for every document we add{" "}
          <code>weight / (60 + rank)</code> for each list it appears in. The
          smoothing constant makes consensus matter more than a single strong
          vote — a document near the top across several retrievers beats one that
          ranks first in only one.
        </P>
        <Figure>
          <RerankDiagram />
        </Figure>
        <P>
          We then merge duplicate chunks, cap how many results each file can
          contribute, and send a diverse top twenty to a small reranker that
          scores each document 0–10 and keeps the top ten. Finally we add context
          back to the winners — pulling neighboring wiki sections so headings,
          preconditions, and caveats that chunking split apart aren&apos;t lost.
        </P>

        <H2 id="mcp">MCP and the web UI</H2>
        <P>
          In the MCP integration we expose retrieval building blocks as direct
          tools instead of hiding them behind one “answer this question”
          endpoint. Each tool maps to one primitive —{" "}
          <code>search_slack</code>, <code>search_code</code>,{" "}
          <code>search</code>, <code>who_knows</code> — with narrow, structured,
          stable inputs and outputs. Claude Code, or any MCP-compatible agent,
          becomes the orchestration engine, deciding which tools to call and how
          to assemble results.
        </P>
        <P>
          The web UI uses the same tools, wired into a complete pipeline that runs
          end to end for every question. A lightweight planner chooses tools; the
          executor fans them out in parallel and normalizes results into a shared
          evidence schema; a final synthesis pass produces the answer with
          citations, caveats, and cross-source synthesis. To the user it&apos;s
          simply “ask a question and get an answer.”
        </P>

        <H2 id="organization">Organization</H2>
        <P>
          As the corpus grew, “search everything everywhere” stopped being
          useful. Engineers on compiler teams didn&apos;t want infrastructure
          runbooks in their results, and vice versa. Projects are how we make
          search relevant by default: a named bundle of data sources — specific
          Slack channels, repositories, databases, and document spaces. The same
          source can be referenced by multiple projects instead of being
          duplicated. During onboarding, a user picks a default project that
          matches how they work, so a new hire gets high-signal answers without
          first learning which channels or repos matter.
        </P>

        <H2 id="final">Final thoughts</H2>
        <P>
          In the end, the knowledge base works because it meets people where the
          information already lives, instead of forcing everything into one rigid
          system. By combining several search techniques we surface evidence
          quickly — flexible enough for real company data, structured enough to
          stay useful as the company keeps growing.
        </P>

        <div className="mt-16 rounded-2xl border border-ink-line bg-ink-paper p-8 text-center">
          <p className="eyebrow">Bring Arca to your company</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
            Ask your company anything.
          </h3>
          <a
            href="mailto:hello@arca-global.com?subject=Arca demo"
            className="mt-5 inline-flex rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Get a demo
          </a>
        </div>
      </div>
    </article>
  );
}
