import Cookies from "js-cookie";

export const handleAddToCart = (id, color, size, quantity) => {
  const cartItem = {
    id: id,
    color: color,
    size: size,
    quantity: quantity,
  };

  const currentCart = Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : [];

  const existingItemIndex = currentCart.findIndex(
    (item) =>
      item.id === cartItem.id &&
      item.color === cartItem.color &&
      item.size === cartItem.size,
  );

  if (existingItemIndex !== -1) {
    currentCart[existingItemIndex].quantity += cartItem.quantity;
  } else {
    currentCart.push(cartItem);
  }

  Cookies.set("cart", JSON.stringify(currentCart), { expires: 7 });
  window.location.reload();
};
