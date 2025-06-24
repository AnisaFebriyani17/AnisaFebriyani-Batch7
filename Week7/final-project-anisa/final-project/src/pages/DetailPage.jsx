import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Loading detail produk...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-lg p-6 max-w-xl mx-auto">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-green-700 font-semibold mb-2">
          Harga: Rp {product.price * 15000}
        </p>
        <p className="mb-4">{product.description}</p>
        <Link to="/catalog">
          <button className="btn btn-success">Kembali ke katalog</button>
        </Link>
      </div>
    </div>
  );
}
