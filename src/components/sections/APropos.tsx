"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function APropos() {
  return (
    <section id="a-propos" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            À propos
          </h2>
          <p className="text-medium-text text-lg max-w-2xl mx-auto">
            Découvrez mon parcours et ma passion pour le bien-être.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-semibold text-dark-text mb-6">
              Mon parcours vers la kinésiologie
            </h3>
            <div className="space-y-4 text-medium-text leading-relaxed">
              <p>
                Passionnée par le bien-être et l&apos;accompagnement de
                l&apos;humain, j&apos;ai entrepris une reconversion
                professionnelle qui m&apos;a menée vers la kinésiologie. Cette
                discipline m&apos;a immédiatement parlé par son approche
                globale : elle considère la personne dans son ensemble —
                corps, mental et émotions.
              </p>
              <p>
                Formée à l&apos;EMNAK et certifiée en Touch For Health, Three In
                One Concept (niveau 9), cranio-sacré, Brain Gym et kinésiologie
                harmonique, je continue de me former régulièrement pour vous
                offrir un accompagnement toujours plus complet et adapté.
              </p>
              <p>
                Mon approche est bienveillante, à l&apos;écoute de vos besoins,
                et respectueuse de votre rythme. Chaque personne est unique, et
                c&apos;est ensemble que nous trouvons les clés de votre
                bien-être.
              </p>
            </div>

            <motion.a
              href="#tarifs"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#tarifs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center mt-8 px-6 py-3 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta/90 transition-colors duration-200"
            >
              Prendre rendez-vous
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-cream">
              <Image
                src="/images/cabinet.jpg"
                alt="Cabinet de kinésiologie d'Estelle Declercq"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-terracotta/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
