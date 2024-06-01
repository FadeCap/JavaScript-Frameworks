import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from "../components/services/CartContext/index.jsx"
import { calculatePercentageDiscount } from '../components/Utils/PercentageDiscount.jsx';

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const result = await response.json();
        
        setProduct(result.data);
      } catch (error) {
        console.error('Error fetching product:', error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
   
    return <p>No product found</p>;
  }

  const percentageDiscount = calculatePercentageDiscount(
    product.price,
    product.discountedPrice
  );

  return (
    <div className="product-container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="relative">
        {percentageDiscount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-tr-md rounded-bl-md">
            {Math.round(percentageDiscount)}% off
          </div>
        )}
        <img
          className="image rounded h-80 mb-4"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="text-lg mb-4">
            Price: {product.discountedPrice !== product.price ? (
              <>
                <span className="text-gray-500 line-through">${product.price}</span> ${product.discountedPrice}
              </>
            ) : (
              product.price
            )}
          </p>
          <p className="mb-4">Rating: {product.rating}</p>
          <p className="mb-4">Tags: {product.tags ? product.tags.join(', ') : 'No tags available'}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded shadow">
              <p className="font-bold">{review.username}</p>
              <p className="font-semibold">Rating: {review.rating}</p>
              <p>{review.description}</p>
            </div>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
