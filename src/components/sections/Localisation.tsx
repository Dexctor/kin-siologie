import { CalendarCheck, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Localisation() {
  return (
    <section
      id="cabinet"
      aria-labelledby="cabinet-title"
      className="overflow-hidden bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <header className="flex flex-col justify-between rounded-[2rem] bg-dark-text p-7 text-white sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta-light">
                Le cabinet
              </p>
              <h2
                id="cabinet-title"
                className="mt-5 max-w-xl font-editorial text-4xl font-semibold leading-tight sm:text-5xl"
              >
                Votre cabinet à Dunkerque.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Je vous accueille sur rendez-vous pour des séances individuelles
                de kinésiologie et de maderothérapie, dans un cadre calme et
                attentif à votre rythme.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-white/70">
              <CalendarCheck
                aria-hidden="true"
                className="shrink-0 text-terracotta-light"
                size={20}
              />
              Accueil uniquement sur rendez-vous
            </div>
          </header>

          <div className="relative overflow-hidden rounded-[2rem] border border-terracotta-light/70 bg-warm-white p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full border-[3rem] border-cream"
            />
            <div className="relative">
              <span className="flex size-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <MapPin aria-hidden="true" size={22} />
              </span>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted-text">
                Adresse
              </p>
              <p className="mt-3 max-w-lg font-editorial text-3xl font-semibold leading-tight text-dark-text sm:text-4xl">
                {siteConfig.address.streetAddress}
                <span className="mt-1 block text-terracotta">
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="external noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  <Navigation aria-hidden="true" size={18} />
                  Préparer l’itinéraire
                </a>
                <a
                  href={siteConfig.phone.href}
                  aria-label={`Appeler Estelle au ${siteConfig.phone.display}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-terracotta-light bg-white px-6 font-semibold text-dark-text transition-colors hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  <Phone aria-hidden="true" size={18} />
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
