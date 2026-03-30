"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Heart,
  Shield,
  Smile,
  Leaf,
  CircleCheck,
} from "lucide-react";

const bienfaits = [
  { icon: Zap, label: "Réduction du stress et de l'anxiété" },
  { icon: Brain, label: "Amélioration de la concentration" },
  { icon: Heart, label: "Soulagement des douleurs physiques" },
  { icon: Shield, label: "Renforcement du système immunitaire" },
  { icon: Smile, label: "Gestion des émotions" },
  { icon: Leaf, label: "Équilibre énergétique global" },
];

const etapes = [
  {
    step: "01",
    title: "Échange & écoute",
    desc: "Nous prenons le temps de discuter de vos besoins, votre histoire et vos objectifs lors d'un entretien bienveillant.",
  },
  {
    step: "02",
    title: "Test musculaire",
    desc: "À l'aide du test musculaire, outil central de la kinésiologie, nous identifions les déséquilibres et les blocages.",
  },
  {
    step: "03",
    title: "Rééquilibrage",
    desc: "Différentes techniques sont utilisées pour libérer les tensions et rétablir l'équilibre : points réflexes, mouvements, visualisations.",
  },
  {
    step: "04",
    title: "Ancrage & bilan",
    desc: "Nous vérifions le rééquilibrage et vous donnons des conseils personnalisés pour prolonger les bienfaits de la séance.",
  },
];

export default function Kinesiologie() {
  return (
    <section id="kinesiologie" className="py-20 bg-cream">
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
            Kinésiologie
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            La kinésiologie est une approche globale qui utilise le test
            musculaire pour identifier les déséquilibres et rétablir
            l&apos;harmonie entre le corps, le mental et les émotions.
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
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-terracotta-light/30"
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
                className="relative bg-white rounded-2xl p-6 border border-terracotta-light/30"
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
                {/* Connector line */}
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
            Réserver une séance de kinésiologie
          </a>
        </motion.div>
      </div>
    </section>
  );
}
