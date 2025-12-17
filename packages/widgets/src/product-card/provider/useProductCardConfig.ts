import type { ProductCardConfig } from '../types';

export const useProductCardConfig = (): ProductCardConfig => {
  return {
    layout: 'vertical',
    showTags: true,
    thumbnailsCount: 2,
    titlePosition: 'top',
    addToCard: {
      title: 'Buy Now',
    },
  };
};
