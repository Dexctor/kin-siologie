"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  CircleDot,
  Waves,
  Flower2,
  TreePine,
  CircleCheck,
} from "lucide-react";

const bienfaits = [
  { icon: Sparkles, label: "Réduction de la cellulite" },
  { icon: Droplets, label: "Amélioration de la circulation sanguine" },
  { icon: CircleDot, label: "Raffermissement de la peau" },
  { icon: Waves, label: "Drainage lymphatique naturel" },
  { icon: Flower2, label: "Relaxation profonde" },
  { icon: TreePine, label: "Technique 100% naturelle, non invasive" },
];

const etapes = [
  {
    step: "01",
    title: "Bilan corporel",
    desc: "Évaluation de vos besoins spécifiques et des zones à traiter pour personnaliser votre séance.",
  },
  {
    step: "02",
    title: "Préparation",
    desc: "Application d'huiles naturelles et échauffement des tissus pour préparer le corps au modelage.",
  },
  {
    step: "03",
    title: "Modelage aux outils en bois",
    desc: "Utilisation d'instruments en bois de différentes formes pour masser, drainer et remodeler les jambes.",
  },
  {
    step: "04",
    title: "Finalisation",
    desc: "Massage de finition pour apaiser la peau et conseils pour optimiser les résultats entre les séances.",
  },
];

export default function Maderotherapie() {
  return (
    <section id="maderotherapie" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Maderothérapie
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            La maderothérapie est une technique de massage ancestrale utilisant
            des instruments en bois spécialement conçus pour remodeler, drainer
            et tonifier les jambes de manière naturelle.
          </p>
        </motion.div>

        {/* Bienfaits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-dark-text mb-8 text-center">
            Les bienfaits
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bienfaits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-cream rounded-xl border border-terracotta-light/30"
                >
                  <div className="w-10 h-10 bg-terracotta/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-terracotta" />
                  </div>
                  <span className="text-dark-text font-medium">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Déroulement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-dark-text mb-8 text-center">
            Déroulement d&apos;une séance
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, i) => (
              <motion.div
                key={etape.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-cream rounded-2xl p-6 border border-terracotta-light/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-terracotta/20">
                    {etape.step}
                  </span>
                  <CircleCheck size={20} className="text-terracotta" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">
                  {etape.title}
                </h4>
                <p className="text-sm text-medium-text leading-relaxed">
                  {etape.desc}
                </p>
                {i < etapes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-terracotta-light" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#tarifs"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#tarifs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 bg-terracotta text-white text-lg font-medium rounded-full hover:bg-terracotta/90 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-terracotta/20"
          >
            Réserver une séance de maderothérapie
          </a>
        </motion.div>
      </div>
    </section>
  );
}
