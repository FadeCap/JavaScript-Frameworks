import Button from "./Button";

export default function Card({ product }) {

  const percentageDiscount =
    ((product.price - product.discountedPrice) / product.price) * 100;

  return (
    <div className="Card flex-wrap text-center justify-center  m-3 max-w-96 bg-white rounded-md text-black">
      <div className="relative">
        {percentageDiscount > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-2 rounded-tr-md rounded-bl-md">
            {Math.round(percentageDiscount)}% off
          </div>
        )}
        <img
          className="image rounded-t-lg mb-4"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>
      <div className="card-info-container p-3 flex-col">
        <h2 className="text-xl pb-3">{product.title}</h2>
        <p className="p-3">{product.description}</p>
        {product.discountedPrice !== product.price ? (
          <p>
            <span className="text-gray-500 line-through">${product.price}</span>{" "}
            ${product.discountedPrice}
          </p>
        ) : (
          <p>${product.price}</p>
        )}
        <p className="p-3">Rating: {product.rating}</p>
        <p className="p-2">Tags: {product.tags.join(", ")}</p>
        <Button />
      </div>
    </div>
  );
}
