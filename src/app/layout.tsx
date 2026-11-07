import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arca — Everything about a project, in one place",
  description:
    "Arca brings a project's emails, files, chats and meeting notes into one place, keeps a living wiki of it, and lets agents answer questions, build artifacts and run routines on top. Bring your own key; priced per seat, not per token.",
  metadataBase: new URL("https://arca-global.com"),
  openGraph: {
    title: "Arca — Everything about a project, in one place",
    description:
      "Send a project's emails, files and chats to Arca. It keeps a living wiki of the project, and agents can answer questions, build artifacts and run routines on it.",
    url: "https://arca-global.com",
    siteName: "Arca",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
