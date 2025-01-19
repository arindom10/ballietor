import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://i.ibb.co.com/ypw9QTt/Be.png"
          alt="Logo"
          className="h-10"
        />
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/whatwedo" className="hover:text-gray-200">
              What We Do
            </Link>
          </li>
          <li>
            <p className="hover:text-gray-200 font-bold">
              Contact Us: 618-385-2987
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
