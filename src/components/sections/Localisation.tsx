"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function Localisation() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Me trouver
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            Le cabinet vous accueille dans un cadre calme et bienveillant.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl overflow-hidden border border-terracotta-light/30 bg-cream h-80 lg:h-auto"
          >
            {/* Replace with actual Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0!2d2.35!3d48.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUx!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-cream rounded-2xl p-6 border border-terracotta-light/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-terracotta" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-1">
                    Adresse du cabinet
                  </h3>
                  <p className="text-medium-text">
                    123 Rue du Bien-être
                    <br />
                    75000 Votre Ville
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-terracotta text-sm font-medium hover:underline"
                  >
                    <Navigation size={14} />
                    Itinéraire Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream rounded-2xl p-6 border border-terracotta-light/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-terracotta" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-text mb-3">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-1.5 text-sm text-medium-text">
                    <div className="flex justify-between gap-8">
                      <span>Lundi – Vendredi</span>
                      <span className="font-medium text-dark-text">
                        9h00 – 19h00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Samedi</span>
                      <span className="font-medium text-dark-text">
                        9h00 – 13h00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Dimanche</span>
                      <span className="text-medium-text/60">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local SEO text */}
            <div className="bg-cream rounded-2xl p-6 border border-terracotta-light/30">
              <p className="text-sm text-medium-text leading-relaxed">
                Cabinet de kinésiologie et maderothérapie accessible depuis les
                villes et quartiers environnants. Facilement accessible en
                transports en commun et parking à proximité.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
