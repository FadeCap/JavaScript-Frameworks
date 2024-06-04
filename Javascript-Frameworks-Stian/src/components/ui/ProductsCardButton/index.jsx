import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ productId }) {
  return (
    <Link to={`/product/${productId}`} className="button p-3 m-3 text-white bg-green-500">
      View
    </Link>
  );
}
