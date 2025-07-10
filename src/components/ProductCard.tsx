// components/ProductCard.tsx
"use client";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="w-full bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-500 border border-transparent transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
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
        <button 
          onClick={onClick}
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
