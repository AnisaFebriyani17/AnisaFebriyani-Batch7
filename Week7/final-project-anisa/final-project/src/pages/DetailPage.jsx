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

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
        <span className="ml-4 text-lg">Loading detail produk...</span>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-2xl max-w-xl mx-auto">
        <figure>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl text-emerald-700">
            {product.title}
          </h1>
          <p className="text-emerald-600 font-semibold text-xl">
            Harga: Rp {product.price * 15000}
          </p>
          <p className="mb-4">{product.description}</p>
          <div className="card-actions justify-end">
            <Link to="/catalog">
              <button className="btn btn-accent">Kembali ke katalog</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
