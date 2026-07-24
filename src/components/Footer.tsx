import Link from "next/link";
import Wordmark from "./Wordmark";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/how-it-works#sources", label: "Sources" },
      { href: "/how-it-works#retrieval", label: "Retrieval" },
      { href: "/how-it-works#mcp", label: "MCP & agents" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog/how-we-built-our-knowledge-base", label: "Engineering blog" },
      { href: "/about", label: "About Arca" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: "mailto:hello@arca-global.com", label: "hello@arca-global.com" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Wordmark />
          <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
            The knowledge base that meets your company&apos;s information where it
            already lives — and answers with citations.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title} className="flex flex-col gap-3 text-sm">
            <span className="mono-label">{col.title}</span>
            {col.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-ink-mute transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Arca. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            One embeddings table · every source
          </p>
        </div>
      </div>
    </footer>
  );
}
