import { Clock } from "lucide-react";
import BookingCalendar from "./BookingCalendar";

const tarifs = [
  {
    title: "Kinésiologie",
    subtitle: "Adulte",
    price: "60",
    duration: "1 h à 1 h 30",
    description: "Séance centrée sur le stress, les émotions et les ressentis corporels",
    desktopOrder: "md:order-2",
    emphasis: true,
  },
  {
    title: "Kinésiologie",
    subtitle: "Enfant / Adolescent",
    price: "50",
    duration: "45 min à 1 h",
    description: "Séance adaptée aux plus jeunes",
    desktopOrder: "md:order-1",
    emphasis: false,
  },
  {
    title: "Maderothérapie",
    subtitle: "Jambes",
    price: "45",
    duration: "40 min",
    description: "Modelage des jambes aux instruments en bois",
    desktopOrder: "md:order-3",
    emphasis: false,
  },
];

export default function Tarifs() {
  return (
    <section
      id="tarifs"
      aria-labelledby="tarifs-title"
      className="bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.65fr)] lg:items-end">
          <div>
            <h2
              id="tarifs-title"
              className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl"
            >
              Des tarifs simples et transparents
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-medium-text lg:justify-self-end">
            Choisissez l&apos;accompagnement adapté à votre besoin, puis
            contactez-moi pour convenir d&apos;un créneau.
          </p>
        </header>

        <div className="mb-14 grid overflow-hidden rounded-3xl border border-terracotta-light/70 bg-white divide-y divide-terracotta-light/70 md:grid-cols-3 md:divide-x md:divide-y-0">
          {tarifs.map((tarif) => (
            <article
              key={tarif.title + tarif.subtitle}
              className={`flex min-h-full flex-col gap-7 p-7 sm:p-8 ${tarif.desktopOrder} ${
                tarif.emphasis ? "bg-warm-white" : "bg-white"
              }`}
            >
              <header>
                <p className="text-sm font-medium text-terracotta">
                  {tarif.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-dark-text">
                  {tarif.title}
                </h3>
              </header>

              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-4xl font-semibold tabular-nums text-dark-text">
                  {tarif.price}&nbsp;€
                </span>
                <span className="text-sm text-medium-text">par séance</span>
              </p>

              <div className="border-t border-terracotta-light/60 pt-5">
                <p className="flex items-center gap-2 text-sm font-medium text-dark-text">
                  <Clock aria-hidden="true" className="size-4 text-terracotta" />
                  <span>{tarif.duration}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-medium-text">
                  {tarif.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <BookingCalendar />
      </div>
    </section>
  );
}
