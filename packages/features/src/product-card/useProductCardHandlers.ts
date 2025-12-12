import type { Product } from '@repo/types/entities';
import type { ProductCardHandlers } from './types';

export const useProductCardHandlers = (): ProductCardHandlers => {
  const onAddToCart = (product: Product) => {
    console.log(`Product ${product.id} added to cart.`);
  };
  const onViewDetails = (product: Product) => {
    console.log(`Viewing details for product ${product}.`);
  };

  return {
    onAddToCart,
    onViewDetails,
  };
};
