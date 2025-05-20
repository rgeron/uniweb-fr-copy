"use client";

import { DotPattern } from "@/components/svg/dot-pattern";
import { Typography } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { ClientMarkdown } from "@/features/markdown/client-markdown";
import { SectionLayout } from "@/features/section-layout";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FeaturesSection(props: FeaturesSectionProps) {
  const { features, className, id = "features" } = props;

  return (
    <SectionLayout
      id={id}
      size="base"
      variant="default"
      containerClassName={cn("bg-muted/30", className)}
      aria-labelledby="features-title"
    >
      <div className="text-center mb-12 space-y-2">
        <Badge>Comment ça marche ?</Badge>
        <Typography
          variant="h2"
          id="features-title"
          className="m-auto max-w-xl text-center"
        >
          Rendez votre site accessible en 5min.
        </Typography>
        <Typography
          variant="muted"
          className="m-auto max-w-lg text-center text-base"
        >
          Notre solution innovante transforme instantanément votre site web pour
          le rendre conforme aux normes WCAG 2.1.
        </Typography>
      </div>
      <div className="relative flex flex-col gap-6 md:gap-8 lg:gap-16">
        {features.map((f: FeatureLineProps, i: number) => {
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
    </SectionLayout>
  );
}

type FeatureLineProps = {
  badge: string;
  title: string;
  description: string;
  component: ReactNode;
};

const FeatureLine = (props: FeatureLineProps) => {
  return (
    <div className="flex flex-col lg:items-center gap-6 lg:odd:flex-row-reverse lg:even:flex-row">
      <div className="flex flex-1 flex-col items-start gap-2">
        <Badge color="pink">{props.badge}</Badge>
        <Typography variant="h3" className="">
          {props.title}
        </Typography>
        <ClientMarkdown className="prose-sm">
          {props.description}
        </ClientMarkdown>
      </div>
      <div className="w-full mx-auto max-w-xs sm:max-w-sm">
        <DotPattern>{props.component}</DotPattern>
      </div>
    </div>
  );
};
