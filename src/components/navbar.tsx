"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-background shadow-lg py-2 border-b border-border z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/images/uniweb-full-logo.png"
            alt="Uniweb"
            width={150}
            height={75}
            className="flex-shrink-0"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-8">
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

        <div className="flex items-center gap-4">
          <a
            href="/essai-gratuit"
            className="px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            Essai gratuit
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4">
          <div className="flex flex-col space-y-4 px-4">
            <div className="border-b border-border pb-3">
              <p className="font-medium mb-2">Notre service</p>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  href="/que-faisons-nous"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Que faisons-nous ?
                </Link>
                <Link
                  href="/fonctionnalites"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fonctionnalités de l&apos;outil
                </Link>
                <Link
                  href="/conformite"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Conformité WCAG et RGAA
                </Link>
                <Link
                  href="/securite"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Engagement en matière de sécurité
                </Link>
              </div>
            </div>

            <div className="border-b border-border pb-3">
              <p className="font-medium mb-2">Qui sommes-nous</p>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  href="/notre-histoire"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notre histoire
                </Link>
                <Link
                  href="/valeurs"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Valeurs et engagement
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="border-b border-border pb-3">
              <p className="font-medium mb-2">Contact</p>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  href="/renseignements"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demande de renseignement
                </Link>
                <Link
                  href="/devis"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demande de devis
                </Link>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
