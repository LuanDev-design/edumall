import { Product } from "@/types/product";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-xl w-full relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black dark:hover:text-white text-2xl"
        >
          <IoClose />
        </button>

        {/* Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={300}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h2>
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar className="text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            {product.longDescription}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl text-blue-600 font-semibold">
              {product.price}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
