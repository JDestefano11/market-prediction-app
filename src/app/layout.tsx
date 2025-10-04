// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import Header from "@/app/components/Header";
import TickerTaper from "@/app/components/TickerTaper";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-headers",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-financial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stock Market Prediction",
  description: "Advanced stock market prediction application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <TickerTaper />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}