import React from "react";
import { Mountain, Waves, Home, TreePine, Flame, Star, MapPin, Utensils } from "lucide-react";
import { Button } from "./ui/button";

export const categories = [
  { icon: Flame, label: "Trending" },
  { icon: Waves, label: "Beachfront" },
  { icon: Mountain, label: "Mountains" },
  { icon: Home, label: "Iconic cities" },
  { icon: TreePine, label: "Countryside" },
  { icon: Star, label: "Top rated" },
  { icon: MapPin, label: "Amazing views" },
  { icon: Utensils, label: "Chef's kitchen" },
];

interface CategoryBarProps {
  selected?: string;
  onSelect?: (label: string) => void;
}

export function CategoryBar({ selected = "Trending", onSelect }: CategoryBarProps) {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-[1760px] px-6 lg:px-20">
        <div role="tablist" aria-label="Categories" className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selected === category.label;

            return (
              <button
                key={category.label}
                onClick={() => onSelect?.(category.label)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center gap-2 pb-2 border-b-2 transition-colors min-w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF385C] ${
                  isSelected
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden />
                <span className="text-xs whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
