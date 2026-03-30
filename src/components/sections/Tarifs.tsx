"use client";

import { motion } from "framer-motion";
import { Clock, Phone, MessageCircle } from "lucide-react";
import { BlobFour } from "@/components/ui/DecorativeShapes";
import BookingCalendar from "./BookingCalendar";

const tarifs = [
  {
    title: "Kinésiologie",
    subtitle: "Adulte",
    price: "60",
    duration: "1h à 1h30",
    description: "Séance complète de rééquilibrage énergétique",
    featured: true,
  },
  {
    title: "Kinésiologie",
    subtitle: "Enfant / Adolescent",
    price: "50",
    duration: "45 min à 1h",
    description: "Séance adaptée aux plus jeunes",
    featured: false,
  },
  {
    title: "Maderothérapie",
    subtitle: "Jambes",
    price: "45",
    duration: "40 min",
    description: "Modelage des jambes aux instruments en bois",
    featured: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <BlobFour className="absolute top-16 -right-36 w-96 h-96 text-terracotta/[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Tarifs & Prise de rendez-vous
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            Des tarifs transparents pour un accompagnement de qualité.
          </p>
        </motion.div>

        {/* Tarif cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tarifs.map((tarif, i) => (
            <motion.div
              key={tarif.title + tarif.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                tarif.featured
                  ? "bg-terracotta text-white border-terracotta shadow-xl shadow-terracotta/20"
                  : "bg-white border-terracotta-light/30 hover:border-terracotta/30 hover:shadow-lg"
              }`}
            >
              <p
                className={`text-sm font-medium mb-1 ${
                  tarif.featured ? "text-white/80" : "text-terracotta"
                }`}
              >
                {tarif.subtitle}
              </p>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  tarif.featured ? "text-white" : "text-dark-text"
                }`}
              >
                {tarif.title}
              </h3>
              <div className="flex items-end gap-1 mb-4">
                <span
                  className={`text-4xl font-bold ${
                    tarif.featured ? "text-white" : "text-dark-text"
                  }`}
                >
                  {tarif.price}€
                </span>
                <span
                  className={`text-sm mb-1 ${
                    tarif.featured ? "text-white/70" : "text-medium-text"
                  }`}
                >
                  / séance
                </span>
              </div>
              <div
                className={`flex items-center gap-2 text-sm mb-4 ${
                  tarif.featured ? "text-white/80" : "text-medium-text"
                }`}
              >
                <Clock size={16} />
                <span>{tarif.duration}</span>
              </div>
              <p
                className={`text-sm ${
                  tarif.featured ? "text-white/80" : "text-medium-text"
                }`}
              >
                {tarif.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Phone contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 border border-terracotta-light/30 mb-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                <Phone size={22} className="text-terracotta" />
              </div>
              <div className="text-left">
                <p className="text-sm text-medium-text">
                  Appelez-moi directement
                </p>
                <a
                  href="tel:+33600000000"
                  className="text-lg font-semibold text-dark-text hover:text-terracotta transition-colors"
                >
                  06 00 00 00 00
                </a>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-terracotta-light/50" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                <MessageCircle size={22} className="text-terracotta" />
              </div>
              <div className="text-left">
                <p className="text-sm text-medium-text">Premier échange</p>
                <p className="text-lg font-semibold text-dark-text">
                  Gratuit & sans engagement
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Booking Calendar */}
        <BookingCalendar />
      </div>
    </section>
  );
}
