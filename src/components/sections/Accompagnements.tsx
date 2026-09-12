import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import CalBookingButton from "@/components/booking/CalBookingButton";

const services = [
  {
    id: "kinesiologie",
    eyebrow: "Kinésiologie",
    title: "Écouter ce que le corps exprime",
    description: [
      "La kinésiologie s’appuie sur un test musculaire doux pour explorer la manière dont le stress, les émotions et le vécu peuvent se manifester dans le corps.",
      "À Dunkerque, Estelle Declercq vous accompagne dans un cadre d’écoute afin de relâcher certaines tensions, retrouver vos ressources et avancer à votre rythme.",
    ],
    points: [
      "Stress et charge émotionnelle",
      "Tensions et ressentis corporels",
      "Confiance et ressources personnelles",
    ],
    image: "/images/seance-kinesiologie.webp",
    imageAlt:
      "Test musculaire doux au cours d’une séance de kinésiologie à Dunkerque",
    href: "/kinesiologie-dunkerque",
    linkLabel: "Tout savoir sur la kinésiologie à Dunkerque",
    booking: "kinesiologie" as const,
  },
  {
    id: "maderotherapie",
    eyebrow: "Madérothérapie",
    title: "Retrouver des sensations corporelles plus légères",
    description: [
      "La madérothérapie est un modelage manuel réalisé avec des instruments en bois. Les gestes ciblent principalement les jambes, avec une pression adaptée à votre sensibilité.",
      "Ce temps de soin invite à se recentrer sur ses sensations, tout en travaillant la tonicité, la circulation et la relation au corps dans une approche progressive.",
    ],
    points: [
      "Modelage ciblé des jambes",
      "Pression ajustée à votre confort",
      "Reconnexion aux sensations du corps",
    ],
    image: "/images/seance-maderotherapie.webp",
    imageAlt:
      "Modelage des jambes avec un rouleau en bois pendant une séance de madérothérapie",
    href: "/maderotherapie-dunkerque",
    linkLabel: "Découvrir la madérothérapie à Dunkerque",
    booking: "maderotherapie" as const,
  },
];

export default function Accompagnements() {
  return (
    <section
      aria-labelledby="accompagnements-title"
      className="bg-warm-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            Les accompagnements
          </p>
          <h2
            id="accompagnements-title"
            className="mt-4 font-editorial text-4xl font-semibold leading-tight tracking-[-0.025em] text-dark-text sm:text-5xl lg:text-6xl"
          >
            Deux approches pour renouer avec votre corps.
          </h2>
          <p className="mt-6 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
            Kinésiologie et madérothérapie offrent deux portes d’entrée
            complémentaires : l’une explore les réponses du corps face au
            stress, l’autre passe par le toucher et le modelage. Chaque séance
            est adaptée à vos besoins et à vos ressentis.
          </p>
        </header>

        <div className="mt-12 space-y-8 lg:mt-16">
          {services.map((service, index) => (
            <article
              id={service.id}
              key={service.id}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem] lg:grid lg:grid-cols-2"
            >
              <div
                className={`relative min-h-64 sm:min-h-80 lg:min-h-full ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 font-editorial text-3xl font-semibold leading-tight text-dark-text sm:text-4xl">
                  {service.title}
                </h3>
                <div className="mt-5 space-y-3 text-base leading-7 text-medium-text">
                  {service.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm font-medium leading-6 text-dark-text"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                        <Check aria-hidden="true" size={12} strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dark-text px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  >
                    {service.linkLabel}
                    <ArrowRight aria-hidden="true" size={18} />
                  </Link>
                  <CalBookingButton
                    booking={service.booking}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-terracotta/35 bg-white px-6 py-3 font-semibold text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  >
                    Réserver
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </CalBookingButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-8 grid gap-6 rounded-[2rem] bg-dark-text px-6 py-8 text-white sm:px-9 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:px-12">
          <div>
            <h3 className="font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Quand le stress se fait sentir dans le corps
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Fatigue, tensions, inconfort ou difficulté à se sentir bien dans
              son corps peuvent parfois s’intensifier pendant les périodes de
              stress. Découvrez comment ces ressentis sont abordés, sans opposer
              le vécu émotionnel aux sensations physiques.
            </p>
          </div>
          <Link
            href="/stress-douleurs-corps"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center font-semibold text-dark-text transition-colors hover:bg-terracotta hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-text"
          >
            Comprendre le lien stress et douleurs
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </aside>
      </div>
    </section>
  );
}
