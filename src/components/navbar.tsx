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
    <div className="fixed top-4 left-0 right-0 mx-auto w-[90%] z-50">
      <div className="flex justify-between items-center gap-6">
        {/* Left Container */}
        <div className="flex-1 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-xl rounded-xl p-5 border border-border h-20">
          <div className="flex items-center justify-between h-full">
            <Link href="/">
              <Image
                src="/images/logo/uniweb-full-logo.png"
                alt="Uniweb"
                width={140}
                height={70}
                className="flex-shrink-0"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center gap-8 mx-auto">
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

            {/* Connexion button - moved from right div */}
            <div className="hidden md:flex">
              <Link
                href="/connexion"
                className="px-5 py-2.5 text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-xl rounded-xl p-5 border border-border h-20">
          <div className="flex items-center h-full">
            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/prendre-rendez-vous"
                className="hidden md:inline-flex px-6 py-3 rounded-lg font-medium transition-all text-lg hover:scale-110"
              >
                Prendre rendez-vous
              </Link>
              <a
                href="/essai-gratuit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all text-lg shadow-md hover:shadow-lg hover:scale-105"
              >
                Essayer 30 jours gratuit
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

            <div className="border-t border-border pt-4 flex flex-col space-y-3">
              <Link
                href="/connexion"
                className="px-4 py-2 text-center text-foreground hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/prendre-rendez-vous"
                className="px-4 py-2 text-center text-foreground bg-secondary hover:bg-secondary/90 rounded-md font-medium transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prendre rendez-vous
              </Link>
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
