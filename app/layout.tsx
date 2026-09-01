import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dipti Aryal — UI/UX Designer",
  description:
    "Portfolio of Dipti Aryal, UI/UX Designer and Computer Science Graduate based in Kathmandu, Nepal. Available for Junior UI/UX Designer and Product Design roles.",
  keywords: ["UI/UX Designer", "Portfolio", "Figma", "Product Design", "Kathmandu", "Nepal"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className="bg-[#f8f8fb] text-[#0a0a0f] antialiased selection:bg-violet-200 selection:text-violet-900"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
