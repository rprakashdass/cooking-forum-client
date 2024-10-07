import React, { useState } from "react";

// HomePage Component with Search Functionality
function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const recipes = [
    {
        title: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish with rich meat sauce.",
        // image: "https://via.placeholder.com/300",
        image: "https://th.bing.com/th/id/OIP.srYCBEeyvxhhycXZfDJ9sQHaE7?rs=1&pid=ImgDetMain",
      },
      {
        title: "Chicken Curry",
        description: "A flavorful chicken curry with spices and creamy sauce.",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/priyanjali/shutterstock_111998606.jpg",
      },
      {
        title: "Indian Biriyani",
        description: "A healthy and quick Biriyani",
        image: "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg",
      },
    {
        title: "Butter Chicken",
        description: "A creamy tomato-based curry with tender chicken pieces.",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/04/Butter-Chicken-Tall-FS-34.jpg",
      },
      {
        title: "Paneer Tikka",
        description: "Marinated paneer cubes grilled to perfection, served with mint chutney.",
        image: "https://th.bing.com/th/id/OIP._NHQ1ouiRia0sYxwkc8lqAHaHa?rs=1&pid=ImgDetMain",
      },
      {
        title: "Masala Dosa",
        description: "A crispy, fermented rice pancake stuffed with spicy potato filling.",
        image: "https://vismaifood.com/storage/app/uploads/public/45a/29b/a17/thumb__700_0_0_0_auto.jpg",
      },
      {
        title: "Chole Bhature",
        description: "A spicy chickpea curry served with deep-fried, fluffy bread.",
        image: "https://th.bing.com/th/id/OIP.pUmQnkIngDk7X1QkX7FycwHaEK?rs=1&pid=ImgDetMain",
      },
      {
        title: "Biryani",
        description: "A fragrant rice dish layered with spices, saffron, and tender meat or vegetables.",
        image: "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg",
      },
      {
        title: "Rogan Josh",
        description: "A flavorful lamb curry with a rich tomato and yogurt gravy.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Palak Paneer",
        description: "Paneer cubes in a smooth and creamy spinach gravy.",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Aloo Paratha",
        description: "A stuffed flatbread with a spicy mashed potato filling, served with yogurt.",
        image: "https://th.bing.com/th/id/OIP.hyMskoW1VQY5gZVZC5u3QQHaEK?rs=1&pid=ImgDetMain",
      },
      {
        title: "Samosa",
        description: "Crispy triangular pastry filled with spiced potatoes and peas.",
        image: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&ssl=1",
      },
      {
        title: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and spices, grilled to smoky perfection.",
        image: "https://i1.wp.com/www.seema.com/wp-content/uploads/2021/08/shutterstock_1199926645-scaled.jpg?fit=2560%2C1707&ssl=1",
      },
    {
      title: "Grilled Salmon",
      description: "A delicious grilled salmon with lemon and garlic butter.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Beef Stew",
      description: "A hearty beef stew with potatoes and carrots.",
      image: "https://via.placeholder.com/300",
    },
  ];

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
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
