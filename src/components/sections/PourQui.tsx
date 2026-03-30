"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Baby,
  Dumbbell,
  Moon,
  Flame,
  BookOpen,
  Shield,
  ArrowUpRight,
  Frown,
} from "lucide-react";
import { BlobOne, BlobTwo } from "@/components/ui/DecorativeShapes";

const profiles = [
  {
    icon: Brain,
    title: "Stress & anxiété",
    desc: "Retrouvez calme et sérénité au quotidien grâce à un rééquilibrage énergétique.",
  },
  {
    icon: Heart,
    title: "Douleurs chroniques",
    desc: "Soulagez les tensions physiques et libérez les blocages corporels.",
  },
  {
    icon: Baby,
    title: "Enfants",
    desc: "Accompagnement doux et adapté pour les difficultés d'apprentissage, de concentration et de comportement.",
  },
  {
    icon: Dumbbell,
    title: "Sportifs",
    desc: "Optimisez vos performances et accélérez la récupération musculaire.",
  },
  {
    icon: Moon,
    title: "Troubles du sommeil",
    desc: "Retrouvez un sommeil réparateur et des nuits apaisées.",
  },
  {
    icon: Frown,
    title: "Gestion des émotions",
    desc: "Apprenez à mieux comprendre et réguler vos émotions au quotidien.",
  },
  {
    icon: Flame,
    title: "Burn-out",
    desc: "Retrouvez votre énergie et votre motivation après un épuisement.",
  },
  {
    icon: BookOpen,
    title: "Difficultés scolaires",
    desc: "Aidez votre enfant à développer concentration et confiance en soi.",
  },
  {
    icon: Shield,
    title: "Confiance en soi",
    desc: "Renforcez votre estime personnelle et affirmez-vous pleinement.",
  },
  {
    icon: ArrowUpRight,
    title: "Transitions de vie",
    desc: "Accompagnement bienveillant lors des changements importants de votre vie.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function PourQui() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <BlobOne className="absolute -top-20 -right-32 w-80 h-80 text-terracotta/[0.07]" />
      <BlobTwo className="absolute -bottom-24 -left-28 w-72 h-72 text-terracotta-light/[0.12]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Pour qui ?
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            La kinésiologie et la maderothérapie s&apos;adressent à tous, à tout
            âge de la vie. Reconnaissez-vous dans l&apos;une de ces situations ?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-terracotta-light/30 hover:border-terracotta/30 hover:shadow-lg hover:shadow-terracotta/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-terracotta" />
                </div>
                <h3 className="font-semibold text-dark-text mb-2">
                  {profile.title}
                </h3>
                <p className="text-sm text-medium-text leading-relaxed">
                  {profile.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
