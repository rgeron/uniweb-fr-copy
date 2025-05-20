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
            src="/images/logo/uniweb-full-logo.png"
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
              item="Qui sommes-nous ?"
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Notre engagement"
                  href="/notre-engagement"
                  src="/images/navbar/engagement.png"
                  description="Nos promesses et notre dévouement envers l'accessibilité."
                />
                <ProductItem
                  title="Notre histoire"
                  href="/notre-histoire"
                  src="/images/navbar/histoire.png"
                  description="Découvrez la genèse et l'évolution de Uniweb."
                />
                <ProductItem
                  title="Nos partenaires"
                  href="/nos-partenaires"
                  src="/images/navbar/partenaire.png"
                  description="Ceux qui nous soutiennent et collaborent avec nous."
                />
                <ProductItem
                  title="Nos articles"
                  href="/blog"
                  src="/images/navbar/article.png"
                  description="Restez informé avec nos dernières actualités et analyses."
                />
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Que faisons-nous ?"
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Comment ça marche ?"
                  href="/comment-ca-marche"
                  src="/images/navbar/comment.png"
                  description="Découvrez le fonctionnement de notre solution d'accessibilité."
                />
                <ProductItem
                  title="Sécurité des données"
                  href="/securite"
                  src="/images/navbar/shield.png"
                  description="Nous garantissons la sécurité des données et le respect de la vie privée."
                />
                <ProductItem
                  title="Point de vue client"
                  href="/point-de-vue-client"
                  src="/images/navbar/company.png"
                  description="L'impact de notre solution du point de vue de nos clients."
                />
                <ProductItem
                  title="Point de vue utilisateur"
                  href="/point-de-vue-utilisateur"
                  src="/images/navbar/user.png"
                  description="L'amélioration de l'expérience pour les utilisateurs finaux."
                />
              </div>
            </MenuItem>
            <HoveredLink href="/rgaa">RGAA</HoveredLink>
            <HoveredLink href="/tarifs">Les tarifs</HoveredLink>
          </Menu>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/essai-gratuit"
            className="px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            30 jours gratuit
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
              <p className="font-medium mb-2">Qui sommes-nous ?</p>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  href="/notre-engagement"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notre engagement
                </Link>
                <Link
                  href="/notre-histoire"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notre histoire
                </Link>
                <Link
                  href="/nos-partenaires"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nos partenaires
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nos articles
                </Link>
              </div>
            </div>

            <div className="border-b border-border pb-3">
              <p className="font-medium mb-2">Que faisons-nous ?</p>
              <div className="flex flex-col space-y-2 pl-2">
                <Link
                  href="/comment-ca-marche"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Comment ça marche ?
                </Link>
                <Link
                  href="/securite"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sécurité des données
                </Link>
                <Link
                  href="/point-de-vue-client"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Point de vue client
                </Link>
                <Link
                  href="/point-de-vue-utilisateur"
                  className="text-sm text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Point de vue utilisateur
                </Link>
              </div>
            </div>

            <Link
              href="/rgaa"
              className="text-sm font-medium text-foreground pb-3 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RGAA
            </Link>
            <Link
              href="/tarifs"
              className="text-sm font-medium text-foreground pb-3 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Les tarifs
            </Link>

            <div className="pt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
