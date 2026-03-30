"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Brain,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

const certifications = [
  { label: "EMNAK", desc: "Formation de base en kinésiologie", icon: GraduationCap },
  { label: "TFH", desc: "Touch For Health, certifiée", icon: Heart },
  { label: "TIOC", desc: "Three In One Concept, niveau 9", icon: Award },
  { label: "KCS", desc: "Cranio-sacré, niveau 1", icon: Shield },
  { label: "BG", desc: "Brain Gym 3D et 7D", icon: Brain },
  { label: "KH", desc: "Kinésiologie Harmonique, niveau 1", icon: Sparkles },
];

export default function Hero() {
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
              className="flex flex-wrap gap-3 mb-10"
            >
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-cream rounded-full border border-terracotta-light/50 cursor-default"
                  >
                    <Icon size={16} className="text-terracotta shrink-0" />
                    <span className="text-sm font-medium text-dark-text">
                      {cert.label}
                    </span>
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-text text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {cert.desc}
                    </span>
                  </motion.div>
                );
              })}
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
