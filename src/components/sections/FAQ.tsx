"use client";

import { motion } from "framer-motion";
import { BlobThree } from "@/components/ui/DecorativeShapes";
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
      "La kinésiologie est une pratique de bien-être qui utilise le test musculaire comme outil de communication avec le corps. Elle permet d'identifier les déséquilibres physiques, émotionnels et énergétiques, puis de les corriger grâce à différentes techniques douces (points réflexes, mouvements, visualisations). C'est une approche globale qui considère la personne dans son ensemble.",
  },
  {
    question: "Combien de séances faut-il ?",
    answer:
      "Le nombre de séances varie selon chaque personne et la problématique abordée. Certaines personnes ressentent des améliorations dès la première séance, tandis que d'autres nécessitent un accompagnement sur plusieurs séances. En général, 3 à 5 séances permettent d'obtenir des résultats significatifs. Nous évaluerons ensemble vos besoins lors de notre premier échange.",
  },
  {
    question: "Est-ce adapté aux enfants ?",
    answer:
      "Absolument ! La kinésiologie est particulièrement adaptée aux enfants. Les séances sont ajustées à leur âge et à leur capacité de concentration. Elle peut aider pour les difficultés scolaires, les troubles du sommeil, la gestion des émotions, le stress, le manque de confiance en soi, et bien d'autres problématiques. Les enfants répondent généralement très bien à cette approche douce.",
  },
  {
    question: "Comment se déroule une première séance ?",
    answer:
      "La première séance commence par un entretien approfondi pour comprendre vos besoins, votre histoire et vos objectifs. Ensuite, nous procédons au test musculaire pour identifier les déséquilibres. La séance se poursuit avec les techniques de rééquilibrage adaptées. Elle dure généralement entre 1h et 1h30 pour une première consultation. Vous repartez avec des conseils personnalisés.",
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
      "La kinésiologie est une approche globale qui travaille sur l'équilibre physique, émotionnel et énergétique à travers le test musculaire et diverses techniques de correction. La maderothérapie est une technique de massage corporel utilisant des instruments en bois pour remodeler, drainer et tonifier le corps. Les deux sont complémentaires : la kinésiologie agit en profondeur sur les causes des déséquilibres, tandis que la maderothérapie agit principalement sur le plan physique et esthétique.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-warm-white relative overflow-hidden">
      {/* Decorative shapes */}
      <BlobThree className="absolute -bottom-20 -left-32 w-80 h-80 text-terracotta-light/[0.10]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark-text mb-4">
            Questions fréquentes
          </h2>
          <p className="text-medium-text text-lg">
            Retrouvez les réponses aux questions les plus courantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-cream rounded-2xl border border-terracotta-light/30 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-medium text-dark-text hover:text-terracotta transition-colors py-5 [&[data-state=open]]:text-terracotta">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-medium-text leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
