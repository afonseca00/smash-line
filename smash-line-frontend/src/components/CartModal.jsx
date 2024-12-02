import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartModal = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-600">
                      {item.quantity} x {item.price}€
                    </p>
                  </div>
                  <p className="font-bold text-green-600">
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold">
                Total: {calculateTotal().toFixed(2)}€
              </p>
            </div>
          </>
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Continuar Comprando
          </button>
          <button
            onClick={() => alert("Pedido finalizado!")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;