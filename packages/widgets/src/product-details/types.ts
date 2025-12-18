export interface ProductInfo {
  id: number;
  title: string;
  images: {
    id: string;
    src: string;
    title: string;
  }[];
  tags: {
    id: string;
    title: string;
  }[];
  rating: number;
  description: string;
  price: string;
  slug: string;
  category: string;
}
