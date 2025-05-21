"use client";

import { PartnerCard } from "@/components/partner-card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

// Partner data
const partners = [
  {
    id: 1,
    title: "Nos partenaires associatifs",
    description:
      "Notre solution est d'abord pensée avec et pour les personnes handicapées. Depuis le premier prototype, nous collaborons avec des associations référentes qui valident chaque nouvelle version au travers de tests utilisateurs réguliers.",
    src: "/placeholder.svg?height=600&width=800",
    url: "#associations",
    color: "#FFF7ED", // amber-50
    partnerLogos: [
      {
        name: "Association Valentin Haüy",
        logo: "/placeholder.svg",
        certified: true,
      },
      { name: "APAJH", logo: "/placeholder.svg", certified: true },
      { name: "UNAPEI", logo: "/placeholder.svg" },
      {
        name: "APF France Handicap",
        logo: "/placeholder.svg",
        certified: true,
      },
      { name: "CFPSAA", logo: "/placeholder.svg" },
    ],
    testimonial: {
      quote:
        "Cette solution a transformé notre approche de l'accessibilité numérique, rendant nos contenus enfin accessibles à tous nos membres.",
      author: "Marie Dupont",
      role: "Directrice, Association Valentin Haüy",
    },
  },
  {
    id: 2,
    title: "Nos partenaires institutionnels",
    description:
      "Notre conformité repose sur un dialogue constant avec les organismes publics et académiques. Ensemble, nous faisons progresser les normes d'accessibilité numérique.",
    src: "/placeholder.svg?height=600&width=800",
    url: "#institutions",
    color: "#F0F9FF", // sky-50
    highlights: [
      "95% de conformité avec les normes RGAA",
      "Certification par la DINUM",
      "Participation aux comités d'experts",
      "Chaire Accessibilité & IA avec l'université",
    ],
    partnerLogos: [
      { name: "DINUM", logo: "/placeholder.svg" },
      { name: "CNIL", logo: "/placeholder.svg" },
      { name: "Ministère de la Culture", logo: "/placeholder.svg" },
      { name: "Ministère du Numérique", logo: "/placeholder.svg" },
    ],
  },
  {
    id: 3,
    title: "Nos entreprises partenaires",
    description:
      "Des entreprises avant-gardistes intègrent notre solution pour rendre leurs sites accessibles à tous. Notre réseau de partenaires revendeurs accompagne ces organisations dans leur démarche d'inclusion.",
    src: "/placeholder.svg?height=600&width=800",
    url: "#entreprises",
    color: "#ECFDF5", // emerald-50
    highlights: [
      "Programme partenaire avec commissions récurrentes",
      "Audit gratuit pour les revendeurs certifiés",
      "Support marketing et commercial dédié",
      "Formation technique et certification",
    ],
    partnerLogos: [
      { name: "Orange", logo: "/placeholder.svg" },
      { name: "La Poste", logo: "/placeholder.svg" },
      { name: "SNCF", logo: "/placeholder.svg" },
      { name: "Société Générale", logo: "/placeholder.svg" },
      { name: "EDF", logo: "/placeholder.svg" },
      { name: "Carrefour", logo: "/placeholder.svg" },
    ],
  },
];

export function PartnerStackedCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos partenaires font notre force
          </h1>
          <p className="text-lg md:text-xl">
            Innovation inclusive co-construite avec des leaders engagés
          </p>
          <div className="w-full max-w-md mx-auto h-1 bg-[#3f3eff] mt-4"></div>
          <p className="mt-8 text-base md:text-lg text-muted-foreground">
            Découvrez l'écosystème qui entoure notre solution et la rend chaque
            jour plus efficace et inclusive.
          </p>
        </div>
      </div>

      <div ref={container} className="relative">
        {partners.map((partner, i) => {
          const targetScale = 1 - (partners.length - i) * 0.05;
          return (
            <PartnerCard
              key={`p_${i}`}
              i={i}
              {...partner}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Extra space at the bottom to allow scrolling */}
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Envie de rejoindre l'aventure ?
          </h2>
          <p className="text-lg mb-8">
            Que vous soyez une association, une institution publique ou une
            entreprise, nous sommes toujours à la recherche de nouveaux
            partenaires.
          </p>
          <a
            href="#contact"
            className="bg-[#3f3eff] hover:bg-[#3f3eff]/90 text-white px-6 py-3 rounded-md inline-block font-medium transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </>
  );
}
