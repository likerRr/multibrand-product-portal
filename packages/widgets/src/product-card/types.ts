import type { Product } from '@repo/types/entities';
import type { ComponentType } from 'react';

export type ProductCardHandlers = {
  onAddToCart: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
};

export type ProductCardConfig = {
  layout?: 'vertical' | 'horizontal';
  showTags?: boolean;
  thumbnailsCount?: number;
  className?: string;
  // allow partial renderer overrides
  renderers?: {
    Title?: ComponentType<{
      product: Product;
    }>;
    Tags?: ComponentType<{
      product: Product;
    }>;
    Thumbnails?: ComponentType<{
      product: Product;
      count: number;
    }>;
    Actions?: ComponentType<{
      product: Product;
      handlers: ProductCardHandlers;
    }>;
  };
};
