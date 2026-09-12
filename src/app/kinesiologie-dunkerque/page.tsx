import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalBookingButton from "@/components/booking/CalBookingButton";
import { siteConfig } from "@/lib/site";

const canonicalUrl = `${siteConfig.url}/kinesiologie-dunkerque`;

export const metadata: Metadata = {
  title: "Kinésiologie à Dunkerque",
  description:
    "Séances de kinésiologie à Dunkerque avec Estelle Declercq, pour explorer le stress, les émotions et les ressentis corporels à votre rythme.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Kinésiologie à Dunkerque | Estelle Declercq",
    description:
      "Un accompagnement doux à Dunkerque pour mieux écouter les ressentis du corps et mobiliser ses propres ressources.",
    url: canonicalUrl,
    type: "website",
    locale: "fr_FR",
  },
};

const sessionPoints = [
  "Un échange pour préciser votre demande et votre vécu",
  "Un test musculaire utilisé comme outil de dialogue avec le corps",
  "Des techniques choisies selon vos réponses et votre confort",
  "Un temps de bilan pour accueillir les ressentis après la séance",
];

export default function KinesiologieDunkerquePage() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="bg-warm-white">
        <section
          id="accueil"
          className="overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-10">
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
                Kinésiologie à Dunkerque : écouter les signaux du corps
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-medium-text sm:text-xl">
                Estelle Declercq vous accueille pour une séance individuelle
                centrée sur votre demande, vos ressentis et les ressources que
                vous souhaitez retrouver. L’accompagnement avance sans forcer,
                dans le respect de votre rythme.
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

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CalBookingButton
                  booking="kinesiologie"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  Réserver une séance
                  <ArrowRight aria-hidden="true" size={18} />
                </CalBookingButton>
              </div>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem] lg:aspect-[4/5]">
              <Image
                src="/images/seance-kinesiologie.webp"
                alt="Illustration d’un test musculaire réalisé pendant une séance de kinésiologie"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 44vw"
              />
            </figure>
          </div>
        </section>

        <section id="kinesiologie" className="bg-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl">
                Comment se déroule une séance ?
              </h2>
              <p className="mt-5 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
                La séance reste habillée. Le test musculaire donne un retour
                doux qui aide à orienter l’échange et les techniques proposées.
                Il ne constitue ni un diagnostic ni un examen médical.
              </p>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {sessionPoints.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl bg-white p-5 text-sm leading-6 text-dark-text"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10 font-semibold text-terracotta">
                    {index + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="a-propos" className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 border-y border-terracotta-light/70 py-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text">
                  Une démarche centrée sur votre vécu
                </h2>
                <p className="mt-5 text-base leading-7 text-medium-text">
                  Stress, émotions, fatigue, difficultés de concentration ou
                  tensions ressenties peuvent être abordés comme des points de
                  départ. Il ne s’agit pas de leur attribuer une cause unique,
                  mais d’observer ce qui se présente pour vous aujourd’hui.
                </p>
              </div>
              <div className="rounded-3xl bg-dark-text p-7 text-white sm:p-9">
                <h2 className="font-editorial text-3xl font-semibold">
                  Un accompagnement complémentaire
                </h2>
                <p className="mt-4 text-base leading-7 text-white/75">
                  La kinésiologie ne remplace pas une consultation, un
                  diagnostic ou un traitement médical. Une douleur nouvelle,
                  intense ou persistante doit être évaluée par un professionnel
                  de santé.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="maderotherapie" className="bg-cream py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <Link
              href="/stress-douleurs-corps"
              className="group rounded-3xl bg-white p-7 transition-shadow hover:card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 sm:p-8"
            >
              <h2 className="font-editorial text-3xl font-semibold text-dark-text">
                Stress, tensions et rapport au corps
              </h2>
              <p className="mt-3 leading-7 text-medium-text">
                Comprendre pourquoi les sensations physiques et le stress
                méritent une écoute globale, sans raccourci médical.
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-terracotta">
                Lire le guide
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </span>
            </Link>

            <Link
              href="/maderotherapie-dunkerque"
              className="group rounded-3xl bg-terracotta p-7 text-white transition-shadow hover:card-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-text focus-visible:ring-offset-2 sm:p-8"
            >
              <h2 className="font-editorial text-3xl font-semibold">
                Découvrir la maderothérapie
              </h2>
              <p className="mt-3 leading-7 text-white/80">
                Un modelage manuel des jambes aux instruments en bois, avec une
                pression adaptée à votre confort.
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold">
                Explorer cette approche
                <ArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </span>
            </Link>
          </div>
        </section>

        <section id="tarifs" className="bg-dark-text py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold">
                Vous souhaitez faire le point ?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
                Consultez les durées, les tarifs et les coordonnées pour
                convenir d’une séance au cabinet de Dunkerque.
              </p>
            </div>
            <CalBookingButton
              booking="kinesiologie"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark-text"
            >
              Prendre rendez-vous
              <ArrowRight aria-hidden="true" size={18} />
            </CalBookingButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
