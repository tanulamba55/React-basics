import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 w-screen shadow-md">
      <ul className="flex justify-center space-x-6 text-white font-semibold">
        <li>
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="hover:text-gray-300 transition">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
