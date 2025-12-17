import type { ProductItem } from '../types';

export const useAddToCart = () => {
  return (product: ProductItem) => {
    console.log(`Product ${product.id} added to cart.`);
  };
};
