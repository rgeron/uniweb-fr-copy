import { FaqSection } from "@/components/blocks/faq";
import { FeaturesSection } from "@/components/feature-section";
import { ProjectExplanation } from "@/components/project-explanation";
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
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Rendez vos sites web
          <span className="text-6xl md:text-8xl lg:text-9xl font-extrabold block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            accessibles à tous
          </span>
        </h1>
      </section>

      <ProjectExplanation />

      <main className="flex flex-col gap-8 pt-8 pb-16 w-full">
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
