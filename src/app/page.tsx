"use client";

import { useState } from "react";
import { mockProducts } from "@/libs/mockProducts";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/types/product";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const priceNum = parseInt(product.price.replace(/\D/g, ""));
    let matchesPrice = true;

    if (priceFilter === "<500") matchesPrice = priceNum < 500000;
    else if (priceFilter === "500-1000") matchesPrice = priceNum >= 500000 && priceNum <= 1000000;
    else if (priceFilter === ">1000") matchesPrice = priceNum > 1000000;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="text-xl font-bold text-blue-700">EduMall</div>
        <ThemeToggle />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 px-4 py-2 border rounded-md text-gray-700"
        />
        <div className="text-sm font-medium cursor-pointer text-gray-700">❤ Favorites</div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar Filter */}
        <aside className="md:col-span-1">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4 text-gray-700">Filters</h2>
            <h2 className="text-sm font-medium mb-2  text-gray-700">Price</h2>
            <div className="space-y-2 text-gray-700">
              <label className="block ">
                <input
                  type="radio"
                  value="<500"
                  checked={priceFilter === "<500"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="mr-2"
                />
                &lt; 500K
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="500-1000"
                  checked={priceFilter === "500-1000"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="mr-2"
                />
                500K - 1M
              </label>
              <label className="block">
                <input
                  type="radio"
                  value=">1000"
                  checked={priceFilter === ">1000"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="mr-2"
                />
                &gt; 1M
              </label>
              <button
                onClick={() => setPriceFilter("all")}
                className="mt-4 px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:text-black transition-colors duration-200"
              >
                Clear Filter
              </button>


            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-4">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">AI Product List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-800 text-lg">{product.name}</h3>
                    <span className="text-gray-600 text-sm">{product.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-2 px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:text-black transition-colors duration-200"
                  >
                    View Details
                  </button>

                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
          </div>
        </section>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
