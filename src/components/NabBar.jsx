import { Link } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Contact from "./Contact";
import CommunityPost from "./CommunityPost";

function NavBar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-2xl font-bold">Cooking Area</div>
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
          {/* </li> */}
          <Link to="/CommunityPost" className="hover:underline">
              Discuss
            </Link>
            <Link to="/Login" className="hover:underline">
                Login
            </Link>
            <Link to="/SignUp" className="hover:underline">
                SignUp
            </Link>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  