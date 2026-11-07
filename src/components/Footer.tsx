import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-vault-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Wordmark tone="light" />
          <p className="max-w-xs text-sm font-light leading-relaxed text-ink-faint">
            Everything about a project in one place, with agents that can
            answer questions, build things and run routines on it.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint/70">
            Contact
          </span>
          <a
            href="mailto:hello@arca-global.com"
            className="text-ink-faint hover:text-ink-paper"
          >
            hello@arca-global.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-ink-faint/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Arca. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Your keys · per seat · no token bills
          </p>
        </div>
      </div>
    </footer>
  );
}
