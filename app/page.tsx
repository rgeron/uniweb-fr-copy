import { FeaturesSection } from "@/components/feature-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex justify-center">
      <main className="flex flex-col gap-8 w-[60%]">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
          <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 tracking-[-.01em]">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                  app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div>
          </div>
        </div>

        <FeaturesSection
          features={[
            {
              badge: "1️⃣ Étape 1",
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
              badge: "2️⃣ Étape 2",
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
              badge: "3️⃣ Étape 3",
              title: "Ajouter le script dans le head du site",
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
              badge: "4️⃣ Résultat",
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
