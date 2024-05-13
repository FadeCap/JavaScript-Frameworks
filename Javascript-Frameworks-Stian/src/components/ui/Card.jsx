import Button from "./Button";

export default function Card({ product }) {
  // Calculate percentage discount
  const percentageDiscount = ((product.price - product.discountedPrice) / product.price) * 100;

  return (
    <div className="Card flex-wrap text-center justify-center p-3 m-3 max-w-96 bg-emerald-800 rounded-md">
      <div className="relative">
        {percentageDiscount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-tr-md rounded-bl-md">
            {Math.round(percentageDiscount)}% off
          </div>
        )}
        <img className="image rounded-md" src={product.image.url} alt={product.image.alt} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {product.discountedPrice !== product.price ? (
        <p>
          <span className="text-gray-500 line-through">${product.price}</span> ${product.discountedPrice}
        </p>
      ) : (
        <p>${product.price}</p>
      )}
      <p>Rating: {product.rating}</p>
      <p>Tags: {product.tags.join(", ")}</p>
      <Button />
    </div>
  );
}
