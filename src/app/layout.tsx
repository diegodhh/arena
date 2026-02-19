import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diegodhh.github.io/arena"),
  title: "The Arena — Contained AI Competition Through Physical Isolation",
  description:
    "A proposal for physically isolated computing infrastructure where AI actors compete at full speed, contained by walls we can turn off.",
  icons: {
    icon: "/arena/icon.svg",
  },
  openGraph: {
    title: "The Arena",
    description:
      "A Proposal for Contained AI Competition Through Physical Isolation",
    type: "article",
    url: "https://diegodhh.github.io/arena/",
    siteName: "The Arena",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Arena",
    description:
      "A Proposal for Contained AI Competition Through Physical Isolation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
