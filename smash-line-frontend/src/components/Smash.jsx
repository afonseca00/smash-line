import React from "react";

const Smash = () => {
  const items = [
    {
      name: "Original Smash",
      price: "7.90€",
      description: "Carne e queijo no ponto.",
      image: "/images/original-smash.jpeg",
    },
    {
      name: "Bacon Smash",
      price: "8.50€",
      description: "Com bacon crocante.",
      image: "/images/bacon-smash.jpeg",
    },
    {
      name: "Truffle Smash",
      price: "9.00€",
      description: "Com molho de trufa.",
      image: "/images/truffle-smash.jpeg",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Smash Burgers</h2>
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

export default Smash;
