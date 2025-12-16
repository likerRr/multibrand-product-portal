import type { Product } from '@repo/entities/product';

export const useViewProductDetails = () => {
  return (product: Product) => {
    console.log(`Viewing details for product ${product}.`);
  };
};
