import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Image src="/logo.png" alt="Arca AI" width={90} height={30} />
          </Link>
          <p className="text-sm text-slate-500 max-w-xs">
            AI built for your business, deployed inside your existing stack.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</span>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
            <Link href="/use-cases" className="text-slate-600 hover:text-slate-900 transition-colors">Use Cases</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact</span>
            <a href="mailto:hello@arca-global.com" className="text-slate-600 hover:text-slate-900 transition-colors">
              hello@arca-global.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 max-w-6xl mx-auto px-6 py-4">
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Arca AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
