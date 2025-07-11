"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [views, setViews] = useState(0);

  // Load số lượt xem từ localStorage khi component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");
      setViews(viewsMap[product.id] || 0);
    }
  }, [product.id]);

  const handleView = () => {
    // Cập nhật danh sách đã xem
    const viewed = JSON.parse(localStorage.getItem("viewedProducts") || "[]");
    if (!viewed.includes(product.id)) {
      viewed.push(product.id);
      localStorage.setItem("viewedProducts", JSON.stringify(viewed));
    }

    // Tăng lượt xem
    const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");
    viewsMap[product.id] = (viewsMap[product.id] || 0) + 1;
    localStorage.setItem("productViews", JSON.stringify(viewsMap));

    // Cập nhật vào state để UI hiển thị
    setViews(viewsMap[product.id]);

    // Gọi onClick (mở modal)
    onClick();
  };

  return (
    <div
      className="w-full bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 border border-transparent transition-all duration-300"
    >
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800 dark:text-white text-lg line-clamp-1">
            {product.name}
          </h3>
          <span className="text-black font-bold dark:text-gray-200 text-sm">{product.price}</span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* 👁️ Lượt xem */}
        <p className="text-xs text-gray-400">👁️ {views} lượt xem</p>

        <button 
          onClick={handleView}
          className="mt-2 w-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white transition-colors duration-200"
        >
          View Details
        </button>

        <button
          className="w-full mt-2 px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
}
