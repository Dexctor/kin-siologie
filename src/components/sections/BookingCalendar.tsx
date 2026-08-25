import { CalendarDays, Mail, Phone } from "lucide-react";

export default function BookingCalendar() {
  return (
    <div className="overflow-hidden rounded-3xl bg-dark-text px-6 py-8 text-warm-white sm:px-10 sm:py-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(30rem,1.15fr)] lg:items-center lg:gap-12">
        <div>
          <CalendarDays
            aria-hidden="true"
            className="mb-5 size-8 text-terracotta-light"
            strokeWidth={1.6}
          />
          <h3 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">
            Choisissons ensemble votre créneau
          </h3>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-warm-white/75">
            Contactez-moi directement par téléphone ou par e-mail pour organiser
            votre séance.
          </p>
        </div>

        <div className="grid min-w-0 overflow-hidden rounded-2xl bg-warm-white text-dark-text divide-y divide-terracotta-light/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <a
            href="tel:+33600000000"
            className="group flex min-h-36 min-w-0 items-start gap-4 p-6 outline-none transition-colors hover:bg-cream focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terracotta"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
              <Phone aria-hidden="true" className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-medium-text">
                Par téléphone
              </span>
              <span className="mt-2 block font-semibold leading-snug text-dark-text group-hover:text-terracotta">
                Appeler au 06 00 00 00 00
              </span>
            </span>
          </a>

          <a
            href="mailto:declercqestelle.kinesio@gmail.com"
            aria-label="Écrire à Estelle par e-mail à declercqestelle.kinesio@gmail.com"
            className="group flex min-h-36 min-w-0 items-start gap-4 p-6 outline-none transition-colors hover:bg-cream focus-visible:bg-cream focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terracotta"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
              <Mail aria-hidden="true" className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-medium-text">Par e-mail</span>
              <span className="mt-2 block font-semibold leading-snug text-dark-text group-hover:text-terracotta">
                Envoyer un e-mail
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
