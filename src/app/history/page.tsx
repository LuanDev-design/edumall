    "use client";

import { useEffect, useState } from "react";
import { mockProducts } from "@/libs/mockProducts";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";

export default function HistoryPage() {
  const [viewedProducts, setViewedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const viewedIds: number[] = JSON.parse(localStorage.getItem("viewedProducts") || "[]");
    const viewed = mockProducts.filter((p) => viewedIds.includes(p.id));
    setViewedProducts(viewed);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-neutral-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="px-6 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          🕘 Lịch sử khoá học đã xem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {viewedProducts.length === 0 ? (
            <p className="col-span-full text-gray-500 text-center">
              Bạn chưa xem khoá học nào.
            </p>
          ) : (
            viewedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))
          )}
        </div>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
