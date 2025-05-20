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
        <div className="relative w-full h-full">
          <Image
            src="/svg/main-arrow.svg"
            alt="Flèche décorative"
            width={1372}
            height={610}
            className="absolute transition-opacity duration-200 ease-out [filter:invert(34%)_sepia(90%)_saturate(2000%)_hue-rotate(210deg)_brightness(84%)_contrast(101%)] 
              sm:max-w-none opacity-70 md:opacity-80
              
              sm:w-[90%] md:w-[90%] lg:w-[80%]
              
              sm:transform sm:translate-x-1/4 sm:right-[30%] sm:top-[120%] sm:-translate-y-1/2
              lg:right-[15%] lg:top-[80%] lg:translate-x-0 lg:-translate-y-1/2
              
              w-[90%] -right-[20%] top-[110%] -translate-x-1/3 -translate-y-1/3"
            style={{ opacity: opacity }}
            priority
          />

          <div
            className="absolute border-4 border-blue-600 bg-transparent w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-opacity duration-200 ease-out
              sm:right-[10%] sm:top-[120%] 
              lg:right-[5%] lg:top-[80%]
              right-[0%] top-[110%]"
            style={{ opacity: opacity }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
