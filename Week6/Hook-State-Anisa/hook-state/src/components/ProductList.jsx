import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

export function ProductList() {
  const { products, handleDeleteProduct, isShow } = useContext(ProductContext);

  useEffect(() => {
    console.log("ProductList mounted / updated");
  }, [products, isShow]);

  return (
    <div>
      <h2>Daftar Produk</h2>
      {isShow ? (
        Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.id || index}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div>Nama Produk: {product.title}</div>
              <div>Deskripsi: {product.description}</div>
              <div>Harga: Rp{product.price}</div>
              <div>Kategori: {product.category}</div>
              <button onClick={() => handleDeleteProduct(product.id)}>
                Hapus
              </button>
            </div>
          ))
        ) : (
          <p>Tidak ada produk.</p>
        )
      ) : null}
    </div>
  );
}
