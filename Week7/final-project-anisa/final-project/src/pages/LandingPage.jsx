import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-50">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl p-16">
        <h1 className="text-6xl font-extrabold text-emerald-700 mb-8 text-center drop-shadow-lg">
          IjoImut
        </h1>
        <p className="mb-10 text-2xl text-emerald-600 text-center font-semibold">
          Bumi Ceria Mulai dari Kamu!
        </p>
        <Link to="/catalog" className="flex justify-center">
          <button className="btn btn-accent btn-wide text-2xl px-10 py-4">
            Lihat Produk
          </button>
        </Link>
      </div>
    </div>
  );
}
