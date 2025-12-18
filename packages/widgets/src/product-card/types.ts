import type { ComponentType } from 'react';

export type ProductCardHandlers = {
  onAddToCart: (product: ProductItem) => void;
  onViewDetails: (product: ProductItem) => void;
};

export type ProductCardConfig = {
  layout?: 'vertical' | 'horizontal';
  showTags?: boolean;
  thumbnailsCount: number;
  titlePosition: 'top' | 'bottom';
  className?: string;
  addToCard: {
    title: string;
    className?: string;
  };
  slots?: {
    AddToCartButton?: ComponentType<{
      product: ProductItem;
    }>;
  };
};

export interface ProductItem {
  id: number;
  title: string;
  images: {
    id: string;
    src: string;
    title: string;
  }[];
  tags: {
    id: string;
    title: string;
  }[];
  rating: number;
  description: string;
  price: string;
  slug: string;
}
