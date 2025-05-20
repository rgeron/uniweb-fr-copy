"use client";

import { SectionLayout } from "@/features/section-layout";
import { useTheme } from "next-themes";
import Link from "next/link";
import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import { Facebook, Linkedin, Moon, Sun } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function FooterSection() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <footer className="border-t border-border">
      <SectionLayout
        size="lg"
        variant="default"
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Contactez-nous
            </h2>
            <address className="space-y-2 text-sm not-italic">
              <p>Téléphone: (+33) 7 83 32 79 60</p>
              <p>Email: contact@uniweb.fr</p>
            </address>

            <h3 className="mt-6 mb-4 text-lg font-semibold">
              ...et suivez-nous
            </h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Suivez-nous sur Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connectez-vous sur LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {hasMounted && (
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
            )}

            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Qui sommes-nous ?</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/notre-engagement"
                className="block transition-colors hover:text-primary"
              >
                Notre engagement
              </Link>
              <Link
                href="/notre-histoire"
                className="block transition-colors hover:text-primary"
              >
                Notre histoire
              </Link>
              <Link
                href="/nos-partenaires"
                className="block transition-colors hover:text-primary"
              >
                Nos partenaires
              </Link>
              <Link
                href="/blog"
                className="block transition-colors hover:text-primary"
              >
                Nos articles
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Que faisons-nous ?</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/comment-ca-marche"
                className="block transition-colors hover:text-primary"
              >
                Comment ça marche ?
              </Link>
              <Link
                href="/securite"
                className="block transition-colors hover:text-primary"
              >
                Sécurité des données
              </Link>
              <Link
                href="/point-de-vue-client"
                className="block transition-colors hover:text-primary"
              >
                Point de vue client
              </Link>
              <Link
                href="/point-de-vue-utilisateur"
                className="block transition-colors hover:text-primary"
              >
                Point de vue utilisateur
              </Link>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Liens rapides</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/rgaa"
                className="block transition-colors hover:text-primary"
              >
                RGAA
              </Link>
              <Link
                href="/tarifs"
                className="block transition-colors hover:text-primary"
              >
                Les tarifs
              </Link>
            </nav>
          </div>
        </div>
      </SectionLayout>
      <div className="bg-muted text-muted-foreground py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center md:flex-row md:pt-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Uniweb. Tous droits réservés.
            </p>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="transition-colors hover:text-primary">
                Politique de confidentialité
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Conditions d&apos;utilisation
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Paramètres des cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
