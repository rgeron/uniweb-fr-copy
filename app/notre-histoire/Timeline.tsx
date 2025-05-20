type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
};

function TimelineItem(props: TimelineItemProps) {
  const { year, title, description, isLast } = props;
  return (
    <div className="relative flex flex-col items-center pt-2">
      <div className="absolute left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 transform rounded-full bg-blue-600 dark:bg-blue-400"></div>
      {!isLast && (
        <div className="absolute left-1/2 top-4 h-0.5 w-full bg-gray-300 dark:bg-gray-600"></div>
      )}
      <div className="mt-8 flex h-56 w-full flex-col rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:shadow-blue-500/20">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {year}
        </p>
        <h3 className="my-2 text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="flex-grow overflow-hidden text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

const TIMELINE_DATA = [
  {
    year: "2021 - Q1",
    title: "L'Idée Germe",
    description:
      "Prise de conscience de la fracture numérique et naissance de l'ambition de rendre le web universellement accessible.",
  },
  {
    year: "2021 - Q4",
    title: "Premier Prototype",
    description:
      "Développement d'une version alpha du script, testée sur des sites web internes avec des résultats prometteurs.",
  },
  {
    year: "2022 - Q2",
    title: "Lancement du Programme Pilote",
    description:
      "Collaboration avec des partenaires et des utilisateurs précoces pour affiner la solution en conditions réelles.",
  },
  {
    year: "2023 - Q1",
    title: "Sortie Officielle",
    description:
      "Mise à disposition publique de la première version stable de notre script d'accessibilité, prête à transformer le web.",
  },
  {
    year: "Aujourd'hui",
    title: "Innovation Continue",
    description:
      "Amélioration constante de notre technologie et expansion de notre impact pour un internet toujours plus inclusif.",
  },
];

export function Timeline() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="relative mx-auto flex min-w-max justify-start gap-8 px-4 md:gap-12">
        {TIMELINE_DATA.map((item, index) => (
          <div key={item.title} className="w-64 flex-shrink-0 md:w-72">
            <TimelineItem
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === TIMELINE_DATA.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
