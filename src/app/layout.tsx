import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estelle Declercq – Kinésiologue & Maderothérapeute",
  description:
    "Estelle Declercq, kinésiologue et maderothérapeute certifiée. Séances de kinésiologie, maderothérapie, gestion du stress, bien-être. Prenez rendez-vous en ligne.",
  keywords: [
    "kinésiologue",
    "kinésiologie",
    "maderothérapie",
    "maderothérapeute",
    "bien-être",
    "stress",
    "Estelle Declercq",
    "Touch For Health",
    "Brain Gym",
  ],
  openGraph: {
    title: "Estelle Declercq – Kinésiologue & Maderothérapeute",
    description:
      "Reconnectez-vous à votre corps. Séances de kinésiologie et maderothérapie avec Estelle Declercq.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estelle Declercq – Kinésiologue & Maderothérapeute",
    description:
      "Reconnectez-vous à votre corps. Séances de kinésiologie et maderothérapie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  name: "Estelle Declercq – Kinésiologue & Maderothérapeute",
  description:
    "Séances de kinésiologie et maderothérapie pour le bien-être, la gestion du stress et l'équilibre corporel.",
  url: "https://www.estelledeclercq.fr",
  telephone: "+33600000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Votre Ville",
    addressCountry: "FR",
  },
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
