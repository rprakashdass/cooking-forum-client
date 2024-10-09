import { Link } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Contact from "./Contact";
import CommunityPost from "./CommunityPost";
import { UserContext } from "../util/context/UserContext";
import { useContext } from "react";

function NavBar() {
  const { username } = useContext(UserContext);
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-2xl font-bold">Toppings {username}</div>
        {/* <h1>Welcome, {username ? username : "Guest"} </h1> */}
        <ul className="flex gap-6">
        {/* <li className="hover:underline"> */}
            <Link to="/Home" className="hover:underline">
              Home
            </Link>
          {/* </li> */}
          {/* <li className="hover:underline"> */}
            <Link to="/Search" className="hover:underline">
            Search
            </Link>
          {/* </li> */}
          {/* <li className="hover:underline"> */}
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/CartIndex" className="hover:underline">
              Cart
            </Link>
          {/* </li> */}
          <Link to="/CommunityPost" className="hover:underline">
              Discuss
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  