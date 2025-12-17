'use client';

import { createContext, use } from 'react';
import type { ProductCardConfig, ProductCardHandlers } from '../types';

type ContextValue = {
  config: ProductCardConfig;
  handlers: ProductCardHandlers;
};

export const ProductCardContext = createContext<ContextValue | undefined>(
  undefined,
);

export const useProductCardContext = () => {
  const ctx = use(ProductCardContext);

  if (!ctx) {
    throw new Error(
      `${useProductCardContext.name} must be used within ProductCardProvider`,
    );
  }

  return ctx;
};
