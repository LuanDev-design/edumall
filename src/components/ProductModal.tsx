"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ Đóng modal khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4 sm:px-6">
      <div
        ref={modalRef}
        className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-full max-w-xl relative overflow-hidden animate-fade-in"
      >
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black dark:hover:text-white text-2xl"
          aria-label="Đóng"
        >
          <IoClose />
        </button>

        {/* Hình ảnh sản phẩm */}
        <div className="w-full h-48 sm:h-64 relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Nội dung */}
        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h2>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {product.longDescription}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
            <span className="text-lg sm:text-xl text-blue-600 font-semibold">
              {product.price}
            </span>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                Đóng
              </button>

              <button
                className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
