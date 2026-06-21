import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/layout/Starfield";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rudra Bambal | Portfolio",
  description: "Personal portfolio of Rudra Bambal, an AI & ML Engineer and Backend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Fixed canvas sits behind everything at all times */}
        <Starfield />
        {children}
      </body>
    </html>
  );
}

