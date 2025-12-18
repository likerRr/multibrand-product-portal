import { apiClient } from '@repo/shared/api';
import { parseSlug } from '@repo/shared/utils';
import type { Product } from '../types';
import type { GetProductResponseDto } from './types';

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await apiClient.get<GetProductResponseDto>(`products/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = (await response.json()) as GetProductResponseDto;

  return mapResponse(data);
};

export const fetchProductBySlug = (slug: string): Promise<Product> => {
  const { id } = parseSlug(slug);
  const idNum = parseInt(id, 10);

  if (isNaN(idNum)) {
    throw new Error('Invalid product slug');
  }

  return fetchProduct(idNum);
};

const mapResponse = (product: GetProductResponseDto): Product => {
  return {
    id: product.id,
    title: product.title,
    tags: product.tags,
    description: product.description,
    images: product.images,
    price: product.price,
    rating: product.rating,
    category: product.category,
  };
};
