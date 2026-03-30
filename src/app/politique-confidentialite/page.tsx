import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité – Estelle Declercq",
  description: "Politique de confidentialité du site d'Estelle Declercq.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-terracotta hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Retour au site
        </Link>

        <h1 className="text-3xl font-semibold text-dark-text mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-medium-text">
          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Collecte des données personnelles
            </h2>
            <p>
              Les données personnelles collectées sur ce site (nom, prénom,
              email, téléphone) le sont uniquement dans le cadre de la prise de
              rendez-vous et du suivi de votre accompagnement. Elles ne sont
              jamais transmises à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Utilisation des données
            </h2>
            <p>
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>La gestion de vos rendez-vous</li>
              <li>La communication liée à votre suivi</li>
              <li>L&apos;envoi de rappels de rendez-vous</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant la durée de votre
              suivi et pendant une durée maximale de 3 ans après votre dernière
              interaction avec le cabinet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et de portabilité de vos données.
              Pour exercer ces droits, contactez-nous à :
              contact@estelledeclercq.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son
              bon fonctionnement. Aucun cookie publicitaire ou de traçage
              n&apos;est déposé sans votre consentement explicite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
