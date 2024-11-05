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
    // get cart items
    const cartDetails = getCartProductDetails();
    setCartItems(cartDetails);
  }, []);

  // update quantity
  const handleQuantityChange = (id, color, size, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(id, color, size, newQuantity);
    } else {
      removeCartItem(id, color, size);
    }
    // refresh cart
    setCartItems(getCartProductDetails());
  };

  // delete item
  const handleRemoveItem = (id, color, size) => {
    removeCartItem(id, color, size);
    setCartItems(getCartProductDetails());
  };

  // summary
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    return total + itemTotal;
  }, 0);

  return (
    <div className="mt-24 w-full flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-8 uppercase">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl uppercase">Your cart is empty</p>
      ) : (
        <div className="w-full max-w-2xl">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:justify-between md:items-center p-4 border-b space-y-4 md:space-y-0"
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
                  <p className="text-lg md:text-xl font-semibold">{item.name}</p>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="text-sm">Size: {item.size}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:space-x-4 mt-4 md:mt-0 space-x-2 md:justify-start">
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
                {/* Quantity */}
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
                {/* Price */}
                <p className="text-lg font-semibold hidden md:block">
                  {(item.price * item.quantity).toFixed(0)} CHF
                </p>
                {/* Delete Button */}
                <button
                  onClick={() =>
                    handleRemoveItem(item.id, item.color, item.size)
                  }
                  className="px-2 py-1 border rounded"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
              {/* Display Price separately on mobile */}
              <p className="text-lg font-semibold md:hidden mt-2">
                {(item.price * item.quantity).toFixed(0)} CHF
              </p>
            </div>
          ))}
          {/* Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 space-y-4 md:space-y-0">
            <p className="text-2xl font-bold">Summary:</p>
            <p className="text-2xl font-bold">{totalPrice.toFixed(0)} CHF</p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full md:w-auto">
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
