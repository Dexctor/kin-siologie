import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalBookingButton from "@/components/booking/CalBookingButton";
import { siteConfig } from "@/lib/site";

const canonicalUrl = `${siteConfig.url}/stress-douleurs-corps`;

export const metadata: Metadata = {
  title: "Stress et douleurs à Dunkerque",
  description:
    "Mieux écouter les liens possibles entre stress, tensions et ressentis corporels grâce à un accompagnement prudent et personnalisé à Dunkerque.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Stress, tensions et rapport au corps à Dunkerque",
    description:
      "Kinésiologie et maderothérapie : deux approches complémentaires pour remettre les sensations corporelles au centre, sans remplacer le suivi médical.",
    url: canonicalUrl,
    type: "website",
    locale: "fr_FR",
  },
};

export default function StressDouleursCorpsPage() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="bg-warm-white">
        <section
          id="accueil"
          className="overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:px-10">
            <div>
              <nav aria-label="Fil d’Ariane">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center rounded-lg text-sm font-medium text-terracotta transition-colors hover:text-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  Accueil
                </Link>
              </nav>

              <h1 className="mt-4 max-w-4xl font-editorial text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-dark-text sm:text-6xl lg:text-7xl">
                Stress et douleurs physiques : se reconnecter au corps
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-medium-text sm:text-xl">
                Le stress peut s’accompagner de tensions, modifier le sommeil
                ou rendre certaines sensations plus présentes. À l’inverse,
                vivre avec un inconfort physique peut aussi peser sur
                l’équilibre émotionnel. Chaque situation reste singulière.
              </p>

              <p className="mt-6 flex items-start gap-3 text-base font-medium text-dark-text">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-terracotta"
                  size={20}
                />
                Au cabinet : {siteConfig.address.streetAddress},{" "}
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>

              <CalBookingButton
                booking="general"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                Choisir un accompagnement
                <ArrowRight aria-hidden="true" size={18} />
              </CalBookingButton>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem] lg:aspect-[4/5]">
              <Image
                src="/images/hero-consultation.webp"
                alt="Illustration d’un temps d’écoute consacré aux ressentis corporels"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 44vw"
              />
            </figure>
          </div>
        </section>

        <section id="a-propos" className="bg-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl">
                Accueillir ce que vous ressentez, sans tirer de conclusion hâtive
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
              <p>
                Une douleur physique peut avoir de nombreuses origines. Le
                stress n’en est pas une explication automatique, même lorsqu’il
                semble accentuer une tension ou la manière dont elle est vécue.
              </p>
              <p>
                L’accompagnement proposé part donc de vos sensations et de
                votre vécu, sans établir de diagnostic. L’objectif est de vous
                aider à retrouver des repères corporels et une écoute plus
                nuancée de vos besoins.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
            <div className="rounded-[2rem] border border-terracotta-light/70 bg-white p-7 sm:p-10">
              <h2 className="font-editorial text-4xl font-semibold text-dark-text">
                Quand consulter un professionnel de santé ?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-medium-text">
                Toute douleur nouvelle, intense, persistante ou qui s’aggrave
                mérite un avis médical. Il en va de même lorsqu’elle
                s’accompagne de symptômes inhabituels ou affecte fortement le
                quotidien. La kinésiologie et la maderothérapie sont des
                pratiques complémentaires de bien-être ; elles ne remplacent
                jamais un diagnostic, un traitement ou un suivi médical.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <header className="max-w-3xl">
              <h2 className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl">
                Deux approches, selon votre besoin du moment
              </h2>
              <p className="mt-5 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
                L’une passe par le test musculaire et l’échange, l’autre par un
                modelage manuel ciblé des jambes. Estelle peut vous aider à
                identifier le cadre le plus cohérent avec votre demande.
              </p>
            </header>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article id="kinesiologie" className="rounded-[2rem] bg-white p-7 sm:p-9">
                <h3 className="font-editorial text-3xl font-semibold text-dark-text sm:text-4xl">
                  La kinésiologie
                </h3>
                <p className="mt-4 leading-7 text-medium-text">
                  Elle permet d’explorer la façon dont le stress, les émotions
                  et le vécu résonnent dans les sensations corporelles. La
                  séance reste habillée, douce et adaptée à votre rythme.
                </p>
                <Link
                  href="/kinesiologie-dunkerque"
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  Découvrir la kinésiologie à Dunkerque
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              </article>

              <article
                id="maderotherapie"
                className="rounded-[2rem] bg-terracotta p-7 text-white sm:p-9"
              >
                <h3 className="font-editorial text-3xl font-semibold sm:text-4xl">
                  La maderothérapie
                </h3>
                <p className="mt-4 leading-7 text-white/80">
                  Elle invite à revenir directement aux sensations grâce à un
                  modelage des jambes aux instruments en bois. La pression est
                  ajustée en permanence à votre confort.
                </p>
                <Link
                  href="/maderotherapie-dunkerque"
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
                >
                  Découvrir la maderothérapie à Dunkerque
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section id="tarifs" className="bg-dark-text py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <h2 className="font-editorial text-4xl font-semibold">
                Trouver l’approche qui vous convient
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
                Consultez les séances proposées et contactez Estelle si vous
                hésitez entre la kinésiologie et la maderothérapie.
              </p>
            </div>
            <Link
              href="/#tarifs"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark-text"
            >
              Voir les séances et tarifs
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
