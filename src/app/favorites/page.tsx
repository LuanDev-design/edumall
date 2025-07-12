"use client";

import { useEffect, useState } from "react";
import { mockProducts } from "@/libs/mockProducts";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";

export default function FavoritesPage() {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  /* Load danh sách yêu thích */
  useEffect(() => {
    const likedIds: number[] = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    const liked = mockProducts.filter((p) => likedIds.includes(p.id));
    setLikedProducts(liked);
  }, []);

  return (
  <div className="bg-gray-50 min-h-screen dark:bg-neutral-900">
    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <main className="px-6 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        ❤️ Khoá học bạn đã yêu thích
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {likedProducts.length === 0 ? (
          <p className="col-span-full text-gray-500 text-center">
            Bạn chưa yêu thích khoá học nào.
          </p>
        ) : (
          likedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))
        )}
      </div>
    </main>

    {/* ✅ Hiển thị modal chi tiết */}
    {selectedProduct && (
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}
  </div>
);
}