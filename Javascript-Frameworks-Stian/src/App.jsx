import React from "react";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/services/CartContext.jsx"
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Layout />
      <div className="pageContainer flex justify-center align-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
