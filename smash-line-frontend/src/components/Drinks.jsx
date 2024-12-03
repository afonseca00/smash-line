import React from "react";

const Drinks = () => {
  const items = [
    { name: "Água", price: "1.50€", description: "330ml.", image: "/images/agua.jpeg" },
    { name: "Coca-Cola", price: "2.00€", description: "330ml.", image: "/images/coca-cola.jpeg" },
    { name: "Coca-Cola Zero", price: "2.00€", description: "330ml.", image: "/images/coca-cola-zero.jpeg" },
    { name: "Sumol Ananás", price: "2.00€", description: "330ml.", image: "/images/sumol-ananas.jpeg" },
    { name: "Sumol Laranja", price: "2.00€", description: "330ml.", image: "/images/sumol-laranja.jpeg" },
    { name: "Ice Tea Manga", price: "2.00€", description: "330ml.", image: "/images/ice-tea-manga.jpeg" },
    { name: "Ice Tea Limão", price: "2.00€", description: "330ml.", image: "/images/ice-tea-limao.jpeg" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bebidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;