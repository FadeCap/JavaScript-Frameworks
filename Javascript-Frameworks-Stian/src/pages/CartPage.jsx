import React from 'react';
import { useCart } from "../components/services/CartContext";
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.discountedPrice || item.price), 0);
  };

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div className="cart-container mx-auto p-4 flex gap-5">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex gap-20 m-4 p-4">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p>Price: ${item.discountedPrice || item.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex-col">
            <h2 className="text-xl font-bold p-4 m-4">Total: ${calculateTotal().toFixed(2)}</h2>
            <Link to={`/checkout`} className="button p-4 m-4 rounded text-white bg-green-500 self-center" onClick={handleCheckout}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
