"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog/how-we-built-our-knowledge-base", label: "Engineering" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-mute transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:hello@arca-global.com?subject=Arca demo"
            className="text-sm text-ink-mute transition-colors hover:text-ink"
          >
            Sign in
          </a>
          <a
            href="mailto:hello@arca-global.com?subject=Arca demo"
            className="inline-flex items-center rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Get a demo
          </a>
        </div>

        <button
          className="p-2 text-ink-mute md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="mb-1 block h-px w-5 bg-current" />
          <span className="mb-1 block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-b border-ink-line bg-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:hello@arca-global.com?subject=Arca demo"
            className="inline-flex items-center justify-center rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white"
          >
            Get a demo
          </a>
        </div>
      )}
    </header>
  );
}
