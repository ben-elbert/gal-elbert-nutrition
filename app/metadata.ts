import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://gal-elbert-nutrition.vercel.app"), // Update with your domain
  title: {
    default: siteConfig.name.he,
    template: `%s | ${siteConfig.name.he}`,
  },
  description: siteConfig.valuePropositions.he[0],
  keywords: [
    "תזונאית קלינית",
    "תזונה",
    "דיאטה",
    "ניהול משקל",
    "בריאות המעיים",
    "תזונה בהריון",
    "תזונה לקשישים",
    "הרצליה",
    "גל הלברט",
    "ייעוץ תזונתי",
    "תוכנית תזונה אישית",
    "דיאטנית",
  ],
  authors: [{ name: "Gal Elbert", url: "https://gal-elbert-nutrition.vercel.app" }],
  creator: "Gal Elbert",
  publisher: "Gal Elbert",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://gal-elbert-nutrition.vercel.app",
    title: siteConfig.name.he,
    description: siteConfig.valuePropositions.he[0],
    siteName: siteConfig.name.he,
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: siteConfig.name.he,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name.he,
    description: siteConfig.valuePropositions.he[0],
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://gal-elbert-nutrition.vercel.app",
  },
};
