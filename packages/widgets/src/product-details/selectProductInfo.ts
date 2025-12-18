import type { Product } from '@repo/entities/product';
import { makeSlug } from '@repo/shared/utils';
import type { ProductInfo } from './types';

export const selectProductInfo = (product: Product): ProductInfo => {
  return {
    id: product.id,
    title: product.title,
    images: product.images.map((image) => ({
      id: image,
      src: image,
      title: product.title,
    })),
    tags: product.tags.map((tag) => ({
      id: tag,
      title: tag,
    })),
    rating: product.rating,
    description: product.description,
    price: product.price.toFixed(2),
    slug: makeSlug(product),
    category: product.category,
  };
};
