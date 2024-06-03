import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marp Web-Slide Template",
  description: "Marp Web-Slide Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">ホーム</Link>
        </nav>
        <h1>Marp Slides</h1>
        {children}
      </body>
    </html>
  );
}
