import React from 'react';
import { useCart } from "../components/services/CartContext.jsx"

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="cart-container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.discountedPrice || item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
