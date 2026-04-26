import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arca AI — AI built for your business",
  description:
    "Arca AI partners with mid-market companies to identify, build, and deploy AI agents across their operations — inside your existing stack, in weeks.",
  metadataBase: new URL("https://arca-global.com"),
  openGraph: {
    title: "Arca AI — AI built for your business",
    description:
      "We work with your team to find where AI can make the biggest impact, then build and ship it.",
    url: "https://arca-global.com",
    siteName: "Arca AI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
