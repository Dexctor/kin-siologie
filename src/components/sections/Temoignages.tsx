import { Quote, Star } from "lucide-react";

const temoignages = [
  {
    name: "Aude C.",
    text: "J'ai eu plusieurs fois l'occasion de recevoir des séances de la part d'Estelle. Je ne peux que recommander son professionnalisme, son écoute et sa gentillesse !",
    date: "Octobre 2025",
  },
  {
    name: "Alain V.",
    text: "Satisfait de la prestation, de bons effets suite à la séance, je recommande à 100%.",
    date: "Décembre 2025",
  },
  {
    name: "Nathalie",
    text: "Personne très professionnelle, à l'écoute. Je recommande.",
    date: "Juillet 2025",
  },
];

export default function Temoignages() {
  const [temoignagePrincipal, ...autresTemoignages] = temoignages;

  return (
    <section
      aria-labelledby="temoignages-title"
      className="bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid gap-8 border-b border-terracotta-light/60 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] lg:items-end">
          <div className="max-w-2xl">
            <h2
              id="temoignages-title"
              className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl"
            >
              Ce que disent mes clients
            </h2>
          </div>

          <div>
            <div
              aria-label="Note de 5 sur 5 sur Google"
              className="flex flex-wrap items-center gap-3"
            >
              <span aria-hidden="true" className="flex gap-1 text-yellow-600">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-dark-text">
                5/5 sur Google
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-10 pt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16">
          <blockquote className="relative lg:pr-10">
            <Quote
              aria-hidden="true"
              className="mb-6 size-10 text-terracotta/30"
              strokeWidth={1.5}
            />
            <p className="max-w-3xl text-2xl leading-relaxed text-dark-text sm:text-3xl sm:leading-relaxed">
              &laquo;&nbsp;{temoignagePrincipal.text}&nbsp;&raquo;
            </p>
            <footer className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
              <cite className="font-semibold not-italic text-dark-text">
                {temoignagePrincipal.name}
              </cite>
              <span className="text-sm text-medium-text">
                {temoignagePrincipal.date}
              </span>
            </footer>
          </blockquote>

          <div className="divide-y divide-terracotta-light/70 border-y border-terracotta-light/70">
            {autresTemoignages.map((temoignage) => (
              <blockquote key={temoignage.name} className="py-8 first:pt-0 lg:first:pt-8">
                <p className="text-lg leading-relaxed text-dark-text">
                  &laquo;&nbsp;{temoignage.text}&nbsp;&raquo;
                </p>
                <footer className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <cite className="font-semibold not-italic text-dark-text">
                    {temoignage.name}
                  </cite>
                  <span className="text-sm text-medium-text">
                    {temoignage.date}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
