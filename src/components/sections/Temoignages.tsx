"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const temoignages = [
  {
    name: "Aude C.",
    text: "J'ai eu plusieurs fois l'occasion de recevoir des séances de la part d'Estelle. Je ne peux que recommander son professionnalisme, son écoute et sa gentillesse !",
    date: "Octobre 2025",
    rating: 5,
  },
  {
    name: "Alain V.",
    text: "Satisfait de la prestation, de bons effets suite à la séance, je recommande à 100%.",
    date: "Décembre 2025",
    rating: 5,
  },
  {
    name: "Nathalie",
    text: "Personne très professionnelle, à l'écoute. Je recommande.",
    date: "Juillet 2025",
    rating: 5,
  },
];

export default function Temoignages() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Ce que disent mes clients
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-dark-text">
              5/5 sur Google
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-terracotta hover:underline text-sm"
          >
            Voir tous les avis sur Google
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {temoignages.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white rounded-2xl p-8 border border-terracotta-light/30 relative"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="text-terracotta/15 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-medium-text leading-relaxed mb-6 italic">
                &laquo; {t.text} &raquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="font-semibold text-dark-text">{t.name}</span>
                <span className="text-sm text-medium-text">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
