import React from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <div>
      <ProductProvider>
        <h1>Product Manager Dashboard</h1>
        <ProductForm />
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
