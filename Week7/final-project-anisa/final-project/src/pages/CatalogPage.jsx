import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function CatalogPage() {
  const { products, loading } = useContext(ProductContext);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
        <span className="ml-4 text-lg">Loading produk...</span>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
        Halaman Katalog Produk
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-lg text-emerald-800">
                {product.title}
              </h3>
              <p className="text-emerald-600 font-semibold mb-2">
                Rp {product.price * 15000}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/product/${product.id}`}>
                  <button className="btn btn-accent btn-sm">Detail</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
