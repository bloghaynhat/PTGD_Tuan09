import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function CartApp() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍️ Demo Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default CartApp;
