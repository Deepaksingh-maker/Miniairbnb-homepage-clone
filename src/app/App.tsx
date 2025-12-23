import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { CategoryBar } from "./components/CategoryBar";
import { PropertyCard } from "./components/PropertyCard";
import { FilterButton } from "./components/FilterButton";
import { properties as initialProperties, Property } from "./data/properties";
import { Skeleton } from "./components/ui/skeleton";
import { ErrorBoundary } from "./components/ErrorBoundary";

import { Toaster, toast } from "sonner";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const [items, setItems] = useState<Property[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Trending");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // simulate async fetch
    const t = setTimeout(() => {
      try {
        if (!mounted) return;
        setItems(initialProperties);
        setLoading(false);
      } catch (err) {
        setError("Failed to load listings");
        setLoading(false);
      }
    }, 700);

    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    function onNavigateHome() {
      setSelectedCategory("Trending");
      setSearchQuery("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function onSearch(e: Event) {
      const detail = (e as CustomEvent).detail as { query?: string } | undefined;
      const q = detail?.query ?? "";
      setSearchQuery(q);
      // when searching, make sure Trending category is selected for broader results
      if (q) setSelectedCategory("Trending");

      // show a friendly toast when there are no results for the query
      if (q && items) {
        const results = items.filter((it) =>
          it.location.toLowerCase().includes(q.toLowerCase()) ||
          (it.description ?? "").toLowerCase().includes(q.toLowerCase())
        );
        if (results.length === 0) {
          try { toast(`No results for "${q}"`); } catch (e) {}
        }
      }
    }
    window.addEventListener("app:navigateHome", onNavigateHome);
    window.addEventListener("app:search", onSearch as EventListener);
    return () => {
      window.removeEventListener("app:navigateHome", onNavigateHome);
      window.removeEventListener("app:search", onSearch as EventListener);
    };
  }, []);
  const filtered = useMemo(() => {
    if (!items) return [];
    let list = items;
    if (selectedCategory !== "Trending") list = list.filter((it) => it.category === selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((it) => it.location.toLowerCase().includes(q) || (it.description ?? "").toLowerCase().includes(q));
    }
    return list;
  }, [items, selectedCategory, searchQuery]);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Header />
        <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

      <main className="mx-auto max-w-[1760px] px-6 lg:px-20 py-8">
        <div className="flex justify-end mb-6">
          <FilterButton />
        </div>

        <ErrorBoundary>
          {error && (
            <div className="text-center text-red-600">{error}</div>
          )}

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="aspect-square mb-3" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filtered.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  onClick={() => navigate(`/listing/${property.id}`)}
                />
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full text-center text-gray-600">
                  {searchQuery
                    ? `No results for "${searchQuery}".`
                    : "No listings match this category."}
                </div>
              )}
            </div>
          )}
        </ErrorBoundary>
      </main>

      <footer className="border-t mt-16 bg-gray-50">
        <div className="mx-auto max-w-[1760px] px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="mb-4">Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Help Center</li>
                <li>AirCover</li>
                <li>Safety information</li>
                <li>Supporting people with disabilities</li>
                <li>Cancellation options</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Community</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Airbnb.org: disaster relief housing</li>
                <li>Combating discrimination</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Hosting</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Airbnb your home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting resources</li>
                <li>Community forum</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Airbnb</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Investors</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              © 2024 Airbnb Clone, Inc. · Privacy · Terms ·
              Sitemap
            </div>
            <div className="flex items-center gap-4">
              <span>English (US)</span>
              <span>$ USD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </AuthProvider>
  );
}