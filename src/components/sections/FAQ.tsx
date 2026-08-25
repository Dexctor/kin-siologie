import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que la kinésiologie ?",
    answer:
      "La kinésiologie est une pratique de bien-être qui utilise le test musculaire comme outil de dialogue avec le corps. Il aide à orienter la séance vers ce qui demande de l'attention, puis différentes techniques douces peuvent être proposées : points réflexes, mouvements ou visualisations.",
  },
  {
    question: "Combien de séances faut-il ?",
    answer:
      "Le nombre de séances varie selon chaque personne, sa demande et son rythme. Un premier rendez-vous permet de faire le point, puis nous décidons ensemble s'il est utile de poursuivre l'accompagnement. Il n'y a pas de nombre de séances imposé.",
  },
  {
    question: "Est-ce adapté aux enfants ?",
    answer:
      "Les séances peuvent être proposées aux enfants et sont alors ajustées à leur âge, à leur rythme et à leur capacité d'attention. Le premier échange permet de vérifier que la demande et le cadre de la séance leur conviennent.",
  },
  {
    question: "Comment se déroule une première séance ?",
    answer:
      "La première séance commence par un entretien pour comprendre votre demande et votre objectif. Le test musculaire aide ensuite à orienter les techniques utilisées. Comptez généralement entre 1 h et 1 h 30, avec un temps de bilan en fin de séance.",
  },
  {
    question: "Est-ce remboursé par la mutuelle ?",
    answer:
      "La kinésiologie n'est pas remboursée par la Sécurité sociale. Cependant, de nombreuses mutuelles proposent un forfait annuel pour les médecines douces et complémentaires. Je vous invite à vérifier auprès de votre mutuelle les conditions de remboursement. Une facture peut vous être délivrée sur demande.",
  },
  {
    question:
      "Quelle est la différence entre kinésiologie et maderothérapie ?",
    answer:
      "La kinésiologie s'appuie sur le test musculaire et s'intéresse à la façon dont le corps, les émotions et le mental interagissent. La maderothérapie est un modelage corporel réalisé avec des instruments en bois. La première part d'une demande globale ; la seconde travaille directement sur les tissus et les sensations corporelles.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-warm-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <header className="self-start lg:sticky lg:top-28">
            <h2
              id="faq-title"
              className="font-editorial text-4xl font-semibold leading-tight text-dark-text sm:text-5xl"
            >
              Questions fréquentes
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-medium-text">
              Retrouvez les réponses aux questions les plus courantes pour
              préparer sereinement votre rendez-vous.
            </p>
          </header>

          <Accordion
            type="single"
            collapsible
            className="border-y border-terracotta-light/70"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index + 1}`}
                className="border-terracotta-light/70"
              >
                <AccordionTrigger className="py-6 text-base font-semibold leading-snug text-dark-text hover:text-terracotta hover:no-underline focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-warm-white [&[data-state=open]]:text-terracotta sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 pr-8 text-base leading-relaxed text-medium-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
