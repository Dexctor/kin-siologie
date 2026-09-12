import Image from "next/image";
import { ArrowUpRight, Check, HeartHandshake } from "lucide-react";

const approach = [
  "Une écoute du lien entre stress et douleurs",
  "Kinésiologie et maderothérapie associées selon vos besoins",
  "Un accompagnement adapté à votre rythme",
];

export default function APropos() {
  return (
    <section id="a-propos" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-10">
        <figure className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream editorial-shadow sm:rounded-[2.5rem]">
            <Image
              src="/images/cabinet-kinesiologie.webp"
              alt="Illustration d’un cabinet de soin lumineux aux tons naturels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 44vw"
            />
          </div>
          <figcaption className="absolute -bottom-5 right-4 rounded-2xl border border-terracotta-light/60 bg-warm-white px-5 py-4 card-shadow sm:bottom-6 sm:right-6">
            <div className="flex items-center gap-3">
              <HeartHandshake
                aria-hidden="true"
                className="text-terracotta"
                size={22}
              />
              <div>
                <p className="text-sm font-semibold text-dark-text">
                  Une approche globale
                </p>
                <p className="text-xs text-muted-text">
                  Corps, mental et émotions
                </p>
              </div>
            </div>
          </figcaption>
        </figure>

        <div>
          <h2 className="max-w-2xl font-editorial text-4xl font-semibold leading-tight tracking-[-0.025em] text-dark-text sm:text-5xl lg:text-6xl">
            Un accompagnement attentif, pensé avec vous.
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-medium-text sm:text-lg sm:leading-8">
            <p>
              J’accompagne particulièrement le rapport au corps, notamment
              lorsque le stress, les émotions et les douleurs physiques
              s’entremêlent. La kinésiologie permet d’écouter ce qui se joue
              dans le corps, le mental et les émotions.
            </p>
            <p>
              Selon votre besoin, j’associe cette écoute à l’approche corporelle
              de la maderothérapie pour favoriser une reconnexion progressive à
              vos sensations, toujours à votre rythme.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {approach.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-dark-text">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta">
                  <Check aria-hidden="true" size={14} strokeWidth={2.5} />
                </span>
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#tarifs"
            className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-terracotta px-6 py-3 font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-white"
          >
            Échanger sur votre besoin
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
