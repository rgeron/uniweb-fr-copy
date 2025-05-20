"use client";

import { SectionLayout } from "@/features/section-layout";
import { animate } from "motion/react";
import { useEffect, useRef } from "react";

type StatProps = {
  number: number;
  suffix: string;
  text: string;
  source: string;
};

const stats: StatProps[] = [
  {
    number: 12,
    suffix: "M",
    text: "personnes handicapées en France",
    source: "Ministère de la Santé et de la Prévention",
  },
  {
    number: 4.5,
    suffix: "M",
    text: "de dyslexiques en France",
    source: "FFdys",
  },
  {
    number: 700,
    suffix: "K",
    text: "personnes atteinte de TSA en France",
    source: "Inserm",
  },
  {
    number: 272.5,
    suffix: "K",
    text: "personnes atteintes de la Maladie de Parkinson en France",
    source: "Ministère de la Santé",
  },
  {
    number: 207,
    suffix: "K",
    text: "aveugles et malvoyants profonds en France",
    source: "Fédération des Aveugles de France",
  },
];

export function StatsSection() {
  return (
    <SectionLayout size="lg" className="mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Quelques chiffres sur le handicap en France
        </h2>
      </div>
      <div className="grid w-full items-center gap-12 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-3 lg:grid-cols-5 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter from={0} to={stat.number} />
              {stat.suffix}
            </h4>
            <p className="mb-1">{stat.text}</p>
            <p className="text-muted-foreground text-xs italic">
              Source: {stat.source}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      ease: "easeInOut",

      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}
