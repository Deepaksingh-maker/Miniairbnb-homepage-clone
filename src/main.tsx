
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "./app/App.tsx";
  import ListingDetails from "./app/pages/ListingDetails";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </BrowserRouter>
  );
  