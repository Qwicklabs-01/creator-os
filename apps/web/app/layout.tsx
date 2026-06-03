import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreatorOS AI — The AI-Powered Creative Operating System",
  description:
    "CreatorOS AI is a fully autonomous, open-source AI marketing operating system. Create content, generate images & videos, analyze trends, manage campaigns, and scale from solo creator to agency.",
  keywords: [
    "AI marketing",
    "content creation",
    "open source",
    "brand management",
    "AI content agency",
    "video generation",
    "image synthesis",
  ],
  openGraph: {
    title: "CreatorOS AI — The AI-Powered Creative Operating System",
    description:
      "Build, create, and scale with the most powerful open-source AI content platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-text antialiased selection:bg-primary/30 selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
