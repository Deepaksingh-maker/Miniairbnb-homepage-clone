import React, { useEffect, useState } from "react";
import { Search, Globe, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import { useAuth } from "../context/AuthContext";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { isAuthenticated, profile, login, logout, updateProfile } = useAuth();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        setSearchOpen((s) => !s);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm backdrop-blur bg-white/95">
        <div className="mx-auto max-w-[1760px] px-6 lg:px-20">
          <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <button
              className="flex items-center gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });                // navigate to home route
                try {
                  window.history.pushState({}, "", "/");
                } catch (e) {}                // emit event for app to reset filters and navigate home
                try {
                  window.dispatchEvent(new CustomEvent("app:navigateHome"));
                } catch (e) {}
                // fallback: click the currently pressed category tab (if any)
                const el = document.querySelector('[role="tablist"] button[aria-pressed="true"]') as HTMLElement | null;
                if (el) el.click();
              }}
              aria-label="Home"
            >
              <svg
                className="h-8 w-8 text-[#FF385C]"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 1c2 0 3.46 1.5 3.46 3.8 0 2.3-1.46 4.2-3.46 5.5-2-.3-3.46-2.2-3.46-5.5S14 1 16 1zm0 0c-4 3-5.46 7.3-5.46 11 0 5.5 3.36 10 7.46 10s7.46-4.5 7.46-10c0-3.7-1.46-8-5.46-11zm0 0" />
              </svg>
              <span className="hidden text-[#FF385C] md:block">Mini airbnb</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <div className="md:block hidden">
              <SearchBar />
            </div>

            {/* mobile search button */}
            <button onClick={() => setSearchOpen(true)} className="md:hidden rounded-full border p-2" aria-label="Open search">
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden rounded-full md:block">
              Airbnb your home
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
            </Button>

            {/* Profile / Menu */}
            <div className="relative">
              {!isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Button size="sm" onClick={() => login()}>Login</Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setProfileOpen((s) => !s)}
                    className="flex items-center gap-2 rounded-full border py-1.5 pl-3 pr-1.5 hover:shadow-md transition-shadow cursor-pointer"
                    aria-haspopup="true"
                    aria-expanded={profileOpen}
                    aria-label="Profile menu"
                  >
                    <Menu className="h-4 w-4" />
                    <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
                      {profile?.name?.[0] ?? "U"}
                    </div>
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-3">
                      <div className="mb-3">
                        <div className="font-semibold">{profile?.name}</div>
                      </div>
                      <button
                        className="w-full text-left py-1 px-2 rounded hover:bg-gray-100"
                        onClick={() => {
                          const newName = prompt("Enter new name:", profile?.name || "");
                          if (newName) updateProfile({ name: newName });
                        }}
                      >
                        Edit profile
                      </button>
                      <button className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 mt-2" onClick={() => { logout(); setProfileOpen(false); }}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
