"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { mockProducts } from "@/libs/mockProducts";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import SidebarFilter from "@/components/SidebarFilter";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const priceNum = parseInt(product.price.replace(/\D/g, ""));
    let matchesPrice = true;

    if (priceFilter === "<200") matchesPrice = priceNum < 200000;
    else if (priceFilter === "300-500") matchesPrice = priceNum >= 300000 && priceNum <= 500000;
    else if (priceFilter === ">500") matchesPrice = priceNum > 500000;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-neutral-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 🎨 Banner dưới Header */}
      <Banner />

      <main className="px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        <SidebarFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />

        <section className="md:col-span-4">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 pl-2 border-primary">
            🎓 Danh sách khoá học
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
            {filteredProducts.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                Không tìm thấy khoá học phù hợp.
              </p>
            )}
          </div>
        </section>
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
