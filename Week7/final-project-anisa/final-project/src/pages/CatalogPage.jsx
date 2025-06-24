import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function CatalogPage() {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p>Loading produk...</p>;

  return (
    <div>
      <h2>Halaman Katalog Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.title} - Rp {product.price * 15000}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
