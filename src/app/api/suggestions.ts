import type { NextApiRequest, NextApiResponse } from "next";
import { mockProducts } from "@/libs/mockProducts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { keyword = "" } = req.body;
  const lower = keyword.toLowerCase();

  const result = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(lower) ||
    product.description.toLowerCase().includes(lower) ||
    product.longDescription.toLowerCase().includes(lower)
  );

  res.status(200).json(result.slice(0, 6)); // giới hạn 6 kết quả
}
