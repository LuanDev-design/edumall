import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-neutral-900 flex flex-col cursor-pointer"
    >
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
           fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover rounded"
        />
      </div>

      <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {product.description}
      </p>

      <div className="mt-auto flex justify-between items-center pt-3">
        <span className="text-blue-600 font-bold">{product.price}</span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Ngăn sự kiện click lan ra thẻ cha
            onClick();
          }}
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
