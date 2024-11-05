'use client'
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Hole den Cookie-Wert und parse den Warenkorb
    const currentCart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];
    // Anzahl der Produkte (nicht die Menge der einzelnen Artikel) im Warenkorb
    setCartCount(currentCart.length);
  }, []); // Leer-Array als Dependency sorgt dafür, dass dies nur beim Initialisieren der Komponente ausgeführt wird

  return (
    <div className="fixed top-0 w-full flex items-center p-4 justify-between uppercase md:text-2xl z-50 bg-background space-x-4">
      <Link href={"/"} className="bg-white pr-4 pl-3 md:pl-0">
        <Image
          width={260}
          height={100}
          alt="logo"
          src={"/DLAUNE-PRINT.svg"}
          className="hover:scale-110 transition ease-out duration-100 md:ml-4 p-1"
        />
      </Link>
      <Link href={"/shop"} className="hover:underline">
        Shop
      </Link>
      <div className="flex items-center space-x-6">
        <Link href={"/login"} className="hover:underline">
          Login
        </Link>
        <Link
          href={"/cart"}
          className="text-center flex items-center border-2 bg-foreground text-background p-2"
        >
          <FiShoppingCart className="mr-2" />
          {cartCount}
        </Link>
      </div>
    </div>
  );
}
