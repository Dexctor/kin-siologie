"use client";

import { Phone, Mail, MapPin, Navigation, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white/80">
      {/* Map band */}
      <div className="w-full h-64 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0!2d2.35!3d48.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUx!5e0!3m2!1sfr!2sfr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation du cabinet"
          className="grayscale opacity-70"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-3">
              Estelle Declercq
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Kinésiologue & Maderothérapeute
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 hover:text-terracotta-light transition-colors"
              >
                <Phone size={16} />
                06 00 00 00 00
              </a>
              <a
                href="mailto:declercqestelle.kinesio@gmail.com"
                className="flex items-center gap-2 hover:text-terracotta-light transition-colors"
              >
                <Mail size={16} />
                declercqestelle.kinesio@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  123 Rue du Bien-être
                  <br />
                  75000 Votre Ville
                </span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-terracotta-light hover:text-white transition-colors"
              >
                <Navigation size={14} />
                Itinéraire
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              <Clock size={16} className="inline mr-2" />
              Horaires
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Lun – Ven</span>
                <span>9h – 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>9h – 13h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-white/40">Fermé</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informations</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/mentions-legales"
                className="block hover:text-terracotta-light transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block hover:text-terracotta-light transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Estelle Declercq – Kinésiologue &
            Maderothérapeute. Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">SIRET : 988 636 643 00013</p>
        </div>
      </div>
    </footer>
  );
}
