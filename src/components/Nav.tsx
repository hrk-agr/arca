import Wordmark from "./Wordmark";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark tone="light" />
        <a
          href="mailto:hello@arca-global.com?subject=Arca demo"
          className="inline-flex items-center rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white hover:bg-brand-400"
        >
          Get a demo
        </a>
      </div>
    </header>
  );
}
