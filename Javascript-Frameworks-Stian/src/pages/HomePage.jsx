import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card.jsx';
import useFetchData from '../components/services/api/FetchData.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';

function HomePage() {
  const { data, loading, error } = useFetchData('https://v2.api.noroff.dev/online-shop/');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredProducts(data);
    }
  }, [data]);

  const handleSearch = (query) => {
    if (query) {
      const filtered = data.filter((product) =>
        product.title && product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="cards-container grid md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
