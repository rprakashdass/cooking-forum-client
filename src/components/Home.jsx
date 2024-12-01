import { useEffect, useState } from "react";
import { getDishes } from "../util/service/api";

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
        <>
            <div className="w-full h-full">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
                    <div className="flex justify-center items-center">
                        <img src="diet.png" alt="Diet" className="w-20 sm:w-28 h-auto" />
                    </div>
                    <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
                        <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl p-3">Toppings</h3>
                        <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
                        <p className="text-gray-500 mb-10 text-base leading-relaxed">
                            Shares information about food, cooking techniques, recipes, and food products and services.
                        </p>
                    </div>
                    <div className="flex justify-center text-center mb-2 md:mb-3 p-6">
                        <h1 className="md:flex md:flex-wrap md:justify-center leading-6 text-black text-kinda-sm tracking-giant font-arvo uppercase">
                            <span className="block md:inline md:mr-2 font-pacifico font-normal text-lg">Simple recipes made for</span>
                            <span className="text-[rgb(115,64,96)] text-lg font-updock font-light">real, actual, everyday life.</span>
                        </h1>
                    </div>

                    <div className="container px-4 py-6 max-w-full flex flex-wrap gap-3 mx-auto w-full justify-center bg-slate-100">
                        <div className="group w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28 mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images%20(1).jpg?updatedAt=1728388512140' className="size-28 rounded-full" />
                            </div>
                            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Find your chief</span>
                            </div>
                        </div>
                        <div className="group w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28 mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/download.jpg?updatedAt=1728382941680' className="size-28 rounded-full" />
                            </div>
                            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Find your recipe</span>
                            </div>
                        </div>
                        <div className="group w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28 mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/food-delivery_662093-1600.avif?updatedAt=1728388511276' className="size-28 rounded-full" />
                            </div>
                            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Purchase Recipes</span>
                            </div>
                        </div>
                        <div className="group w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                            <div className="w-28 h-28 mt-2 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500">
                                <img src='https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images.png?updatedAt=1728388512250' className="size-28 rounded-full" />
                            </div>
                            <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                                <span className="text-2xl font-semibold">Follow Your Favorite</span>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto mt-10 p-5 bg-gray-50">
                        <h1 className="text-4xl font-bold mb-8">Featured Recipes</h1>
                        {error ? (
                            <p className="text-red-500">{error}</p> 
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {dishes.slice(2, 5).map((dish, index) => (
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

                    <div className="flex flex-wrap justify-center gap-10 sm:gap-20 md:gap-30 mt-10">
                        <div className="w-[90%] sm:w-[40rem] h-64 duration-500 group overflow-hidden relative rounded-lg bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                            <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                <span className="text-2xl font-bold">Joy of Cooking</span>
                                <p>
                                    Welcome to your ultimate culinary destination! Whether you're a seasoned chef or just starting your cooking journey,
                                    our platform is designed to inspire your inner foodie. Dive into a world where delicious recipes meet quality ingredients,
                                    making every meal an experience to savor.
                                </p>
                            </div>
                        </div>
                    </div>

                    <article className="w-80 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300 mt-5">
                        <p className="text-xl font-bold text-gray-400">Catchy Slogans to Inspire</p>
                        <p className="text-sm w-full text-gray-400">
                            "Where Every Meal Becomes a Masterpiece!"<br/>
                            "Cook, Savor, Repeat!"<br/>
                            "Elevate Your Taste Buds!"<br/>
                            "From Our Kitchen to Yours!"<br/>
                            "Fresh Ingredients, Flavorful Creations!"
                        </p>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home;
