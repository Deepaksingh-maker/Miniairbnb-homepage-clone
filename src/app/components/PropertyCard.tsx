import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  image: string;
  location: string;
  distance?: string;
  dates: string;
  price: number;
  rating: number;
  isSuperhost?: boolean;
}

export function PropertyCard({
  image,
  location,
  distance,
  dates,
  price,
  rating,
  isSuperhost,
  onClick,
}: PropertyCardProps & { onClick?: () => void }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article
      onClick={() => onClick?.()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick?.();
      }}
      style={{ touchAction: 'manipulation' }}
      className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF385C] rounded-lg transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:shadow-md will-change-transform"
      aria-label={`Open listing for ${location}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl mb-3 bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={location}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
            try {
              // lazy import to make tests simpler
              const { toast } = require("sonner");
              if (!isFavorite) toast.success("Added to wishlist");
              else toast("Removed from wishlist");
            } catch (e) {}
          }}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isFavorite}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform rounded-full bg-white/80 backdrop-blur"
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite
                ? "fill-[#FF385C] text-[#FF385C]"
                : "text-gray-700 stroke-2"
            }`}
          />
        </button>
        {isSuperhost && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs shadow">Superhost</div>
        )}
      </div>

      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="truncate font-medium">{location}</h3>
        <div className="flex items-center gap-1 shrink-0">
          <Star className="h-4 w-4 fill-current" aria-hidden />
          <span className="text-sm">{rating.toFixed(2)}</span>
        </div>
      </div>
      {distance && <p className="text-gray-600 text-sm">{distance}</p>}
      <p className="text-gray-600 text-sm mb-1">{dates}</p>
      <p className="text-sm">
        <span className="font-semibold">${price}</span>
        <span className="text-gray-600"> night</span>
      </p>
    </article>
  );
}
