// app/page.tsx or app/HomePage.tsx
"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { mockProducts } from "@/libs/mockProducts";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import SidebarFilter from "@/components/SidebarFilter";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";
import SuggestedProducts from "@/components/SuggestedProducts";
import ChatBot from "@/components/ChatBox";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const priceNum = parseInt(product.price.replace(/\D/g, ""));
    let matchesPrice = true;
    if (priceFilter === "<200") matchesPrice = priceNum < 200000;
    else if (priceFilter === "300-500") matchesPrice = priceNum >= 300000 && priceNum <= 500000;
    else if (priceFilter === ">500") matchesPrice = priceNum > 500000;

    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-neutral-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 🎨 Banner dưới Header */}
      <Banner />

      {/* 🔥 Sản phẩm gợi ý */}
      <SuggestedProducts onSelectProduct={(product) => setSelectedProduct(product)} />
         <ChatBot />

      <main className="px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        <SidebarFilter
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <section className="md:col-span-4">
          <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 pl-2 border-primary">
            🎓 Danh sách khoá học
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">
                Không tìm thấy khoá học phù hợp.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))
            )}
          </div>
        </section>
      </main>

      {/* 🔍 Modal chi tiết sản phẩm */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* 📌 Nút cuộn xuống sản phẩm gợi ý */}
      <div className="text-center mt-6 px-4">
        <button
          onClick={() =>
            document.getElementById("suggest-section")?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          🌟 Xem sản phẩm gợi ý
        </button>
      </div>
      <Footer/>
    </div>
  );
}
