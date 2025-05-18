"use client";

import { DotPattern } from "@/components/svg/dot-pattern";
import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { ClientMarkdown } from "@/features/markdown/client-markdown";
import type { ReactNode } from "react";

export const FeaturesSection = ({
  features,
}: {
  features: FeatureLineProps[];
}) => {
  return (
    <div
      className="container mx-auto px-4 py-12 md:py-24 relative"
      id="features"
    >
      <div className="relative flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col items-center gap-2">
          <Badge>Comment ça marche ?</Badge>
          <Typography variant="h2" className="m-auto max-w-xl text-center">
            Rendez votre site accessible en 5min.
          </Typography>
          <Typography
            variant="muted"
            className="m-auto max-w-lg text-center text-base"
          >
            Notre solution innovante transforme instantanément votre site web
            pour le rendre conforme aux normes WCAG 2.1.
          </Typography>
        </div>
        {features.map((f, i) => {
          return (
            <FeatureLine
              key={i}
              badge={f.badge}
              title={f.title}
              description={f.description}
              component={f.component}
            />
          );
        })}
      </div>
    </div>
  );
};

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  component: ReactNode;
};

const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex items-center gap-4 odd:flex-row-reverse max-lg:!flex-col">
      <div className="flex flex-1 flex-col items-start gap-2">
        <Badge color="pink">{props.badge}</Badge>
        <Typography variant="h3" className="">
          {props.title}
        </Typography>
        <ClientMarkdown className="prose-sm">
          {props.description}
        </ClientMarkdown>
      </div>
      <div className="w-full max-w-sm">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
