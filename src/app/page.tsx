import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PourQui from "@/components/sections/PourQui";
import APropos from "@/components/sections/APropos";
import Kinesiologie from "@/components/sections/Kinesiologie";
import Maderotherapie from "@/components/sections/Maderotherapie";
import Temoignages from "@/components/sections/Temoignages";
import FAQ from "@/components/sections/FAQ";
import Tarifs from "@/components/sections/Tarifs";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Localisation from "@/components/sections/Localisation";

export const metadata: Metadata = {
  title: {
    absolute: "Kinésiologie & maderothérapie à Dunkerque | Estelle Declercq",
  },
  description:
    "Kinésiologue à Dunkerque, Estelle Declercq associe kinésiologie et maderothérapie pour accompagner le stress, les douleurs physiques et le rapport au corps.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kinésiologie & maderothérapie à Dunkerque | Estelle Declercq",
    description:
      "Un accompagnement à Dunkerque pour explorer le lien entre stress, douleurs physiques et rapport au corps.",
    url: "/",
  },
  twitter: {
    title: "Kinésiologie & maderothérapie à Dunkerque | Estelle Declercq",
    description:
      "Stress, douleurs physiques et reconnexion au corps avec Estelle Declercq à Dunkerque.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu">
        <Hero />
        <APropos />
        <PourQui />
        <Kinesiologie />
        <Maderotherapie />
        <Temoignages />
        <FAQ />
        <Localisation />
        <Tarifs />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
