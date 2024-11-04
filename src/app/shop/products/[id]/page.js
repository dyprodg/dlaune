"use client";

import { useRouter, useSearchParams } from "next/navigation";
import productsData from "@/app/shop/products.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const colorParam = searchParams.get("color");
  const sizeParam = searchParams.get("size");

  const product = productsData.find((p) => p.id === parseInt(id));
  
  const availableColors = product?.colors.map((c) => c.color) || [];
  const availableSizes = product ? Object.keys(product.stock) : [];

  const [selectedColor, setSelectedColor] = useState(
    colorParam || availableColors[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    sizeParam || availableSizes[0]
  );

  useEffect(() => {
    if (colorParam) setSelectedColor(colorParam);
    if (sizeParam) setSelectedSize(sizeParam);
  }, [colorParam, sizeParam]);

  if (!product) {
    return <div>Produkt nicht gefunden</div>;
  }

  const colorData = product.colors.find((c) => c.color === selectedColor);
  const images = colorData ? colorData.image_url : [];
  const isSizeAvailable = product.stock[selectedSize] > 0;

  const updateUrl = (newColor, newSize) => {
    const params = new URLSearchParams();
    if (newColor) params.set("color", newColor);
    if (newSize) params.set("size", newSize);
    router.replace(`/shop/products/${id}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col mt-24 w-full min-h-screen md:min-h-[150vh] lg:min-h-[200vh] pb-12 bg-white">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold z-40 text-black text-center md:text-start w-full p-4">
        {product.name}
      </h1>
      <div className="w-full ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full bg-white hidden lg:block"
          >
            <Image
              quality={40}
              src={images[currentImageIndex]}
              alt={`${product.name} ${selectedColor}`}
              width={2000}
              height={2000}
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
          <div
            key={currentImageIndex}
            custom={direction}
            className="w-full bg-white block lg:hidden"
          >
            <Image
              quality={40}
              src={images[currentImageIndex]}
              alt={`${product.name} ${selectedColor}`}
              width={2000}
              height={2000}
              objectFit="cover"
            />
          </div>

        {/* Picture Slider */}
        <div className="w-full flex items-center justify-center z-30 relative bg-white p-2">
          {/* Left Arrow */}
          <button
            onClick={() => {
              const prevIndex =
                (currentImageIndex - 1 + images.length) % images.length;
              setDirection(-1);
              setCurrentImageIndex(prevIndex);
            }}
            className="bg-white bg-opacity-50 rounded-full p-2 z-10 text-black self-center"
          >
            <IoIosArrowBack size={24} />
          </button>
          {/* Thumbnails */}
          <div className="flex space-x-2 self-center">
            {images.map((imgSrc, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDirection = index > currentImageIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentImageIndex(index);
                }}
                className={`border rounded-md overflow-hidden ${
                  index === currentImageIndex
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${product.name} ${selectedColor} thumbnail`}
                  width={80}
                  height={80}
                  objectFit="cover"
                />
              </button>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => {
              const nextIndex = (currentImageIndex + 1) % images.length;
              setDirection(1);
              setCurrentImageIndex(nextIndex);
            }}
            className="bg-white bg-opacity-50 rounded-full p-2 z-10 text-black self-center"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        <div className="w-full mt-4 justify-center flex md:justify-end">
          <div className="relative z-30 w-[300px] md:m-12">
            {/* Farbauswahl */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-black uppercase bg-white rounded-full p-2">
                Color:
              </h3>
              <div className="flex space-x-2">
                {availableColors.map((c) => {
                  const colorAvailable = product.colors.some(
                    (colorOption) => colorOption.color === c,
                  );
                  return (
                    <button
                      key={c}
                      onClick={() => {
                        if (colorAvailable) {
                          setSelectedColor(c);
                          updateUrl(c, selectedSize);
                        }
                      }}
                      disabled={!colorAvailable}
                      className={`px-4 py-2 rounded-md w-full ${
                        c === selectedColor
                          ? "bg-neutral-800 text-white"
                          : "bg-white text-neutral-800"
                      } ${!colorAvailable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Größenauswahl */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 uppercase text-black bg-white rounded-full p-2">
                Size:
              </h3>
              <div className="flex space-x-2">
                {availableSizes.map((s) => {
                  const sizeAvailable = product.stock[s] > 0;
                  return (
                    <button
                      key={s}
                      onClick={() => {
                        if (sizeAvailable) {
                          setSelectedSize(s);
                          updateUrl(selectedColor, s);
                        }
                      }}
                      disabled={!sizeAvailable}
                      className={`px-4 py-2 rounded-md border ${
                        s === selectedSize
                          ? "bg-neutral-800 text-white"
                          : "bg-white text-neutral-800"
                      } ${!sizeAvailable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verfügbarkeitsanzeige */}
            {!isSizeAvailable && (
              <p className="text-red-600 mb-4">
                Diese Größe ist derzeit nicht verfügbar.
              </p>
            )}

            {/* Kaufen-Button */}
            <button
              disabled={!isSizeAvailable}
              className={`w-full py-3 rounded-md text-white font-semibold uppercase ${
                isSizeAvailable
                  ? "bg-black hover:bg-neutral-900"
                  : "bg-neutral-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
