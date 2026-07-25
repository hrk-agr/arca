import Link from "next/link";

/* Isometric cube mark — arca, the chest that holds your context. */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="arca-top" x1="4" y1="3" x2="20" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5C4FF" />
          <stop offset="1" stopColor="#8EB3FD" />
        </linearGradient>
        <linearGradient id="arca-left" x1="4" y1="7.5" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5E8CF9" />
          <stop offset="1" stopColor="#3B6AF0" />
        </linearGradient>
        <linearGradient id="arca-right" x1="12" y1="12" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#254FDD" />
          <stop offset="1" stopColor="#1D3EBE" />
        </linearGradient>
      </defs>
      <path d="M12 2.6 20.2 7.3 12 12 3.8 7.3Z" fill="url(#arca-top)" />
      <path d="M3.8 7.3 12 12v9.4L3.8 16.7Z" fill="url(#arca-left)" />
      <path d="M20.2 7.3 12 12v9.4l8.2-4.7Z" fill="url(#arca-right)" />
    </svg>
  );
}

export default function Wordmark({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-6 w-6 items-center justify-center">
        <LogoMark className="relative h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-brand-500 opacity-0 blur-[10px] transition-opacity duration-300 group-hover:opacity-40" />
      </span>
      <span
        className={`font-display text-[19px] font-semibold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        arca
      </span>
    </Link>
  );
}
