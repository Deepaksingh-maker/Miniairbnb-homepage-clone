import React, { createContext, useContext, useEffect, useState } from "react";

type Profile = { name: string; avatar?: string };

type AuthContextType = {
  isAuthenticated: boolean;
  profile: Profile | null;
  login: (name?: string) => void;
  logout: () => void;
  updateProfile: (profile: Partial<Profile>) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("_demo_auth");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setIsAuthenticated(!!parsed.isAuthenticated);
        setProfile(parsed.profile || null);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "_demo_auth",
      JSON.stringify({ isAuthenticated, profile })
    );
  }, [isAuthenticated, profile]);

  const login = (name = "User") => {
    setProfile({ name });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setProfile(null);
  };

  const updateProfile = (p: Partial<Profile>) => {
    setProfile((cur) => ({ ...(cur || { name: "User" }), ...p }));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, profile, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
