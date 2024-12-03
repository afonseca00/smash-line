import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <li>
          <a
            href="https://webshop.ubereats.com/sua-loja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Pedir Online
          </a>
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