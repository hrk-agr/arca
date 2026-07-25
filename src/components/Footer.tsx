import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Wordmark tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            The context engine that meets your company&apos;s information where
            it already lives — and answers with citations.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Contact
          </span>
          <a
            href="mailto:hello@arca-global.com"
            className="text-slate-400 hover:text-white"
          >
            hello@arca-global.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Arca. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            One embeddings table · every source
          </p>
        </div>
      </div>
    </footer>
  );
}
