import Card from "../components/ui/Card.jsx";
import useFetchData from "../components/services/api/FetchData.jsx";


export default function HomePage() {
    const BASE_URL = 'https://v2.api.noroff.dev/online-shop'
    const { data, loading, error } = useFetchData(`${BASE_URL}`)
    return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <Card data={data} />
          )}
        </div>
      );
    }