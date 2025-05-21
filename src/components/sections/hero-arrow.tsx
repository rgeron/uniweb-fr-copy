"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroArrow() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Start fading out immediately when scrolling begins
      // Fully disappear by 150px of scroll
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full relative overflow-visible py-6 md:py-12 lg:py-16 mb-52">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="flex flex-col items-center max-w-4xl -mt-4 md:-mt-6">
          <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal mb-1 sm:mb-2 text-foreground/70 tracking-tight">
            Rendez votre site web
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mt-0 sm:mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 tracking-tight leading-[1.1]">
            Accessible à tous
          </span>
        </h1>
      </div>

      <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-20">
        <div className="relative w-full h-full overflow-visible">
          <Image
            src="/svg/arrow.svg"
            alt="Flèche décorative"
            width={1920}
            height={610}
            className="absolute transition-opacity duration-200 ease-out [filter:invert(34%)_sepia(90%)_saturate(2000%)_hue-rotate(210deg)_brightness(84%)_contrast(101%)] 
              sm:max-w-none opacity-70 md:opacity-80
              
              w-[95%] sm:w-[93%] md:w-[95%] lg:w-[95%]
              
              left-0 sm:left-0 md:left-0 lg:left-0
              top-[70%] sm:top-[90%] lg:top-[55%]
              transform-none sm:transform-none lg:transform-none"
            style={{
              opacity: opacity,
              objectFit: "cover",
              objectPosition: "left center",
            }}
            priority
          />

          <div
            className="absolute border-l-6 border-t-6 border-b-6 md:border-l-8 md:border-t-8 md:border-b-8 lg:border-l-10 lg:border-t-10 lg:border-b-10 rounded-l-2xl border-blue-600 bg-transparent w-10 h-14 md:w-14 md:h-20 lg:w-16 lg:h-24 transition-opacity duration-200 ease-out
              right-0 sm:right-0 lg:right-0 
              top-[105%] sm:top-[143%] lg:top-[105%]
              translate-y-[-50%] sm:translate-y-[-50%] lg:translate-y-[-50%]"
            style={{
              opacity: opacity,
              borderRight: "none",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
