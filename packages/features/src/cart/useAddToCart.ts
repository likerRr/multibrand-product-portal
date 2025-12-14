import type { Product } from '@repo/types/entities';

export const useAddToCart = () => {
  return (product: Product) => {
    console.log(`Product ${product.id} added to cart.`);
  };
};
