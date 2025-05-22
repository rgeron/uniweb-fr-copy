"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Award, Building, Check, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface PartnerCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  partnerLogos?: Array<{
    name: string;
    logo: string;
    certified?: boolean;
  }>;
  highlights?: Array<string>;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

export function PartnerCard({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  partnerLogos,
  highlights,
  testimonial,
}: PartnerCardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Different icons based on card index
  const CardIcon = i === 0 ? Users : i === 1 ? Building : Award;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative h-[600px] w-[1000px] max-w-[90vw] rounded-3xl p-8 md:p-12 origin-top"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <CardIcon className="h-10 w-10" />
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            {i === 0 && (
              <span>
                Nos partenaires{" "}
                <span className="text-amber-600">associatifs</span>
              </span>
            )}
            {i === 1 && (
              <span>
                Nos partenaires{" "}
                <span className="text-sky-600">institutionnels</span>
              </span>
            )}
            {i === 2 && (
              <span>
                Nos <span className="text-emerald-600">entreprises</span>{" "}
                partenaires
              </span>
            )}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row h-full gap-8 md:gap-12">
          <div className="w-full md:w-2/5 relative">
            <p className="text-base md:text-lg">
              <span className="text-2xl font-bold">
                {description.charAt(0)}
              </span>
              {description.slice(1)}
            </p>

            <div className="flex items-center gap-2 mt-6">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm md:text-base underline cursor-pointer hover:text-[#3f3eff]"
              >
                En savoir plus
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {highlights && (
              <div className="mt-6 space-y-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {testimonial && (
              <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200">
                <p className="text-sm md:text-base italic mb-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-right">
                  — {testimonial.author}
                  {testimonial.role && (
                    <span className="font-normal text-gray-600 block text-xs">
                      {testimonial.role}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>

          <div className="relative w-full md:w-3/5 h-[250px] md:h-full rounded-2xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <div className="relative w-full h-full">
                <Image src={src} alt={title} fill className="object-cover" />

                {/* Logo grid */}
                {partnerLogos && partnerLogos.length > 0 && (
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-6 max-w-[90%] max-h-[90%] overflow-auto">
                      {partnerLogos.map((partner, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-2 md:p-4 flex flex-col items-center justify-center relative"
                        >
                          <div className="relative h-12 md:h-16 w-full">
                            <Image
                              src={partner.logo}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-xs mt-2 text-center text-gray-700">
                            {partner.name}
                          </span>

                          {partner.certified && (
                            <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {i === 0 && (
                  <div className="absolute left-4 top-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                    Associations
                  </div>
                )}

                {i === 1 && (
                  <div className="absolute left-4 top-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                    Institutions
                  </div>
                )}

                {i === 2 && (
                  <div className="absolute left-4 top-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                    Entreprises
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
