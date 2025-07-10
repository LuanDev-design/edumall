import { Product } from "@/types/product";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden max-w-2xl w-full shadow-lg relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Ảnh sản phẩm */}
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />

        {/* Nội dung sản phẩm */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h2>

          {/* Mô tả ngắn */}
          <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

          {/* Mô tả dài */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {product.longDescription}
          </p>

          {/* Đánh giá và giá */}
          <div className="flex items-center justify-between mt-4">
            {/* Rating sao */}
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(product.rating) ? "fill-current" : "text-gray-300 dark:text-gray-600"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>

            {/* Giá */}
            <p className="text-lg font-semibold text-blue-600">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
