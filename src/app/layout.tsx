import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arca — Context Engine for Modern Product Teams",
  description:
    "Arca reconstructs the context scattered across Slack, code, wikis, and incidents into cited answers that engineers, automations, and agents can trust.",
  metadataBase: new URL("https://arca-global.com"),
  openGraph: {
    title: "Arca — Context Engine for Modern Product Teams",
    description:
      "One embeddings table. Every source. Cited answers for humans, automations, and agents.",
    url: "https://arca-global.com",
    siteName: "Arca",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
