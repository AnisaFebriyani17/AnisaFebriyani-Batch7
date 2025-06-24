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
        <div className="navbar bg-emerald-700 text-white mb-6 shadow">
          <div className="flex-1">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl text-white"
            >
              IjoImut
            </Link>
          </div>
          <div className="flex-none space-x-2">
            <Link to="/" className="btn btn-ghost text-white">
              Home
            </Link>
            <Link to="/catalog" className="btn btn-ghost text-white">
              Catalog
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}
