import productsData from "@/app/shop/products.json";
import { GetCart } from "./GetCart";

export const getCartProductDetails = () => {
  const cart = GetCart();

  // Create a list of product details based on the IDs present in the cart
  const productDetails = cart.map((cartItem) => {
    // Find the product based on the ID
    const product = productsData.find((item) => item.id === cartItem.id);

    if (product) {
      // Find the color that matches the one in the cart
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
      return null; // Return null if the product is not found
    }
  });

  // Filter out any invalid entries (in case a product was not found)
  return productDetails.filter((item) => item !== null);
};
