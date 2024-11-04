"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex items-center p-4 justify-between uppercase md:text-2xl z-50 bg-background space-x-4">
      <Link href={"/"} className="bg-white pr-4 pl-3 md:pl-0">
        <Image
          width={260}
          height={100}
          alt="logo"
          src={"/DLAUNE-PRINT.svg"}
          className="hover:scale-110 transition ease-out duration-100 md:ml-4"
          loading="eager" 
          priority 
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
          <FiShoppingCart className="mr-2" />0
        </Link>
      </div>
    </div>
  );
}
