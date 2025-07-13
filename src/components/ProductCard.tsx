// components/ProductCard.tsx
"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import Toast from "@/components/Toast"; // 👈 thêm

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");
    setViews(viewsMap[product.id] || 0);

    const likedList = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setLiked(likedList.includes(product.id));
  }, [product.id]);

  const toggleLike = () => {
    const likedList = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    const updatedList = liked
      ? likedList.filter((id: number) => id !== product.id)
      : [...likedList, product.id];
    localStorage.setItem("likedProducts", JSON.stringify(updatedList));
    setLiked(!liked);

    setToast(liked ? "Đã bỏ yêu thích sản phẩm ❌" : "Đã thêm vào yêu thích ❤️");
  };

  const handleView = () => {
    const viewed = JSON.parse(localStorage.getItem("viewedProducts") || "[]");
    if (!viewed.includes(product.id)) {
      viewed.push(product.id);
      localStorage.setItem("viewedProducts", JSON.stringify(viewed));
    }

    const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");
    viewsMap[product.id] = (viewsMap[product.id] || 0) + 1;
    localStorage.setItem("productViews", JSON.stringify(viewsMap));
    setViews(viewsMap[product.id]);

    onClick();
  };

  return (
    <>
      <div className="relative w-full bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-purple-500 border-2 border-blue-400 transition-all duration-300">
        <div className="relative w-full h-40">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg cursor-pointer"
            onClick={handleView}
          />
          <button
            onClick={toggleLike}
            className="absolute top-2 right-2 z-10 bg-white dark:bg-neutral-800 p-1 rounded-full shadow hover:scale-110 transition"
            title={liked ? "Bỏ yêu thích" : "Yêu thích"}
          >
            {liked ? "❤️" : "💕"}
          </button>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 dark:text-white text-lg line-clamp-1">
              {product.name}
            </h3>
            <span className="text-black font-bold dark:text-gray-200 text-sm">
              {product.price}
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
            {product.description}
          </p>
          <p className="text-xs text-gray-400">👁️ {views} lượt xem</p>

          <button
            onClick={handleView}
            className="mt-2 w-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white transition-colors duration-200"
          >
            View Details
          </button>

          <button className="w-full mt-2 px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Đăng ký ngay
          </button>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </>
  );
}
