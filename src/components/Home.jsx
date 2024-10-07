function Home() {
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
    ];
  
    return (
      <div className="container mx-auto mt-10 p-5 bg-gray-50">
        <h1 className="text-4xl text-center font-bold mb-8 ">Welcome to Cooking Area</h1>
        <h1 className="text-4xl font-bold mb-8">Featured Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Home;