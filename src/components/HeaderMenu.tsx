import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMenu;
