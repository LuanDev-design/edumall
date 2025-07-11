import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/libs/mockProducts";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const viewsMap: Record<number, number> = body.views || {};

  // Thêm thuộc tính views vào từng sản phẩm từ mock
  const enriched = mockProducts.map((p) => ({
    ...p,
    views: viewsMap[p.id] || 0,
  }));

  // Sắp xếp theo lượt xem giảm dần
  const sorted = enriched.sort((a, b) => b.views - a.views);

  // Trả về 4 sản phẩm nhiều lượt xem nhất (chưa lọc viewed nếu không cần)
  const suggestions = sorted.slice(0, 4);

  return NextResponse.json(suggestions);
}
