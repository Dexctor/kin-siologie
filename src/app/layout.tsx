import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import BookingDialogProvider from "@/components/booking/BookingDialogProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kinésiologue à Dunkerque | Estelle Declercq",
    template: "%s | Estelle Declercq",
  },
  description:
    "Kinésiologie et maderothérapie à Dunkerque avec Estelle Declercq : un accompagnement autour du stress, des douleurs physiques et du rapport au corps.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteConfig.url}/#business` },
    },
    {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.businessName,
      description:
        "Accompagnement par la kinésiologie et la maderothérapie autour du rapport au corps, du stress et des douleurs physiques à Dunkerque.",
      url: siteConfig.url,
      image: `${siteConfig.url}/images/hero-consultation.webp`,
      telephone: siteConfig.phone.international,
      email: siteConfig.email,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        postalCode: siteConfig.address.postalCode,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.address.latitude,
        longitude: siteConfig.address.longitude,
      },
      areaServed: {
        "@type": "City",
        name: siteConfig.address.city,
      },
      founder: { "@id": `${siteConfig.url}/#estelle-declercq` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accompagnements",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Séance de kinésiologie",
              url: `${siteConfig.url}/kinesiologie-dunkerque`,
              provider: { "@id": `${siteConfig.url}/#business` },
              areaServed: siteConfig.address.city,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Séance de maderothérapie",
              url: `${siteConfig.url}/maderotherapie-dunkerque`,
              provider: { "@id": `${siteConfig.url}/#business` },
              areaServed: siteConfig.address.city,
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#estelle-declercq`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Kinésiologue et maderothérapeute",
      worksFor: { "@id": `${siteConfig.url}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BookingDialogProvider>{children}</BookingDialogProvider>
      </body>
    </html>
  );
}
