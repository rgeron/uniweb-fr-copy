import { FeaturesSection } from "@/components/feature-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex justify-center">
      <main className="flex flex-col gap-8 w-[60%]">
        <FeaturesSection
          features={[
            {
              badge: "Étape 1",
              title: "Ajouter un nom de domaine",
              description:
                "Ajoutez facilement votre domaine sur notre plateforme pour commencer à rendre votre site accessible.",
              component: (
                <div className="flex items-center justify-center h-[200px] w-full">
                  <Image
                    src="/gif/ajouter.gif"
                    alt="Ajouter un nom de domaine"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            },
            {
              badge: "Étape 2",
              title: "Copier le script donné par la plateforme",
              description:
                "Notre plateforme génère un script unique adapté à votre site web.",
              component: (
                <div className="flex items-center justify-center h-[200px] w-full">
                  <Image
                    src="/gif/script.gif"
                    alt="Copier le script"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            },
            {
              badge: "Étape 3",
              title: "Ajouter le script dans le body du site",
              description:
                "Intégrez simplement notre script dans le code source de votre site pour activer toutes les fonctionnalités d'accessibilité.",
              component: (
                <div className="flex items-center justify-center h-[200px] w-full">
                  <Image
                    src="/gif/code.gif"
                    alt="Ajouter le script dans le head"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            },
            {
              badge: "Résultat",
              title: "L'outil est directement sur le site internet",
              description:
                "Une fois installé, notre outil d'accessibilité est immédiatement opérationnel sur votre site, offrant une expérience inclusive à tous vos visiteurs.",
              component: (
                <div className="flex items-center justify-center h-[200px] w-full">
                  <Image
                    src="/gif/site.gif"
                    alt="Résultat sur le site"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              ),
            },
          ]}
        />
      </main>
    </div>
  );
}
