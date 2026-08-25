import { CalendarDays, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white/80">
      <section
        aria-labelledby="contact-footer-title"
        className="bg-cream text-dark-text"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <h2
              id="contact-footer-title"
              className="font-editorial text-3xl font-semibold leading-tight sm:text-4xl"
            >
              Besoin d’un renseignement ?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-medium-text">
              Consultez les tarifs ou contactez directement Estelle par
              téléphone ou par e-mail.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href="#tarifs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              <CalendarDays aria-hidden="true" size={19} />
              Voir les tarifs
            </a>
            <a
              href="tel:+33600000000"
              aria-label="Appeler Estelle au 06 00 00 00 00"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-terracotta/40 bg-warm-white px-6 font-semibold text-dark-text transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              <Phone aria-hidden="true" size={19} />
              Appeler Estelle
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-9 md:grid-cols-3 md:gap-12">
          <div>
            <p className="text-lg font-semibold text-white">Estelle Declercq</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Kinésiologue &amp; Maderothérapeute
            </p>
          </div>

          <address className="not-italic">
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 space-y-2 text-sm">
              <a
                href="tel:+33600000000"
                className="flex min-h-11 items-center gap-3 rounded-lg text-white/80 transition-colors hover:text-terracotta-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light"
              >
                <Phone aria-hidden="true" className="shrink-0" size={17} />
                06 00 00 00 00
              </a>
              <a
                href="mailto:declercqestelle.kinesio@gmail.com"
                className="flex min-h-11 items-center gap-3 break-all rounded-lg text-white/80 transition-colors hover:text-terracotta-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light"
              >
                <Mail aria-hidden="true" className="shrink-0" size={17} />
                declercqestelle.kinesio@gmail.com
              </a>
            </div>
          </address>

          <nav aria-label="Informations légales">
            <p className="text-sm font-semibold text-white">Informations</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="inline-flex min-h-11 items-center rounded-lg text-white/80 transition-colors hover:text-terracotta-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="inline-flex min-h-11 items-center rounded-lg text-white/80 transition-colors hover:text-terracotta-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-light"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Estelle Declercq. Tous droits réservés.
          </p>
          <p>SIRET : 988 636 643 00013</p>
        </div>
      </div>
    </footer>
  );
}
