import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardDescription,
  InfoCardFooter,
  InfoCardMedia,
  InfoCardTitle,
} from "@/components/ui/info-card";
import { SectionLayout } from "@/features/section-layout";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectExplanation() {
  const cardData = [
    {
      title: "Facile à mettre en place POUR VOUS",
      description: "Ajouter un seul script à votre site web.",
      videoSrc: "/videos/easy-to-implement.mov",
      learnMoreLink: "/point-de-vue-client",
      storageKey: "info-card-easy-to-implement",
      className: "",
    },
    {
      title: "Facile à utiliser POUR TOUS",
      description: "Votre site web reste le même, mais accessible à tous.",
      videoSrc: "/videos/easy-to-use.mov",
      learnMoreLink: "/point-de-vue-utilisateur",
      storageKey: "info-card-easy-to-use",
      className: "",
    },
    {
      title: "Respecte les critères RGAA",
      description: "Conforme aux critères RGAA 4.1",
      videoSrc: "/videos/rgpa-compliant.mov",
      learnMoreLink: "/rgaa",
      storageKey: "info-card-rgpa-compliant",
      className: "",
    },
  ];

  return (
    <SectionLayout
      id="project-explanation"
      size="xl"
      variant="default"
      aria-labelledby="project-explanation-title"
      className="relative z-10 -mt-16 md:-mt-24 pt-20 md:pt-32"
      containerClassName="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center">
        {cardData.map((card) => (
          <InfoCard key={card.title} className={card.className}>
            <InfoCardContent>
              <InfoCardTitle className="text-xl font-semibold mb-2">
                {card.title}
              </InfoCardTitle>
              <InfoCardDescription className="text-sm mb-3">
                {card.description}
              </InfoCardDescription>
              <InfoCardMedia
                media={[
                  {
                    type: "video",
                    src: card.videoSrc,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                  },
                ]}
                shrinkHeight={120}
                expandHeight={200}
              />
            </InfoCardContent>
            <InfoCardFooter className="mt-3">
              <InfoCardAction>
                <Link
                  href={card.learnMoreLink}
                  className="text-xs flex flex-row items-center gap-1 text-primary hover:underline"
                >
                  Voir plus <ExternalLink size={12} />
                </Link>
              </InfoCardAction>
            </InfoCardFooter>
          </InfoCard>
        ))}
      </div>
    </SectionLayout>
  );
}
