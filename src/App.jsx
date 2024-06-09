import React from "react";
import Layout from "./components/Layout/index.jsx";
import ProductPage from "./pages/Product/index.jsx";
import CheckoutPage from "./pages/Checkout/index.jsx";
import CartPage from "./pages/Cart/index.jsx";
import ContactPage from "./pages/Contact/index.jsx";
import HomePage from "./pages/Home/index.jsx";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/services/CartContext/index.jsx"
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
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
