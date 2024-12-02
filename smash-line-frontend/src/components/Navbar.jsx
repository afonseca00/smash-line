import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-xl font-bold">Smash Line</h1>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            Menu
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2m0 0L7 13h10l1.6-8H5.4M7 13a4 4 0 11-8 0 4 4 0 018 0zM16 20h4"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;