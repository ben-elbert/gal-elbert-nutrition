import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Analytics } from "@/components/Analytics";
import { defaultMetadata } from "./metadata";

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

export const metadata: Metadata = defaultMetadata;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name.he,
              url: "https://gal-elbert-nutrition.vercel.app",
              image: "/images/gal-profile.jpg",
              telephone: siteConfig.contact.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address.he,
                addressLocality: "Herzliya",
                addressCountry: "IL",
              },
              sameAs: [siteConfig.social.facebook].filter(Boolean),
              areaServed: "IL",
              makesOffer: [{ "@type": "Service", name: "ייעוץ תזונתי" }],
            }),
          }}
        />
      </body>
    </html>
  );
}
