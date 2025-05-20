import { FaqSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/feature-section";
import { HeroArrow } from "@/components/sections/hero-arrow";
import { ProjectExplanation } from "@/components/sections/project-explanation";
import {
  BrandScroller,
  BrandScrollerReverse,
} from "@/components/ui/brand-scoller";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { contactInfo, faqItems } from "@/content/FAQ_CONTACT_DATA";
import { TESTIMONIALS } from "@/content/TESTIMONIALS";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col items-center bg-background text-foreground">
      <main className="flex flex-col gap-8 pt-8 pb-16 w-full">
        {/* Hero Section */}
        <HeroArrow />

        <ProjectExplanation />

        <div className="flex flex-col gap-6 items-center justify-center py-8">
          <BrandScroller />
          <BrandScrollerReverse />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
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
                      unoptimized
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
                      unoptimized
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
                      unoptimized
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
                      unoptimized
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ce que nos clients disent
          </h2>
          <TestimonialCarousel
            testimonials={TESTIMONIALS}
            companyLogoPath="/images/logo/"
            avatarPath="/images/avatars/"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <FaqSection
            title="Frequently Asked Questions"
            description="Find answers to common questions about Uniweb and web accessibility."
            items={faqItems}
            contactInfo={contactInfo}
            id="faq-section"
          />
        </div>
      </main>
    </div>
  );
}
