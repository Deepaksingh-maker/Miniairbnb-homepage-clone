import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App";
import ListingDetails from "./app/pages/ListingDetails";
import "./styles/index.css";

// debug: confirm client script runs
console.log("main.tsx: client script loaded");

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <BrowserRouter basename="/Miniairbnb-homepage-clone">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
    </Routes>
  </BrowserRouter>
);
