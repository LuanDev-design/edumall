export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  rating: number;
  views?: number; // thêm thuộc tính này
  category: string;
}
