import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipesForDish } from "../util/service/api";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  const fetchRecipe = async () => {
    try {
      const response = await getRecipesForDish(id);
      if (response && response.data) {
        setRecipe(response.data);
      } else {
        setError("Recipe not found.");
      }
    } catch (error) {
      setError("Failed to fetch recipe details.");
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-4xl font-bold mb-4">{recipe.dishId.name}</h1>
      <img src={recipe.dishId.image} alt={recipe.dishId.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
