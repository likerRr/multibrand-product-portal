import type { Product } from '@repo/types/entities';

export const useViewProductDetails = () => {
  return (product: Product) => {
    console.log(`Viewing details for product ${product}.`);
  };
};
