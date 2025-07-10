import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-neutral-900">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={160}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">{product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Xem chi tiết
      </button>
    </div>
  );
}
