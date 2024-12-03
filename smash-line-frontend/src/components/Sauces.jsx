import React from "react";

const Sauces = () => {
  const items = [
    {
      name: "Ketchup",
      price: "0.90€",
      description: "Individual.",
      image: "/images/ketchup.jpeg",
    },
    {
      name: "Molho Cheddar",
      price: "0.90€",
      description: "Porção extra.",
      image: "/images/cheddar.jpeg",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Molhos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-xl"
          >
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

export default Sauces;
