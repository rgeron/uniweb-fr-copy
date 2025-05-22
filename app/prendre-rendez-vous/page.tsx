"use client";

import { useEffect } from "react";

// Définir l'interface pour l'objet hbspt
interface HubSpotForms {
  forms: {
    create: (config: {
      portalId: string;
      formId: string;
      region: string;
      target: string;
    }) => void;
  };
}

// Étendre l'interface Window
declare global {
  interface Window {
    hbspt: HubSpotForms;
  }
}

export default function PrendreRendezVousPage() {
  useEffect(() => {
    // Charger le script HubSpot
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Créer le formulaire une fois que le script est chargé
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "146251277",
          formId: "7fea9dfa-cf3b-4716-b322-d8f5b179575c",
          region: "eu1",
          target: "#hubspot-form"
        });
      }
    };

    return () => {
      // Nettoyer le script au démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Prendre rendez-vous avec notre équipe</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-center mb-8">
          Vous souhaitez en savoir plus sur notre solution d&apos;accessibilité web ?
          Planifiez un rendez-vous avec l&apos;un de nos experts qui répondra à toutes vos questions.
        </p>
        <div id="hubspot-form" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"></div>
      </div>
    </div>
  );
} 