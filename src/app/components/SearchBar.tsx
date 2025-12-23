import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div className="hidden md:flex items-center divide-x rounded-full border shadow-sm hover:shadow-md transition-shadow">
      <div className="px-4 py-2.5">
        <label className="sr-only">Where</label>
        <input
          placeholder="Search location"
          className="bg-transparent outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Location"
        />
      </div>

      <div className="px-4 py-2.5">
        <label className="sr-only">When</label>
        <div className="text-sm">Any week</div>
      </div>

      <div className="flex items-center gap-3 pl-4 pr-2 py-2">
        <div className="text-sm text-gray-600">Add guests</div>
        <button
          aria-label="Search"
          className="rounded-full bg-[#FF385C] p-2"
          onClick={() => {
            try {
              window.dispatchEvent(new CustomEvent("app:search", { detail: { query } }));
            } catch (e) {}
          }}
        >
          <Search className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
