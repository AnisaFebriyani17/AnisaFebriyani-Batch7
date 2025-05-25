import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState("anisa");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("ini use effect selalu berjalan");
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("error di catch", error);
      });
  }, []);

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function handleChangePrice(e) {
    setPrice(e.target.value);
    console.log(e.target.value);
  }

  function handleChangeCategory(e) {
    setCategory(e.target.value);
    console.log(e.target.value);
  }

  function handleAddProduct(e) {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      title: name,
      price: parseFloat(price),
      category,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setCategory("");
  }

  function handleDeleteProduct(id) {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  }

  function handleClick() {
    setIsShow(!isShow);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        name,
        setName,
        price,
        setPrice,
        category,
        setCategory,
        isShow,
        setIsShow,
        disabled,
        setDisabled,
        handleChangeName,
        handleChangePrice,
        handleChangeCategory,
        handleAddProduct,
        handleDeleteProduct,
        handleClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
