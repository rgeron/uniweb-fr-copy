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
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/accessibilite">Accessibilité Web</HoveredLink>
            <HoveredLink href="/conformite">Conformité WCAG</HoveredLink>
            <HoveredLink href="/audit">Audit d&apos;Accessibilité</HoveredLink>
            <HoveredLink href="/formation">Formation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Produits">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Widget d'Accessibilité"
              href="/widget"
              src="/images/widget.webp"
              description="Notre solution simple et efficace pour rendre votre site accessible."
            />
            <ProductItem
              title="Audit Automatisé"
              href="/audit-auto"
              src="/images/audit.webp"
              description="Analysez votre site et identifiez les problèmes d'accessibilité."
            />
            <ProductItem
              title="Certification"
              href="/certification"
              src="/images/certification.webp"
              description="Obtenez une certification officielle pour votre conformité WCAG."
            />
            <ProductItem
              title="API d'Accessibilité"
              href="/api"
              src="/images/api.webp"
              description="Intégrez nos fonctionnalités d'accessibilité via notre API."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Tarifs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/starter">Starter</HoveredLink>
            <HoveredLink href="/pro">Professionnel</HoveredLink>
            <HoveredLink href="/entreprise">Entreprise</HoveredLink>
            <HoveredLink href="/sur-mesure">Sur Mesure</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
