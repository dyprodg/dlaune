import Cookies from "js-cookie";

export const GetCart = () => {
  const cart = Cookies.get("cart");
  return cart ? JSON.parse(cart) : [];
};
