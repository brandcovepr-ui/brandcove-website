import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const dancing = localFont({
  src: "../fonts/Handscript.ttf",
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BrandCove — Hire the Creative Talent You Need",
  description:
    "A curated marketplace of the six creative roles every early-stage founder needs. Vetted talent. No noise. Just the right hire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancing.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
