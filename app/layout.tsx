import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Analytics } from "@/components/Analytics";

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name.he,
  description: siteConfig.valuePropositions.he[0],
  keywords: ["תזונאית", "תזונה קלינית", "ניהול משקל", "בריאות המעיים", "הרצליה", "גל הלברט", "ייעוץ תזונתי"],
  authors: [{ name: "Gal Elbert" }],
  openGraph: {
    title: siteConfig.name.he,
    description: siteConfig.valuePropositions.he[0],
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${rubik.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics 
          googleAnalyticsId={siteConfig.analytics.googleAnalyticsId}
          metaPixelId={siteConfig.analytics.metaPixelId}
        />
      </body>
    </html>
  );
}
