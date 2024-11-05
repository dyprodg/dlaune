import productsData from "@/app/shop/products.json";
import { GetCart } from "./GetCart";

export const getCartProductDetails = () => {
  const cart = GetCart();

  // Erstelle eine Liste von Produktdetails basierend auf den im Warenkorb vorhandenen IDs
  const productDetails = cart.map((cartItem) => {
    // Finde das Produkt basierend auf der ID
    const product = productsData.find((item) => item.id === cartItem.id);

    if (product) {
      // Finde die Farbe, die mit der im Warenkorb übereinstimmt
      const colorData = product.colors.find(
        (color) => color.color === cartItem.color,
      );

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: colorData ? colorData.image_url[0].high_res : null,
        color: cartItem.color,
        size: cartItem.size,
        quantity: cartItem.quantity,
      };
    } else {
      return null; // Falls das Produkt nicht gefunden wird
    }
  });

  // Filtere eventuell ungültige Einträge heraus (falls ein Produkt nicht gefunden wurde)
  return productDetails.filter((item) => item !== null);
};
