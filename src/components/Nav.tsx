import Wordmark from "./Wordmark";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line/50 bg-ink-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm text-ink-mute md:flex">
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#build" className="hover:text-ink">
            Use cases
          </a>
          <a href="#developers" className="hover:text-ink">
            Developers
          </a>
          <a href="#pricing" className="hover:text-ink">
            Pricing
          </a>
        </nav>
        <a
          href="mailto:hello@arca-global.com?subject=Arca early access"
          className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-medium text-ink-paper shadow-sm transition-all duration-300 hover:bg-ink-soft"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
