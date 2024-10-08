import React, { useEffect, useState } from "react";
import { getDishes, getRecipesForDish } from "../service/api";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dishes, setDishes] = useState([]); 
  const [error, setError] = useState(null); 
  const [selectedRecipe, setRecipe] = useState([]);

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
      setError("Failed to fetch dishes.");
    }
  };

  const fetchRepice = async (dishName) => {
    try {
      const res = await getRecipesForDish(dishName);
      setRecipe(res.data); 
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const filteredRecipes = dishes.filter((dish) =>
    dish.name && dish.name.toLowerCase().includes(searchQuery.toLowerCase()) 
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

      {/*  Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((dish, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => fetchRepice(dish.name)} 
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
                
                {/* recipe details */}
                {selectedRecipe.length > 0 && selectedRecipe.some(recipe => recipe.dishId === dish._id) && (
                  <div className="mt-4">
                    <h4 className="font-bold">Recipe Details:</h4>
                    {selectedRecipe.filter(recipe => recipe.dishId === dish._id).map((recipe, idx) => (
                      <div key={idx} className="text-gray-700">
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                      </div>
                    ))}
                  </div>
                )}
                
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