import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CatalogPage from "./pages/CatalogPage";
import DetailPage from "./pages/DetailPage";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductProvider>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/catalog">Catalog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}
