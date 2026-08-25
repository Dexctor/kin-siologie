import {
  Activity,
  BookOpen,
  Brain,
  Compass,
  Moon,
  UsersRound,
} from "lucide-react";

const needs = [
  {
    icon: Brain,
    title: "Stress & émotions",
    description:
      "Quand les pensées tournent en boucle ou que les émotions prennent trop de place.",
  },
  {
    icon: Moon,
    title: "Sommeil & fatigue",
    description:
      "Pour prendre un temps de pause lorsque le repos devient difficile ou peu réparateur.",
  },
  {
    icon: Compass,
    title: "Confiance & transitions",
    description:
      "Pour traverser un changement et retrouver des repères plus stables au quotidien.",
  },
  {
    icon: BookOpen,
    title: "Concentration & apprentissages",
    description:
      "Un accompagnement adapté aux périodes où l’attention et les apprentissages demandent plus d’effort.",
  },
  {
    icon: Activity,
    title: "Tensions & récupération",
    description:
      "Pour mieux écouter les signaux du corps et soutenir les temps de récupération.",
  },
  {
    icon: UsersRound,
    title: "À chaque âge de la vie",
    description:
      "Des séances ajustées aux adultes, aux adolescents et aux enfants, selon leurs besoins.",
  },
];

export default function PourQui() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 border-b border-terracotta-light/80 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="max-w-2xl font-editorial text-4xl font-semibold leading-tight tracking-[-0.025em] text-dark-text sm:text-5xl lg:text-6xl">
              Pour ce qui vous pèse aujourd’hui.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-medium-text sm:text-lg sm:leading-8 lg:justify-self-end">
            Il n’est pas toujours simple de mettre des mots sur ce que l’on
            traverse. La séance part de votre vécu, sans vous enfermer dans une
            case ni imposer un objectif tout fait.
          </p>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((need, index) => {
            const Icon = need.icon;
            return (
              <article
                key={need.title}
                className="border-b border-terracotta-light/70 py-8 sm:px-6 sm:first:pl-0 lg:px-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white text-terracotta shadow-sm">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="font-editorial text-2xl text-terracotta-warm/55">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-dark-text">
                  {need.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-medium-text">
                  {need.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-dark-text px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            Vous hésitez entre kinésiologie et maderothérapie ? Un premier
            échange permet de choisir l’accompagnement le plus adapté.
          </p>
          <a
            href="#tarifs"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-dark-text transition-colors hover:bg-cream"
          >
            Voir les séances
          </a>
        </div>
      </div>
    </section>
  );
}
