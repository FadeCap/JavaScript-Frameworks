import React from "react";
import Card from "../components/ui/Card.jsx";
import useFetchData from "../components/services/api/FetchData.jsx";

function HomePage() {
  const { data, loading, error } = useFetchData("https://v2.api.noroff.dev/online-shop/");

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="cards-container grid md:grid-cols-3 gap-4">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
