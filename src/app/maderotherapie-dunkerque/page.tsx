import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalBookingButton from "@/components/booking/CalBookingButton";
import { siteConfig } from "@/lib/site";

const canonicalUrl = `${siteConfig.url}/maderotherapie-dunkerque`;

export const metadata: Metadata = {
  title: "Maderothérapie à Dunkerque",
  description:
    "Séance de maderothérapie des jambes à Dunkerque : un modelage aux instruments en bois, réalisé avec une pression adaptée à votre confort.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Maderothérapie à Dunkerque | Estelle Declercq",
    description:
      "Découvrez un modelage manuel et progressif des jambes au cabinet d’Estelle Declercq à Dunkerque.",
    url: canonicalUrl,
    type: "website",
    locale: "fr_FR",
  },
};

const approachPoints = [
  "Un échange préalable sur vos attentes et votre sensibilité",
  "Une préparation manuelle progressive des zones travaillées",
  "Des instruments en bois sélectionnés selon chaque geste",
  "Une pression ajustée tout au long de la séance",
];

export default function MaderotherapieDunkerquePage() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="bg-warm-white">
        <section
          id="accueil"
          className="overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1fr] lg:gap-16 lg:px-10">
            <div>
              <nav aria-label="Fil d’Ariane">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded-lg text-sm font-medium text-terracotta transition-colors hover:text-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  Accueil
                </Link>
              </nav>

              <h1 className="mt-4 max-w-3xl font-editorial text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-dark-text sm:text-6xl lg:text-7xl">
                Maderothérapie à Dunkerque : un modelage précis des jambes
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-medium-text sm:text-xl">
                La maderothérapie utilise des instruments en bois de formes
                variées pour travailler les jambes par des gestes manuels
                ciblés. Estelle adapte la pression à votre sensibilité et à vos
                ressentis pendant toute la séance.
              </p>

              <p className="mt-6 flex items-start gap-3 text-base font-medium text-dark-text">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-terracotta"
                  size={20}
                />
                {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                {siteConfig.address.city}
              </p>

              <CalBookingButton
                booking="maderotherapie"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                Réserver une séance
                <ArrowRight aria-hidden="true" size={18} />
              </CalBookingButton>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem] lg:aspect-[4/5]">
              <Image
                src="/images/seance-maderotherapie.webp"
                alt="Illustration d’un modelage des jambes réalisé avec un rouleau en bois"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
            </figure>
          </div>
        </section>

        <section id="maderotherapie" className="bg-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl">
                Une séance progressive, jamais automatique
              </h2>
              <p className="mt-5 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
                Le soin est consacré aux jambes et dure environ 40 minutes. Les
                gestes sont modulés au fil de la séance : vous pouvez signaler
                à tout moment une zone sensible ou demander d’ajuster la
                pression.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {approachPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl bg-white p-5 text-sm leading-6 text-dark-text"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Check aria-hidden="true" size={15} strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="a-propos" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl">
                Retrouver une attention plus douce au corps
              </h2>
              <p className="mt-5 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
                Ce temps de modelage peut offrir une occasion de ralentir et de
                porter une attention différente aux sensations des jambes. La
                démarche reste une pratique de bien-être : aucun résultat
                esthétique ou thérapeutique ne peut être garanti.
              </p>
            </div>

            <aside className="rounded-3xl bg-dark-text p-7 text-white sm:p-9">
              <h2 className="font-editorial text-3xl font-semibold">
                Avant de réserver
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Signalez toute douleur inhabituelle, problème de santé,
                grossesse ou traitement en cours. En cas de doute sur la
                compatibilité du modelage avec votre situation, demandez
                d’abord conseil à un professionnel de santé.
              </p>
            </aside>
          </div>
        </section>

        <section id="kinesiologie" className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-2">
              <div className="p-7 sm:p-9">
                <h2 className="font-editorial text-3xl font-semibold text-dark-text sm:text-4xl">
                  Deux façons d’aborder le rapport au corps
                </h2>
                <p className="mt-4 leading-7 text-medium-text">
                  La maderothérapie agit par le toucher et le modelage. La
                  kinésiologie propose une écoute plus globale du stress, des
                  émotions et des ressentis. Les deux approches peuvent rester
                  distinctes ou se compléter selon votre demande.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 bg-terracotta p-7 sm:p-9">
                <Link
                  href="/kinesiologie-dunkerque"
                  className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-xl bg-white px-5 py-3 font-semibold text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-text focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
                >
                  La kinésiologie à Dunkerque
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
                <Link
                  href="/stress-douleurs-corps"
                  className="group inline-flex min-h-12 items-center justify-between gap-3 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
                >
                  Stress, douleurs et sensations corporelles
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="tarifs" className="bg-dark-text py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold">
                Découvrir la séance de maderothérapie
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
                Retrouvez le tarif, la durée et les coordonnées d’Estelle pour
                convenir d’un rendez-vous à Dunkerque.
              </p>
            </div>
            <CalBookingButton
              booking="maderotherapie"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark-text"
            >
              Réserver une séance
              <ArrowRight aria-hidden="true" size={18} />
            </CalBookingButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
