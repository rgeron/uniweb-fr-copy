import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";

type FeatureItem = {
  text: string;
};

type MainInfoCardProps = {
  title: string;
  features: FeatureItem[];
  className?: string;
};

export function MainInfoCard(props: MainInfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full",
        props.className
      )}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="bg-primary text-primary-foreground p-4 text-center text-2xl font-bold rounded-xl mb-6">
          {props.title}
        </div>
        <div className="flex flex-col space-y-6 flex-grow">
          {props.features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 rounded-full border border-border bg-background p-1.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">{feature.text}</span>
              </div>
              {index < props.features.length - 1 && (
                <Separator className="bg-muted" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
