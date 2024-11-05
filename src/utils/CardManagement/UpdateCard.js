import Cookies from "js-cookie";

// Funktion zum Anpassen der Menge eines Warenkorbeintrags
export const updateCartItemQuantity = (id, color, size, newQuantity) => {
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  const updatedCart = cart
    .map((item) => {
      // Finde das Produkt mit passender ID, Farbe und Größe
      if (item.id === id && item.color === color && item.size === size) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
    .filter((item) => item.quantity > 0); // Entferne Einträge mit quantity <= 0

  Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
};

// Funktion zum Entfernen eines Warenkorbeintrags
export const removeCartItem = (id, color, size) => {
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  const updatedCart = cart.filter(
    (item) => !(item.id === id && item.color === color && item.size === size),
  );

  Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7 });
  window.location.reload();
};
