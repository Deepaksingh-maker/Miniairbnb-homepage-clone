import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export default function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => String(p.id) === id);
  const [reserved, setReserved] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
          <div className="mx-auto max-w-[1760px] px-6 lg:px-20 py-4">Listing</div>
        </header>
        <main className="mx-auto max-w-[880px] px-6 lg:px-20 py-16 text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-2">Listing not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find that listing. It may have been removed.</p>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="mx-auto max-w-[1760px] px-6 lg:px-20 py-4">{property.location}</div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 lg:px-20 py-8 animate-fadeIn">
        <div className="mb-6">
          <img src={property.image} alt={property.location} className="w-full rounded-xl object-cover max-h-[520px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-semibold mb-2">{property.location}</h1>
            <p className="text-gray-600 mb-4">{property.distance}</p>
            <p className="text-gray-700 mb-6">{property.description ?? "A lovely space to enjoy your stay."}</p>
            <Button
              className={`bg-[#FF385C] hover:bg-[#ff5a75] text-white ${reserved ? 'opacity-80 cursor-not-allowed' : 'animate-pop'}`}
              onClick={() => {
                if (reserved) return;
                setReserved(true);
                try { toast.success('Reserved!'); } catch (e) {}
                setTimeout(() => setReserved(false), 1400);
              }}
            >
              {reserved ? 'Reserved' : 'Reserve'}
            </Button>
          </div>

          <aside className="border rounded-lg p-4">
            <div className="text-sm text-gray-600">Price</div>
            <div className="text-xl font-semibold mb-2">${property.price} night</div>
            <div className="text-sm text-gray-600">Rating: {property.rating.toFixed(2)}</div>
            <div className="mt-4">
              <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
