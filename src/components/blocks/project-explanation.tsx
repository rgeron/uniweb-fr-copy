import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardDescription,
  InfoCardFooter,
  InfoCardMedia,
  InfoCardTitle,
} from "@/components/ui/info-card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function ProjectExplanation() {
  const cardData = [
    {
      title: "Facile à Utiliser",
      description: "Découvrez comment notre script simplifie l'accessibilité.",
      videoSrc:
        "https://video.twimg.com/ext_tw_video/1811493439357476864/pu/vid/avc1/1280x720/r_A2n1_eDbYiTMkU.mp4?tag=12",
      learnMoreLink: "/features/easy-to-use",
      storageKey: "info-card-easy-to-use",
      className: "",
    },
    {
      title: "Facile à Voir",
      description: "Voyez les ajustements visuels en action.",
      videoSrc:
        "https://videos.pexels.com/video-files/3844600/3844600-hd_1280_720_25fps.mp4",
      learnMoreLink: "/features/easy-to-see",
      storageKey: "info-card-easy-to-see",
      className: "",
    },
    {
      title: "Respect des Normes",
      description: "Comprenez notre engagement envers les standards WCAG.",
      videoSrc:
        "https://videos.pexels.com/video-files/7578539/7578539-hd_1280_720_30fps.mp4",
      learnMoreLink: "/features/standards-compliant",
      storageKey: "info-card-standards-compliant",
      className:
        "md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:mx-0 lg:max-w-none",
    },
  ];

  return (
    <section className="w-full bg-muted/40 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                  shrinkHeight={150}
                  expandHeight={250}
                />
              </InfoCardContent>
              <InfoCardFooter className="mt-3">
                <InfoCardAction>
                  <Link
                    href={card.learnMoreLink}
                    className="text-xs flex flex-row items-center gap-1 text-primary hover:underline"
                  >
                    Learn more <ExternalLink size={12} />
                  </Link>
                </InfoCardAction>
              </InfoCardFooter>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
