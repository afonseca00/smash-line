import React, { useState } from "react";

const Menus = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menus = [
    {
      id: 1,
      name: "Menu - Original Smash",
      price: "15.20€",
      description:
        "Prove o nosso smash burger original: carne saborosa e no ponto, queijo derretido, pickles frescos e o toque clássico de ketchup. Simples e delicioso!",
      image: "/images/Menu_Original_Smash.jpeg",
    },
    {
      id: 2,
      name: "Menu - Bacon Smash",
      price: "15.90€",
      description:
        "Prove o nosso smash burger com bacon: carne suculenta, bacon dourado, queijo derretido e o toque especial da cebola caramelizada.",
      image: "/images/Menu_Bacon_Smash.jpeg",
    },
    {
      id: 3,
      name: "Menu - Truffle Smash",
      price: "15.60€",
      description:
        "Prove o nosso smash trufa: carne suculenta, queijo derretido, cebola frita crocante e o delicioso toque do molho de trufa.",
      image: "/images/Menu_Truffle_Smash.jpeg",
    },
  ];

  const handleCloseModal = () => {
    setSelectedMenu(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Escolha o seu Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="border p-4 rounded-lg shadow hover:shadow-xl"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold">{menu.name}</h3>
            <p className="text-gray-600">{menu.description}</p>
            <p className="text-green-600 font-bold">{menu.price}</p>
          </div>
        ))}
      </div>

      {selectedMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full overflow-y-auto max-h-[90vh]"
            style={{ maxHeight: "90vh" }}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedMenu.name}</h3>
            <img
              src={selectedMenu.image}
              alt={selectedMenu.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <PersonalizeMenu menu={selectedMenu} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

const PersonalizeMenu = ({ menu, onClose }) => {
  const [beverage, setBeverage] = useState("");
  const [fries, setFries] = useState("normais");
  const [extraSauce, setExtraSauce] = useState("");

  const beverages = [
    { name: "Água", image: "/images/agua.jpeg" },
    { name: "Coca-Cola", image: "/images/coca-cola.jpeg" },
    { name: "Coca-Cola Zero", image: "/images/coca-cola-zero.jpeg" },
    { name: "Sumol Ananás", image: "/images/sumol-ananas.jpeg" },
    { name: "Sumol Laranja", image: "/images/sumol-laranja.jpeg" },
    { name: "Ice Tea Manga", image: "/images/ice-tea-manga.jpeg" },
    { name: "Ice Tea Limão", image: "/images/ice-tea-limao.jpeg" },
  ];

  const friesOptions = [
    {
      name: "Normais (Incluído)",
      value: "normais",
      image: "/images/fries-normais.jpeg",
    },
    {
      name: "Cheddar e Bacon (+2.90€)",
      value: "cheddar-bacon",
      image: "/images/fries-cheddar-bacon.jpeg",
    },
    {
      name: "Molho de Trufa e Parmesão (+2.90€)",
      value: "trufa-parmesao",
      image: "/images/fries-trufa-parmesao.jpeg",
    },
  ];

  const sauces = [
    { name: "Ketchup (+0.90€)", image: "/images/ketchup.jpeg" },
    { name: "Cheddar (+0.90€)", image: "/images/cheddar.jpeg" },
  ];

  const handleConfirm = () => {
    const orderDetails = {
      menu: menu.name,
      beverage,
      fries,
      extraSauce,
    };
    console.log("Pedido:", orderDetails);
    alert("Pedido adicionado ao carrinho!");
    onClose();
  };

  return (
    <div>
      <h4 className="font-semibold mb-2">Escolha a Bebida</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {beverages.map((bev) => (
          <div
            key={bev.name}
            className={`p-2 border rounded-lg cursor-pointer ${
              beverage === bev.name ? "border-green-500" : ""
            }`}
            onClick={() => setBeverage(bev.name)}
          >
            <img
              src={bev.image}
              alt={bev.name}
              className="w-full h-20 object-cover rounded-lg mb-2"
            />
            <p className="text-center">{bev.name}</p>
          </div>
        ))}
      </div>

      <h4 className="font-semibold mb-2">Escolha as Batatas</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {friesOptions.map((option) => (
          <div
            key={option.value}
            className={`p-2 border rounded-lg cursor-pointer ${
              fries === option.value ? "border-green-500" : ""
            }`}
            onClick={() => setFries(option.value)}
          >
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-20 object-cover rounded-lg mb-2"
            />
            <p className="text-center">{option.name}</p>
          </div>
        ))}
      </div>

      <h4 className="font-semibold mb-2">Molho Extra</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {sauces.map((sauce) => (
          <div
            key={sauce.name}
            className={`p-2 border rounded-lg cursor-pointer ${
              extraSauce === sauce.name ? "border-green-500" : ""
            }`}
            onClick={() => setExtraSauce(sauce.name)}
          >
            <img
              src={sauce.image}
              alt={sauce.name}
              className="w-full h-20 object-cover rounded-lg mb-2"
            />
            <p className="text-center">{sauce.name}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
      >
        Confirmar Pedido
      </button>
      <button
        onClick={onClose}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full mt-2"
      >
        Cancelar
      </button>
    </div>
  );
};

export default Menus;
