"use client";

import { useRef, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface SuggestedProductsProps {
    onSelectProduct: (product: Product) => void;
  }
  
  export default function SuggestedProducts({ onSelectProduct }: SuggestedProductsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
  
    const handleClick = async () => {
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
      setVisible(true);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    };
  
    return (
      <div className="px-6 pb-20">
        <div className="text-center mt-10">
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            🎯 Gợi ý sản phẩm phù hợp
          </button>
        </div>
  
        {visible && (
          <div ref={sectionRef} className="mt-10">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 pl-2 border-blue-500">
              🔍 Sản phẩm gợi ý cho bạn
            </h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onSelectProduct(product)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
