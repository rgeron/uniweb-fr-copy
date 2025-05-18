"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-background shadow-lg py-2 border-b border-border z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Image
          src="/images/uniweb-full-logo.png"
          alt="Uniweb"
          width={200}
          height={100}
          className="flex-shrink-0"
        />

        <div className="flex-grow flex justify-center items-center gap-8">
          <Menu setActive={setActive}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Notre service"
            >
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
          <ThemeToggle />
        </div>

        <a
          href="/essai-gratuit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-base"
        >
          Essai gratuit
        </a>
      </div>
    </div>
  );
}
