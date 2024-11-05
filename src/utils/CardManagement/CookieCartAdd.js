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

  // Suche nach einem bestehenden Eintrag mit gleicher id, color und size
  const existingItemIndex = currentCart.findIndex(
    (item) =>
      item.id === cartItem.id &&
      item.color === cartItem.color &&
      item.size === cartItem.size,
  );

  if (existingItemIndex !== -1) {
    // Wenn der Eintrag existiert, erhöhe nur die quantity
    currentCart[existingItemIndex].quantity += cartItem.quantity;
  } else {
    // Wenn der Eintrag nicht existiert, füge das neue Item hinzu
    currentCart.push(cartItem);
  }

  // Speichere den aktualisierten Warenkorb in den Cookies
  Cookies.set("cart", JSON.stringify(currentCart), { expires: 7 });

  // Aktualisiere die Seite, um Änderungen sofort anzuzeigen
  window.location.reload();
};
