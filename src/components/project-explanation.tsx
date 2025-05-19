import { MainInfoCard } from "./main-info-card";

export function ProjectExplanation() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainInfoCard
          title="facile à utiliser"
          features={[
            { text: "lecture vocale" },
            { text: "souligner les liens de la page" },
            { text: "afficher les infobulles" },
            { text: "afficher la structure de la page" },
          ]}
        />
        <MainInfoCard
          title="facile à voir"
          features={[
            { text: "augmenter la taille du texte" },
            { text: "ajuster les couleurs" },
            { text: "ajuster la luminosité" },
            { text: "pouvoir se concentrer sur les parties à lire" },
          ]}
        />
        <MainInfoCard
          title="soutien aux normes"
          features={[
            { text: "norme JIS nationale" },
            { text: "normes WCAG mondiales" },
            { text: "mise à jour des normes" },
          ]}
        />
      </div>
    </div>
  );
}
