"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Arca AI" width={110} height={36} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/use-cases" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Use Cases
          </Link>
          <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
          <a
            href="mailto:hello@arca-global.com"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="mailto:hello@arca-global.com?subject=Free AI Audit Request"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-brand-400 text-white text-sm font-medium hover:bg-brand-500 transition-colors"
        >
          Get a Free Audit
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4">
          <Link href="/use-cases" className="text-sm text-slate-700" onClick={() => setMenuOpen(false)}>
            Use Cases
          </Link>
          <Link href="/about" className="text-sm text-slate-700" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="mailto:hello@arca-global.com" className="text-sm text-slate-700">
            Contact
          </a>
          <a
            href="mailto:hello@arca-global.com?subject=Free AI Audit Request"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-400 text-white text-sm font-medium"
          >
            Get a Free Audit
          </a>
        </div>
      )}
    </header>
  );
}
