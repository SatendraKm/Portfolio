import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ThemeMenu from "@/components/Theme/ThemeMenu";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Satendra Kumar | Full-Stack Software Developer";

const description =
  "Full-stack software developer based in Raipur, India. I build reliable web systems with React, Next.js, Node.js, and SQL.";

const url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title,
  description,
  category: "technology",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Satendra Kumar Portfolio",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@satendrakm27",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <ThemeMenu />
        <Footer />
      </body>
    </html>
  );
}
