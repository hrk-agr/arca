import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arca — Ask your company anything",
  description:
    "Arca is an enterprise knowledge base that meets information where it already lives — Slack, code, wikis, incidents — and turns it into cited, trustworthy answers for humans, automations, and agents.",
  metadataBase: new URL("https://arca-global.com"),
  openGraph: {
    title: "Arca — Ask your company anything",
    description:
      "One embeddings table. Every source. Cited answers for humans, automations, and agents.",
    url: "https://arca-global.com",
    siteName: "Arca",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
