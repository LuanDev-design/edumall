"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);

  // Lấy dữ liệu lượt xem và yêu thích từ localStorage
  useEffect(() => {
    const viewsMap = JSON.parse(localStorage.getItem("productViews") || "{}");
    setViews(viewsMap[product.id] || 0);

    const likedList = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    setLiked(likedList.includes(product.id));
  }, [product.id]);

  // Toggle yêu thích sản phẩm
  const toggleLike = () => {
    const likedList = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    const updatedList = liked
      ? likedList.filter((id: number) => id !== product.id)
      : [...likedList, product.id];

    localStorage.setItem("likedProducts", JSON.stringify(updatedList));
    setLiked(!liked);

    toast.success(
      liked ? "Đã bỏ yêu thích sản phẩm ❌" : "Đã thêm vào yêu thích ❤️"
    );
  };

  // Xử lý xem sản phẩm
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

  // Đăng ký ngay
  const handleRegister = () => {
    toast.success("Đăng ký thành công! 🎉");
  };

  return (
    <div className="relative w-full bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 border-2 border-blue-300 transition-all duration-300 flex flex-col">
      {/* Ảnh sản phẩm */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 xl:h-56">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-2xl cursor-pointer"
          onClick={handleView}
        />
        {/* Nút yêu thích */}
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 z-10 bg-white dark:bg-neutral-800 p-1.5 rounded-full shadow hover:scale-110 transition"
          title={liked ? "Bỏ yêu thích" : "Yêu thích"}
        >
          {liked ? "❤️" : "💕"}
        </button>
      </div>

      {/* Nội dung và nút */}
      <div className="p-4 flex flex-col justify-between flex-grow min-h-[200px] sm:min-h-[200px] space-y-3">
        {/* Nội dung */}
        <div className="flex-grow space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 dark:text-white text-base md:text-lg line-clamp-1">
              {product.name}
            </h3>
            <span className="text-sm md:text-base font-bold text-gray-900 dark:text-gray-200">
              {product.price}
            </span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>

          <p className="text-xs text-gray-400">👁️ {views} lượt xem</p>
        </div>

        {/* Nút hành động */}
        <div className="flex flex-col gap-2 mt-2">
          <button
            onClick={handleView}
            className="w-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white transition-colors duration-200"
          >
            Xem chi tiết
          </button>

          <button
            onClick={handleRegister}
            className="w-full px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
}
