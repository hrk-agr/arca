import Link from "next/link";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-[7px] bg-brand-500" />
        <span className="absolute inset-0 rounded-[7px] bg-brand-500 opacity-40 blur-[6px] transition-opacity group-hover:opacity-70" />
        <span className="relative font-display text-[13px] font-bold text-white">a</span>
      </span>
      <span className="font-display text-[18px] font-semibold tracking-tight text-ink">
        arca
      </span>
    </Link>
  );
}
