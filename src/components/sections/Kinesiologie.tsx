import Image from "next/image";
import { ArrowUpRight, Check, Clock3, HandHeart } from "lucide-react";

const areas = [
  "Apaiser la sensation de stress",
  "Soutenir l’attention et la concentration",
  "Mieux accueillir les émotions",
  "Relâcher les tensions ressenties",
  "Retrouver ses propres ressources",
  "Favoriser un équilibre plus global",
];

const steps = [
  {
    number: "01",
    title: "Échange & écoute",
    description:
      "Nous partons de votre demande, de votre vécu et de ce que vous souhaitez faire évoluer.",
  },
  {
    number: "02",
    title: "Test musculaire",
    description:
      "Ce retour doux du corps aide à orienter la séance et à repérer les priorités du moment.",
  },
  {
    number: "03",
    title: "Rééquilibrage",
    description:
      "Mouvements, points réflexes ou visualisations sont choisis selon votre réponse et votre confort.",
  },
  {
    number: "04",
    title: "Ancrage & bilan",
    description:
      "Nous faisons le point sur vos ressentis et sur la manière de prolonger le travail au quotidien.",
  },
];

export default function Kinesiologie() {
  return (
    <section id="kinesiologie" className="bg-warm-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <figure className="relative overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/seance-kinesiologie.webp"
                alt="Test musculaire réalisé pendant une séance de kinésiologie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 51vw"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-terracotta-light/60 bg-white px-5 py-4 text-sm sm:px-6">
              <span className="flex items-center gap-2 font-medium text-dark-text">
                <HandHeart aria-hidden="true" size={18} className="text-terracotta" />
                Un geste doux, guidé par vos réponses
              </span>
              <span className="hidden items-center gap-2 text-muted-text sm:flex">
                <Clock3 aria-hidden="true" size={16} />
                1 h à 1 h 30
              </span>
            </figcaption>
          </figure>

          <div>
            <h2 className="font-editorial text-4xl font-semibold leading-tight tracking-[-0.025em] text-dark-text sm:text-5xl lg:text-6xl">
              La kinésiologie écoute les signaux du corps autrement.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
              <p>
                La kinésiologie utilise le test musculaire comme un outil de
                dialogue avec le corps. Il aide à identifier ce qui crée une
                tension ou un déséquilibre dans la situation qui vous amène.
              </p>
              <p>
                La séance reste habillée, douce et adaptée à vos ressentis.
                L’objectif est de vous permettre de retrouver vos propres
                ressources, sans forcer ni brusquer.
              </p>
            </div>
            <a
              href="#tarifs"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition-colors hover:bg-dark-text"
            >
              Réserver une séance
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-y border-terracotta-light/70 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:py-12">
          <div>
            <h3 className="max-w-md font-editorial text-3xl font-semibold leading-tight text-dark-text sm:text-4xl">
              Ce que l’on peut explorer ensemble.
            </h3>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 border-t border-terracotta-light/70 py-4 text-sm font-medium text-dark-text first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta">
                  <Check aria-hidden="true" size={14} strokeWidth={2.5} />
                </span>
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-dark-text px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-12 lg:py-14">
          <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-editorial text-3xl font-semibold sm:text-4xl">
                Une séance en quatre temps
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/65">
              Chaque étape s’adapte à vous : le cadre est clair, le contenu ne
              suit jamais un protocole automatique.
            </p>
          </div>

          <ol className="mt-3 grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="border-b border-white/15 py-7 md:px-6 md:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0 lg:last:pr-0 lg:first:pl-0"
              >
                <span className="font-editorial text-3xl text-terracotta-light/65">
                  {step.number}
                </span>
                <h4 className="mt-4 text-base font-semibold text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
