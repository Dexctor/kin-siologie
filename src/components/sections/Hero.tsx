"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  CalendarCheck,
  Check,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import CalBookingButton from "@/components/booking/CalBookingButton";

const certifications = [
  {
    label: "EMNAK",
    name: "École de kinésiologie",
    detail:
      "Formation fondamentale au test musculaire et aux techniques de rééquilibrage.",
  },
  {
    label: "TFH",
    name: "Touch For Health",
    detail:
      "Approche douce qui associe test musculaire, points réflexes et mouvements.",
  },
  {
    label: "TIOC",
    name: "Three In One Concept, niveau 9",
    detail:
      "Un travail qui relie le corps, les émotions et les habitudes de pensée.",
  },
  {
    label: "KCS",
    name: "Kinésiologie cranio-sacrée, niveau 1",
    detail:
      "Techniques douces centrées sur le relâchement et l’écoute du corps.",
  },
  {
    label: "BG",
    name: "Brain Gym, 3D et 7D",
    detail:
      "Mouvements simples visant à soutenir l’attention et la coordination.",
  },
  {
    label: "KH",
    name: "Kinésiologie harmonique, niveau 1",
    detail:
      "Approche complémentaire attentive aux ressentis et au rythme de chacun.",
  },
];

const reassurance = [
  "Cabinet à Dunkerque",
  "Approche douce et personnalisée",
  "Adultes, adolescents et enfants",
];

export default function Hero() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-warm-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-72 w-1/3 border-l border-terracotta-light/50 bg-cream/45"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
              Reconnectez-vous à votre corps
            </p>
            <h1 className="max-w-3xl font-editorial text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.035em] text-dark-text sm:text-6xl lg:text-[5.35rem]">
              Kinésiologie &amp; maderothérapie
              <span className="block italic text-terracotta">à Dunkerque.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-medium-text sm:text-xl">
              J’associe kinésiologie et maderothérapie pour explorer avec vous
              les liens possibles entre stress, douleurs physiques et rapport
              au corps, sans forcer et à votre rythme.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CalBookingButton
                booking="general"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-white shadow-[0_12px_28px_rgba(94,43,25,0.18)] transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                <CalendarCheck aria-hidden="true" size={19} />
                Prendre rendez-vous
              </CalBookingButton>
              <a
                href="#kinesiologie"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-dark-text transition-colors hover:bg-cream"
              >
                Découvrir l’accompagnement
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </div>

            <ul className="mt-9 grid max-w-xl gap-3 text-sm text-medium-text sm:grid-cols-3">
              {reassurance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Check aria-hidden="true" size={13} strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem]">
              <Image
                src="/images/hero-consultation.webp"
                alt="Illustration d’un accompagnement individuel dans un cabinet lumineux"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 45vw"
              />
            </div>

            <figcaption className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/92 p-4 shadow-xl shadow-dark-text/10 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta">
                  <Sparkles aria-hidden="true" size={18} />
                </span>
                <p className="text-sm font-medium leading-5 text-dark-text">
                  Un espace d’écoute, sans jugement et respectueux de votre
                  rythme.
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-20 border-t border-terracotta-light/70 pt-7 lg:mt-16">
          <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="flex items-center gap-3 text-dark-text">
              <span className="flex size-10 items-center justify-center rounded-full bg-cream text-terracotta">
                <GraduationCap aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="font-semibold">Formations spécialisées</p>
                <p className="text-sm text-muted-text">
                  Touchez un sigle pour en savoir plus
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((cert, index) => {
                  const isSelected = selectedCert === index;
                  return (
                    <button
                      key={cert.label}
                      type="button"
                      aria-expanded={isSelected}
                      aria-controls="certification-detail"
                      aria-label={`${cert.label} — ${cert.name}`}
                      onClick={() => setSelectedCert(isSelected ? null : index)}
                      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        isSelected
                          ? "border-terracotta bg-terracotta text-white"
                          : "border-terracotta-light bg-white text-dark-text hover:border-terracotta"
                      }`}
                    >
                      {cert.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence initial={false}>
                {selectedCert !== null && (
                  <motion.div
                    id="certification-detail"
                    key={selectedCert}
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 flex items-start justify-between gap-5 rounded-2xl bg-cream p-5">
                      <div>
                        <p className="font-semibold text-dark-text">
                          {certifications[selectedCert].name}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-medium-text">
                          {certifications[selectedCert].detail}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(null)}
                        aria-label="Fermer le détail de la formation"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full text-medium-text transition-colors hover:bg-white hover:text-dark-text"
                      >
                        <X aria-hidden="true" size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
