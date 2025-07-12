"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface SuggestedProductsProps {
  onSelectProduct: (product: Product) => void;
}

export default function SuggestedProducts({ onSelectProduct }: SuggestedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 🔁 Tự động load khi component mount
  useEffect(() => {
    const loadSuggestions = async () => {
      const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");

      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ views: viewsMap }),
      });

      const data = await res.json();
      setProducts(data);
    };

    loadSuggestions();
  }, []);


  return (
    <div id="suggest-section" className="px-6 pb-20  ">

      {/* Gợi ý luôn hiển thị */}
      <div ref={sectionRef} className="mt-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 pl-2 border-blue-500">
          🔍 Sản phẩm gợi ý cho bạn
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Chưa có gợi ý nào dựa trên hành vi của bạn.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onSelectProduct(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
