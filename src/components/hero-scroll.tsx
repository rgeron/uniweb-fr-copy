"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden -mt-12 md:-mt-24">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-medium text-black dark:text-white">
              Rendez vos sites web
              <span className="text-4xl md:text-[6.5rem] font-bold -mb-8 md:-mb-16 leading-none block">
                accessibles à tous
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/hero.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-right-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
