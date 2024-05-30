import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from "../components/services/CartContext.jsx"

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Get the addToCart function from the context

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`Fetching product with ID: ${productId}`); // Log the product ID being fetched
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const result = await response.json();
        console.log('Fetched product data:', result); // Log the fetched product data
        setProduct(result.data);
      } catch (error) {
        console.error('Error fetching product:', error); // Log any errors that occur during fetch
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
    console.log('Product is null or undefined');
    return <p>No product found</p>;
  }

  console.log('Rendering product:', product);

  return (
    <div className="product-container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 p-4">
          {product.image && product.image.url && (
            <img className="rounded shadow-md" src={product.image.url} alt={product.image.alt || 'Product image'} />
          )}
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
    </div>
  );
}

export default ProductPage;
