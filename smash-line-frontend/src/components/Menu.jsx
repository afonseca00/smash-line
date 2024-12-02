import React, { useState } from "react";
import Menus from "./Menus";
import Smash from "./Smash";
import Fries from "./Fries"; 
import Drinks from "./Drinks";
import Sauces from "./Sauces";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("menus");

  const renderCategory = () => {
    switch (activeCategory) {
      case "menus":
        return <Menus />;
      case "smash":
        return <Smash />;
      case "fries": 
        return <Fries />;
      case "drinks":
        return <Drinks />;
      case "sauces":
        return <Sauces />;
      default:
        return <Menus />;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nosso Menu</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setActiveCategory("menus")}
          className={`px-4 py-2 rounded-lg ${
            activeCategory === "menus"
              ? "bg-gray-800 text-white"
              : "bg-gray-200"
          }`}
        >
          Menus
        </button>
        <button
          onClick={() => setActiveCategory("smash")}
          className={`px-4 py-2 rounded-lg ${
            activeCategory === "smash"
              ? "bg-gray-800 text-white"
              : "bg-gray-200"
          }`}
        >
          Smash
        </button>
        <button
          onClick={() => setActiveCategory("fries")} // Atualizado para Fries
          className={`px-4 py-2 rounded-lg ${
            activeCategory === "fries"
              ? "bg-gray-800 text-white"
              : "bg-gray-200"
          }`}
        >
          Batatas
        </button>
        <button
          onClick={() => setActiveCategory("drinks")}
          className={`px-4 py-2 rounded-lg ${
            activeCategory === "drinks"
              ? "bg-gray-800 text-white"
              : "bg-gray-200"
          }`}
        >
          Bebidas
        </button>
        <button
          onClick={() => setActiveCategory("sauces")}
          className={`px-4 py-2 rounded-lg ${
            activeCategory === "sauces"
              ? "bg-gray-800 text-white"
              : "bg-gray-200"
          }`}
        >
          Molhos
        </button>
      </div>
      {renderCategory()}
    </div>
  );
};

export default Menu;
