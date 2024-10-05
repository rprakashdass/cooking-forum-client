// import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <div className="text-2xl font-bold">Cooking Area</div>
        <ul className="flex gap-6">
        <li className="hover:underline">
            {/* <Link to="/Home" className="hover:underline"> */}
              Home
            {/* </Link> */}
          </li>
          <li className="hover:underline">
            {/* <Link to="/AboutPage" className="hover:underline"> */}
              About
            {/* </Link> */}
          </li>
          <li className="hover:underline">
            {/* <Link to="/ContactPage" className="hover:underline"> */}
              Contact
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  