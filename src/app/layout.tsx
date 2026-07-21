import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Full Stack Developer`,
    template: `%s — ${site.name}`,
  },
  description:
    "Full-Stack Engineer specializing in backend systems, cloud infrastructure, and applied AI. I build production-ready software from design to deployment.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — Full Stack Developer`,
    description:
      "Scalable systems, clean architecture, and production-ready fullstack engineering.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack Developer`,
    description:
      "Scalable systems, clean architecture, and production-ready fullstack engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ink antialiased">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
