import type { Product } from '@repo/entities/product';

export const useAddToCart = () => {
  return (product: Product) => {
    console.log(`Product ${product.id} added to cart.`);
  };
};
