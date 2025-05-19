import { MainInfoCard } from "./main-info-card";

export function ProjectExplanation() {
  return (
    <section className="w-full bg-muted/40 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <MainInfoCard
            title="facile à utiliser"
            features={[
              { text: "lecteur d'écran" },
              { text: "commande vocale" },
              { text: "en un clic" },
            ]}
          />
          <MainInfoCard
            title="facile à voir"
            features={[
              { text: "augmente la taille du texte" },
              { text: "ajuste les couleurs" },
              { text: "aide à la concentration" },
            ]}
          />
          <MainInfoCard
            title="respect des normes"
            features={[
              { text: "norme RCGAA française" },
              { text: "normes WCAG mondiales" },
              { text: "mise à jour des normes" },
            ]}
            className="md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:mx-0 lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
