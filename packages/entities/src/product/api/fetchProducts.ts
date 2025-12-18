import { apiClient } from '@repo/shared/api';
import { DEFAULT_MARKET_CODE } from '../../market';
import type { Product } from '../types';
import type { GetProductsParams, GetProductsResponseDto } from './types';

export const fetchProducts = async (
  params: GetProductsParams = {},
): Promise<Product[]> => {
  const { market = DEFAULT_MARKET_CODE } = params;
  const limit = 10;
  // emulate different content for different markets
  const skip = market === 'en' ? 0 : limit;

  const response = await apiClient.get<GetProductsResponseDto>(
    `products?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = (await response.json()) as GetProductsResponseDto;

  return mapResponse(data);
};

const mapResponse = (response: GetProductsResponseDto): Product[] => {
  return response.products.map((product) => ({
    id: product.id,
    title: product.title,
    tags: product.tags,
    description: product.description,
    images: product.images,
    price: product.price,
    rating: product.rating,
  }));
};
