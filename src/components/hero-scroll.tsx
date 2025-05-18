"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Rendez vos sites web <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-3 mb-3 leading-none">
                accessible à tous
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
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
