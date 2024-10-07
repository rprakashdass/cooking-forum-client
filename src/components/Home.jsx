import { useEffect, useState } from "react";
import { getDishes } from "../service/api";

function Home() {
  const [dishes, setDishes] = useState([]); 
  const [error, setError] = useState(null); 

  const fetchDishes = async () => {
    try {
      const response = await getDishes(); 

      if (response && response.data) {
        setDishes(response.data); 
      } else {
        console.error("Unexpected response structure:", response);
        setError("No dishes found.");
      }
    } catch (error) {
      console.error("Error fetching dishes:", error);
      setError("Failed to fetch dishes.");
    }
  };

  useEffect(() => {
    fetchDishes(); 
  }, []);

  return (
    <div className="container mx-auto mt-10 p-5 bg-gray-50">
      <h1 className="text-4xl text-center font-bold mb-8">Welcome to Cooking Area</h1>
      <h1 className="text-4xl font-bold mb-8">Featured Recipes</h1>
      {error ? (
        <p className="text-red-500">{error}</p> // Display error message if any
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dishes.slice(2,5).map((dish, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;