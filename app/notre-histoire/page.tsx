import { Timeline } from "./Timeline";

export default function NotreHistoirePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
        Notre Histoire
      </h1>

      {/* Timeline Section will go here */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Les Grandes Étapes de Notre Aventure
        </h2>
        <Timeline />
      </section>

      {/* User Pilot Section */}
      <section className="mb-16 flex flex-col items-center gap-8 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Le Premier Pilote : Une Validation Cruciale
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Notre collaboration avec Jean Dupont, un utilisateur pionnier et
            visionnaire, a été déterminante. Son site web, autrefois complexe à
            naviguer pour certains, est devenu un modèle d&apos;accessibilité
            grâce à l&apos;intégration de notre script.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Cette première implémentation réussie nous a confortés dans notre
            approche et a ouvert la voie à de nombreuses améliorations,
            façonnant notre solution pour qu&apos;elle réponde au mieux aux
            besoins réels des utilisateurs et des propriétaires de sites.
          </p>
        </div>
        <div className="md:w-1/2">
          {/* Placeholder for an image */}
          <div className="aspect-video w-full rounded-lg bg-gray-300 dark:bg-gray-700">
            <img
              src="https://via.placeholder.com/600x400.webp?text=Jean+Dupont+-+Premier+Pilote"
              alt="Jean Dupont, premier utilisateur pilote de notre solution d'accessibilité"
              className="h-full w-full rounded-lg object-cover"
              width={600}
              height={400}
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Jean Dupont, transformant l&apos;accessibilité de son site grâce à
            notre solution.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Et Demain ?
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          Forts de ces succès et animés par une volonté constante
          d&apos;innovation, nous continuons d&apos;améliorer notre script et
          d&apos;explorer de nouvelles pistes pour un web toujours plus
          accessible. Notre ambition est simple : que chaque site web, quelle
          que soit sa complexité, puisse offrir une expérience optimale à tous
          ses visiteurs.
        </p>
      </section>
    </div>
  );
}
