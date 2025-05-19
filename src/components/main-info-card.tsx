import { Check } from "lucide-react";

type FeatureItem = {
  text: string;
};

type MainInfoCardProps = {
  title: string;
  features: FeatureItem[];
};

export function MainInfoCard(props: MainInfoCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 overflow-hidden flex flex-col">
      <div className="bg-gray-900 text-white p-6 text-center text-2xl font-bold">
        {props.title}
      </div>
      <div className="p-4 flex flex-col space-y-4">
        {props.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0 rounded-full border border-gray-200 p-1">
              <Check className="h-5 w-5 text-gray-900" />
            </div>
            <span className="text-gray-800">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
