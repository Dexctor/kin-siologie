"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Brain,
  Heart,
  Shield,
  Sparkles,
  X,
} from "lucide-react";

const certifications = [
  {
    label: "EMNAK",
    shortDesc: "Formation de base en kinésiologie",
    longDesc:
      "L'EMNAK (École de kinésiologie) fournit la formation fondamentale en kinésiologie : test musculaire, principes énergétiques et techniques de rééquilibrage. C'est le socle de toute la pratique.",
    icon: GraduationCap,
  },
  {
    label: "TFH",
    shortDesc: "Touch For Health, certifiée",
    longDesc:
      "Le Touch For Health (Santé par le Toucher) est une méthode qui utilise le test musculaire pour identifier les déséquilibres énergétiques et les corriger via des points d'acupressure, des méridiens et des techniques posturales.",
    icon: Heart,
  },
  {
    label: "TIOC",
    shortDesc: "Three In One Concept, niveau 9",
    longDesc:
      "Le Three In One Concept (3 en 1) intègre le corps, le mental et l'esprit. Cette méthode permet de libérer les blocages émotionnels profonds en identifiant les croyances limitantes et les stress passés qui influencent le présent.",
    icon: Award,
  },
  {
    label: "KCS",
    shortDesc: "Cranio-sacré, niveau 1",
    longDesc:
      "La kinésiologie cranio-sacrée travaille sur le système cranio-sacré (crâne, colonne vertébrale, sacrum) pour libérer les tensions profondes, favoriser la circulation du liquide céphalo-rachidien et restaurer l'équilibre du système nerveux.",
    icon: Shield,
  },
  {
    label: "BG",
    shortDesc: "Brain Gym 3D et 7D",
    longDesc:
      "Le Brain Gym utilise des mouvements simples et ciblés pour stimuler les connexions cérébrales. La 3D travaille sur les trois dimensions du mouvement (latéralité, centrage, focalisation) et la 7D y ajoute quatre dimensions supplémentaires pour une approche encore plus complète de l'intégration corps-cerveau.",
    icon: Brain,
  },
  {
    label: "KH",
    shortDesc: "Kinésiologie Harmonique, niveau 1",
    longDesc:
      "La Kinésiologie Harmonique utilise les fréquences vibratoires et les sons pour rééquilibrer le corps énergétique. Elle permet de travailler en profondeur sur les mémoires cellulaires et les blocages subtils.",
    icon: Sparkles,
  },
];

export default function Hero() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-medium-text text-lg mb-4"
            >
              Kinésiologue & Maderothérapeute
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark-text leading-tight mb-6"
            >
              Reconnectez-vous
              <br />
              <span className="text-terracotta">à votre corps.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-lg text-medium-text mb-8 max-w-lg"
            >
              Le voyage vers le bien-être commence ici. Retrouvez votre
              équilibre grâce à la kinésiologie et la maderothérapie.
            </motion.p>

            {/* Certifications badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon;
                  const isSelected = selectedCert === i;
                  return (
                    <motion.button
                      key={cert.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() =>
                        setSelectedCert(isSelected ? null : i)
                      }
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-terracotta text-white border-terracotta"
                          : "bg-cream text-dark-text border-terracotta-light/50 hover:border-terracotta/40"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={`shrink-0 ${
                          isSelected ? "text-white" : "text-terracotta"
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {cert.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Description panel */}
              <AnimatePresence mode="wait">
                {selectedCert !== null && (
                  <motion.div
                    key={selectedCert}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-cream rounded-2xl p-5 border border-terracotta-light/40">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-dark-text mb-1">
                            {certifications[selectedCert].label} –{" "}
                            {certifications[selectedCert].shortDesc}
                          </p>
                          <p className="text-sm text-medium-text leading-relaxed">
                            {certifications[selectedCert].longDesc}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedCert(null)}
                          className="shrink-0 p-1 text-medium-text hover:text-dark-text transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#tarifs"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#tarifs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center px-8 py-4 bg-terracotta text-white text-lg font-medium rounded-full hover:bg-terracotta/90 transition-colors duration-200 shadow-lg shadow-terracotta/20"
            >
              Prendre rendez-vous
            </motion.a>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-cream">
              {/* Placeholder for photo */}
              <Image
                src="/images/estelle-hero.jpg"
                alt="Estelle Declercq, Kinésiologue et Maderothérapeute"
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFRABAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQA//9k="
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-terracotta-light/30 rounded-full blur-2xl" />
            </div>

            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-terracotta-light/20 text-center"
            >
              <p className="font-semibold text-dark-text text-lg">
                Estelle Declercq
              </p>
              <p className="text-medium-text text-sm">Kinésiologue</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
