"use client";
import { FeaturesSection } from "@/components/feature-section";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col items-center">
      <Navbar />
      <main className="flex flex-col gap-8 pt-28">
        <div className="w-[60%] mx-auto">
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
        </div>
      </main>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="flex items-center justify-between w-full">
        <Image
          src="/images/uniweb-full-logo.png"
          alt="Uniweb"
          width={120}
          height={40}
          className="mr-4"
        />
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Notre service">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Que faisons-nous ?"
                href="/que-faisons-nous"
                src="/images/service/accessibilite.png"
                description="Découvrez notre mission et notre approche pour améliorer l'accessibilité web."
              />
              <ProductItem
                title="Fonctionnalités de l'outil"
                href="/fonctionnalites"
                src="/images/service/fonctionnalite.png"
                description="Explorez les fonctionnalités de notre solution d'accessibilité web."
              />
              <ProductItem
                title="Conformité WCAG et RGAA"
                href="/conformite"
                src="/images/service/wcag.png"
                description="Notre solution respecte les normes internationales d'accessibilité."
              />
              <ProductItem
                title="Engagement en matière de sécurité"
                href="/securite"
                src="/images/service/securite.png"
                description="Nous garantissons la sécurité des données et le respect de la vie privée."
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Qui sommes-nous"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/notre-histoire">Notre histoire</HoveredLink>
              <HoveredLink href="/valeurs">Valeurs et engagement</HoveredLink>
              <HoveredLink href="/blog">Blog</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/renseignements">
                Demande de renseignement
              </HoveredLink>
              <HoveredLink href="/devis">Demande de devis</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <a
          href="/essai-gratuit"
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Essai gratuit
        </a>
      </div>
    </div>
  );
}
