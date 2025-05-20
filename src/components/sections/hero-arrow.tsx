"use client";

import Image from "next/image";

export function HeroArrow() {
  return (
    <section className="w-full relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl lg:text-4xl font-medium mb-1 md:mb-2 text-foreground/90">
            Rendez vos sites web
          </span>
          <span className="text-4xl md:text-8xl lg:text-9xl font-extrabold mt-1 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            accessibles à tous
          </span>
        </h1>
      </div>

      <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/svg/main-arrow.svg"
            alt="Flèche décorative"
            width={1372}
            height={610}
            className="absolute transform translate-x-1/4 -right-[10%] top-1/2 -translate-y-1/2 opacity-70 md:opacity-80 max-w-none w-[140%] md:w-[120%] lg:w-[110%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
