import type { ProductItem } from '../types';

export const useViewProductDetails = () => {
  return (product: ProductItem) => {
    console.log(`Viewing details for product ${product}.`);
  };
};
