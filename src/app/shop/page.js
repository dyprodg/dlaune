'use client'

import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuRefreshCwOff } from "react-icons/lu";
import ProductGrid from "@/components/shop/ProductGrid";
import productsData from './products.json';

export default function Shop() {
    const [category, setCategory] = useState("Category");
    const [color, setColor] = useState("Color");
    const [size, setSize] = useState("Size");
    const [search, setSearch] = useState("");
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showColorDropdown, setShowColorDropdown] = useState(false);
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);

    const categories = ["T-Shirt", "Hoodie"];
    const colors = ["Black", "White"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const products = productsData;

    return (
        <div className="w-full mt-24 px-4 md:px-6">
            {/* Search Section */}
            <div className="w-full flex flex-col md:flex-row items-center md:space-x-4">
                {/* Dropdowns */}
                <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center justify-between md:space-x-4 mb-4 md:mb-0">
                    {/* Category Dropdown */}
                    <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
                        <div
                            className="flex items-center border p-2 justify-between uppercase cursor-pointer"
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                        >
                            {category}
                            <MdArrowDropDown />
                        </div>
                        {showCategoryDropdown && (
                            <div className="absolute left-0 top-full mt-1 border bg-foreground text-background w-full z-10 uppercase">
                                {categories.map((item) => (
                                    <div
                                        key={item}
                                        className="p-2 cursor-pointer hover:bg-neutral-500"
                                        onClick={() => {
                                            setCategory(item);
                                            setShowCategoryDropdown(false);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Color Dropdown */}
                    <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
                        <div
                            className="flex items-center border p-2 justify-between uppercase cursor-pointer"
                            onClick={() => setShowColorDropdown(!showColorDropdown)}
                        >
                            {color}
                            <MdArrowDropDown />
                        </div>
                        {showColorDropdown && (
                            <div className="absolute left-0 top-full mt-1 border bg-foreground text-background w-full z-10 uppercase">
                                {colors.map((item) => (
                                    <div
                                        key={item}
                                        className="p-2 cursor-pointer hover:bg-neutral-500"
                                        onClick={() => {
                                            setColor(item);
                                            setShowColorDropdown(false);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Size Dropdown */}
                    <div className="flex items-center justify-center w-full md:w-1/3">
                        <div className="relative w-full">
                            <div
                                className="flex items-center border p-2 justify-between uppercase cursor-pointer"
                                onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                            >
                                {size}
                                <MdArrowDropDown />
                            </div>
                            {showSizeDropdown && (
                                <div className="absolute left-0 top-full mt-1 border bg-foreground text-background w-full z-10 uppercase max-h-60 overflow-y-auto">
                                    {sizes.map((item) => (
                                        <div
                                            key={item}
                                            className="p-2 cursor-pointer hover:bg-neutral-500"
                                            onClick={() => {
                                                setSize(item);
                                                setShowSizeDropdown(false);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    {/* Refresh Button */}
                        <div
                            className="border p-2 hover:text-background hover:bg-foreground ml-2 md:mt-0 md:ml-4 cursor-pointer"
                            onClick={() => {
                                setCategory("Category");
                                setColor("Color");
                                setSize("Size");
                            }}
                        >
                            <LuRefreshCwOff size={24} />
                        </div>
                    </div>
                </div>

                {/* Searchbar */}
                <div className="w-full md:w-2/3 flex items-center">
                    <input
                        className="border bg-foreground text-background placeholder:text-neutral-500 w-full p-2"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="border p-2 hover:text-background hover:bg-foreground">
                        <IoSearch size={24} />
                    </button>
                </div>
            </div>
            <ProductGrid products={products} />
        </div>
    );
}
