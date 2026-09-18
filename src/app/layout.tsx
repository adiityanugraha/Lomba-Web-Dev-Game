import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import AmbientParticles from "@/components/AmbientParticles";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const logo = Cormorant_Garamond({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  preload: false,
});
const body = Source_Serif_4({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Octopath Traveler",
  description: "Octopath Traveler: trailer, features, media, and where to play.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${logo.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <ScrollProgress />
        <AmbientParticles />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
