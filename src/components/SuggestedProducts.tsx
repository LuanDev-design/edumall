"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface SuggestedProductsProps {
  onSelectProduct: (product: Product) => void;
}

export default function SuggestedProducts({ onSelectProduct }: SuggestedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSuggestions = async () => {
      const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");

      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ views: viewsMap }),
      });

      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    loadSuggestions();
  }, []);

  return (
    <section id="suggest-section" className="px-4 sm:px-6 pb-20">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 pl-2 border-blue-500">
        🔍 Sản phẩm gợi ý cho bạn
      </h2>

      {/* Skeleton loading */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Không có dữ liệu */}
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Chưa có gợi ý nào dựa trên hành vi của bạn.
        </p>
      )}

      {/* Dữ liệu hiển thị */}
      {!loading && products.length > 0 && (
        <div>
          {/* Mobile carousel */}
          <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
            {products.map((p) => (
              <div key={p.id} className="min-w-[250px] max-w-[250px] flex-shrink-0">
                <ProductCard product={p} onClick={() => onSelectProduct(p)} />
              </div>
            ))}
          </div>

          {/* Grid cho tablet/desktop */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => onSelectProduct(p)} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
