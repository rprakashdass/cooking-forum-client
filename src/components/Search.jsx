import React, { useEffect, useState } from "react";
import { getDishes } from "../service/api";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dishes, setDishes] = useState([]); 
  const [error, setError] = useState(null); 

  const fetchDishes = async () => {
    try {
      const response = await getDishes(); 

      if (response && response.data) {
        setDishes(response.data); // Set dishes state
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

  const filteredRecipes = dishes.filter((recipe) =>
    recipe.name && recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) // Check if name exists
  );
  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-4xl font-bold mb-8">Featured Recipes</h1>

      {/* Search Box */}
      <div className="mb-8 flex items-center">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="border p-3 w-full rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className="ml-4 p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        )}
      </div>

      {/* Display Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No recipes found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default Search;
