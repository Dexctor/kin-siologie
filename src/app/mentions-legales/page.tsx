import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales – Estelle Declercq",
  description: "Mentions légales du site d'Estelle Declercq, kinésiologue et maderothérapeute.",
};

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-medium-text">
          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Éditeur du site
            </h2>
            <p>
              Estelle Declercq – Kinésiologue & Maderothérapeute
              <br />
              Entreprise individuelle
              <br />
              SIRET : 000 000 000 00000
              <br />
              Adresse : 123 Rue du Bien-être, 75000 Votre Ville
              <br />
              Téléphone : 06 00 00 00 00
              <br />
              Email : contact@estelledeclercq.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logo) est la
              propriété exclusive d&apos;Estelle Declercq, sauf mention contraire.
              Toute reproduction, même partielle, est interdite sans
              autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark-text">
              Responsabilité
            </h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif.
              Estelle Declercq ne saurait garantir l&apos;exactitude, la
              complétude, l&apos;actualité des informations diffusées sur le site.
              La kinésiologie et la maderothérapie ne se substituent en aucun cas
              à un suivi médical.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
