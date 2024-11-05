"use client";
import { getCartProductDetails } from "@/utils/CardManagement/GetCartDetails";
import {
  updateCartItemQuantity,
  removeCartItem,
} from "@/utils/CardManagement/UpdateCard";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Warenkorb-Daten mit Details abrufen
    const cartDetails = getCartProductDetails();
    setCartItems(cartDetails);
  }, []);

  // Funktion zum Aktualisieren der Menge eines Artikels
  const handleQuantityChange = (id, color, size, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(id, color, size, newQuantity);
    } else {
      removeCartItem(id, color, size);
    }
    // Aktualisiere den Warenkorb
    setCartItems(getCartProductDetails());
  };

  // Funktion zum Entfernen eines Artikels
  const handleRemoveItem = (id, color, size) => {
    removeCartItem(id, color, size);
    setCartItems(getCartProductDetails());
  };

  // Berechne die Gesamtsumme
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return total + itemTotal;
  }, 0);

  return (
    <div className="mt-24 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 uppercase">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl uppercase">Your cart is empty</p>
      ) : (
        <div className="w-full max-w-2xl">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-20 h-20 object-cover bg-white"
                />
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="text-sm">Size: {item.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Minus Button */}
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.color,
                      item.size,
                      item.quantity - 1,
                    )
                  }
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                {/* Quantity Anzeige */}
                <span className="text-lg">{item.quantity}</span>
                {/* Plus Button */}
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.color,
                      item.size,
                      item.quantity + 1,
                    )
                  }
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                {/* Preis */}
                <p className="text-lg font-semibold">
                  {(item.price * item.quantity).toFixed(0)} CHF
                </p>
                {/* Entfernen Button */}
                <button
                  onClick={() =>
                    handleRemoveItem(item.id, item.color, item.size)
                  }
                  className="px-2 py-1 border rounded"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
          {/* Gesamtsumme */}
          <div className="flex justify-between items-center mt-6 px-4">
            <p className="text-2xl font-bold">Summary:</p>
            <p className="text-2xl font-bold">{totalPrice.toFixed(0)} CHF</p>
          </div>
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
