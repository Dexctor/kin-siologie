import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Droplets,
  Feather,
  Leaf,
  Sparkles,
  Waves,
} from "lucide-react";
import CalBookingButton from "@/components/booking/CalBookingButton";

const benefits = [
  { icon: Waves, label: "Sensation de jambes plus légères" },
  { icon: Droplets, label: "Gestes favorisant la circulation" },
  { icon: CircleDot, label: "Travail ciblé sur la tonicité" },
  { icon: Sparkles, label: "Attention portée à la texture de la peau" },
  { icon: Feather, label: "Temps de relâchement corporel" },
  { icon: Leaf, label: "Technique manuelle non invasive" },
];

const steps = [
  {
    number: "01",
    title: "Faire le point",
    description:
      "Nous définissons les zones à travailler, vos attentes et les éventuelles précautions à prendre.",
  },
  {
    number: "02",
    title: "Préparer les tissus",
    description:
      "L’huile et les premiers gestes manuels installent le soin progressivement et confortablement.",
  },
  {
    number: "03",
    title: "Modeler avec les outils",
    description:
      "Les instruments en bois sont choisis selon la zone et utilisés avec une pression ajustée.",
  },
  {
    number: "04",
    title: "Terminer en douceur",
    description:
      "Un temps de finition apaise les tissus, puis nous échangeons sur vos ressentis.",
  },
];

export default function Maderotherapie() {
  return (
    <section id="maderotherapie" className="bg-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <h2 className="font-editorial text-4xl font-semibold leading-tight tracking-[-0.025em] text-dark-text sm:text-5xl lg:text-6xl">
              La maderothérapie, un modelage précis aux outils en bois.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
              <p>
                La maderothérapie est une technique manuelle qui utilise des
                instruments en bois de formes différentes pour modeler et
                stimuler les jambes de façon ciblée.
              </p>
              <p>
                Elle complète la kinésiologie par un travail direct sur les
                sensations corporelles. La pression reste ajustée à votre
                sensibilité pour vous aider à retrouver une présence plus douce
                à votre corps.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CalBookingButton
                booking="maderotherapie"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                Réserver une séance
                <ArrowUpRight aria-hidden="true" size={18} />
              </CalBookingButton>
              <Link
                href="/maderotherapie-dunkerque"
                className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 font-semibold text-dark-text transition-colors hover:bg-white hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                Découvrir la maderothérapie à Dunkerque
              </Link>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[2rem] bg-white editorial-shadow sm:rounded-[2.5rem]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/seance-maderotherapie.webp"
                alt="Illustration d’un modelage des jambes avec un rouleau en bois"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 52vw"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-terracotta-light/60 bg-white px-5 py-4 text-sm sm:px-6">
              <span className="font-medium text-dark-text">
                Soin ciblé des jambes
              </span>
              <span className="text-muted-text">40 minutes</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                className="flex items-center gap-3 rounded-2xl bg-white/75 px-5 py-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Icon aria-hidden="true" size={19} />
                </span>
                <span className="text-sm font-medium leading-5 text-dark-text">
                  {benefit.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[0.68fr_1.32fr]">
          <div className="flex flex-col justify-between bg-terracotta p-7 text-white sm:p-9 lg:p-11">
            <div>
              <h3 className="font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
                Une technique précise, une pression toujours ajustée.
              </h3>
            </div>
            <p className="mt-8 border-t border-white/25 pt-6 text-sm leading-6 text-white/90">
              Vous restez actrice de la séance : la pression et les gestes sont
              adaptés à votre confort tout au long du soin.
            </p>
          </div>

          <ol className="p-6 sm:p-8 lg:p-10">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-2 border-b border-terracotta-light/70 py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[52px_1fr] sm:gap-5"
              >
                <span className="font-editorial text-2xl text-terracotta">
                  {step.number}
                </span>
                <div>
                  <h4 className="font-semibold text-dark-text">{step.title}</h4>
                  <p className="mt-1.5 text-sm leading-6 text-medium-text">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
