import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import {
  DM_Sans as V0_Font_DM_Sans,
  Space_Mono as V0_Font_Space_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});
const _spaceMono = V0_Font_Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arisandi Satria Jeujanan | Fullstack Developer",
  description:
    "Portfolio of Arisandi Satria Jeujanan, a passionate Fullstack Developer specializing in React, React Native, Next.js, and Express",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
