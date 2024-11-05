import Cookies from "js-cookie";

// function for updating cart item quantity
export const updateCartItemQuantity = (id, color, size, newQuantity) => {
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  const updatedCart = cart
    .map((item) => {
      // find product with id color and size
      if (item.id === id && item.color === color && item.size === size) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
    .filter((item) => item.quantity > 0); // if quantity 0 delete

  Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
};

// function for cart item delete
export const removeCartItem = (id, color, size) => {
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  const updatedCart = cart.filter(
    (item) => !(item.id === id && item.color === color && item.size === size),
  );

  Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  window.location.reload();
};
