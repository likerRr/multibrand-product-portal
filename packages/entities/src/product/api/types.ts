import type { PaginationDto } from '@repo/shared/api';
import type { MarketCode } from '../../market';

export interface GetProductsParams {
  market?: MarketCode;
}

export interface GetProductsResponseDto extends PaginationDto {
  products: ProductDto[];
}

export interface GetProductResponseDto extends ProductDto {}

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  images: string[];
}
