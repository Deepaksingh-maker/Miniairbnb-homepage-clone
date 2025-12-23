import React, { useState } from "react";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Search</h3>
          <button onClick={onClose} aria-label="Close search">Close</button>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where are you going?"
          className="w-full border rounded px-3 py-2"
        />
        <div className="mt-4 flex justify-end">
          <button
            className="rounded bg-[#FF385C] text-white px-4 py-2"
            onClick={() => {
              try {
                window.dispatchEvent(new CustomEvent("app:search", { detail: { query } }));
              } catch (e) {}
              onClose();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
