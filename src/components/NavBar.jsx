import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 h-[12vh] bg-gray-200 shadow-md rounded-md">
      <div className="flex justify-start gap-4">
        <img
          src="../src/assets/img/diet.png"
          alt="Logo"
          className="w-10 h-10 transform hover:scale-105 transition duration-300"
        />
        <div className="text-2xl font-bold text-slate-900 bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent text-center select-auto transform hover:scale-105 transition duration-300">
          Toppings
        </div>
      </div>
      <ul className="flex gap-6">
        <Link
          to="/Home"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Home
        </Link>
        <Link
          to="/Search"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Search
        </Link>
        <Link
          to="/Contact"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Contact
        </Link>
        <Link
          to="/CommunityPost"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Discuss
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
