import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <h1>IjoImut</h1>
      <p>Bumi Ceria Mulai dari Kamu!</p>
      <Link to="/catalog">
        <button className="btn">Lihat Produk</button>
      </Link>
    </div>
  );
}
