import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PourQui from "@/components/sections/PourQui";
import APropos from "@/components/sections/APropos";
import Kinesiologie from "@/components/sections/Kinesiologie";
import Maderotherapie from "@/components/sections/Maderotherapie";
import Temoignages from "@/components/sections/Temoignages";
import FAQ from "@/components/sections/FAQ";
import Tarifs from "@/components/sections/Tarifs";
import Localisation from "@/components/sections/Localisation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PourQui />
        <APropos />
        <Kinesiologie />
        <Maderotherapie />
        <Temoignages />
        <FAQ />
        <Tarifs />
        <Localisation />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
