import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrinho de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-600">
                    Quantidade: {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-green-600">{(item.price * item.quantity).toFixed(2)}€</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xl font-bold">
              Total: {calculateTotal().toFixed(2)}€
            </p>
            <button
              onClick={clearCart}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
            >
              Limpar Carrinho
            </button>
            <button
              onClick={() => alert("Pedido finalizado!")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Cart;