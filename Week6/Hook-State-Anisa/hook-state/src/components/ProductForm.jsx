import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function ProductForm() {
  const {
    name,
    price,
    category,
    description,
    handleChangeName,
    handleChangePrice,
    handleChangeCategory,
    handleChangeDescription,
    handleAddProduct,
    disabled,
    isShow,
    handleClick,
  } = useContext(ProductContext);

  return (
    <div>
      <h2>Form Tambah Produk</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Nama Produk"
          />
        </div>
        <div>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={handleChangeDescription}
            placeholder="Deskripsi"
          />
        </div>
        <div>
          Price:{" "}
          <input
            type="number"
            value={price}
            onChange={handleChangePrice}
            placeholder="Harga"
          />
        </div>
        <div>
          Category:{" "}
          <input
            type="text"
            value={category}
            onChange={handleChangeCategory}
            placeholder="Kategori"
          />
        </div>
        <button type="submit" disabled={disabled}>
          Tambah
        </button>
      </form>
      <button type="button" onClick={handleClick}>
        {isShow ? "Sembunyikan" : "Tampilkan"} Form
      </button>
      <hr />
    </div>
  );
}
