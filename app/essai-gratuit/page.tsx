"use client";

import { useEffect } from "react";

export default function EssaiGratuitPage() {
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
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "146251277",
          formId: "26d0f065-c519-467d-95ad-ac9dd8bb35d6",
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
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Essayez Uniweb gratuitement pendant 30 jours</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-center mb-8">
          Découvrez comment notre solution peut rendre votre site web accessible à tous, 
          conformément aux normes RGAA. Remplissez simplement le formulaire ci-dessous 
          pour commencer votre période d'essai gratuite.
        </p>
        <div id="hubspot-form" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"></div>
      </div>
    </div>
  );
}
