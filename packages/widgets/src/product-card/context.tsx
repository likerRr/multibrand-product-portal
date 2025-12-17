'use client';

import { createContext, type PropsWithChildren, use } from 'react';
import type { ProductCardConfig, ProductCardHandlers } from './types';
import { useProductCardConfig } from './useProductCardConfig';
import { useProductCardHandlers } from './useProductCardHandlers';

type ContextValue = {
  config: ProductCardConfig;
  handlers: ProductCardHandlers;
};

const ProductCardContext = createContext<ContextValue | undefined>(undefined);

export const useProductCardContext = () => {
  const ctx = use(ProductCardContext);

  if (!ctx) {
    throw new Error(
      `${useProductCardContext.name} must be used within ${ProductCardProvider.name}`,
    );
  }

  return ctx;
};

interface ContextValueOverrides {
  getConfigOverrides?: (config: ProductCardConfig) => ProductCardConfig;
  getHandlersOverrides?: (handlers: ProductCardHandlers) => ProductCardHandlers;
}

export const ProductCardProvider = ({
  getConfigOverrides,
  getHandlersOverrides,
  children,
}: PropsWithChildren<ContextValueOverrides>) => {
  const config = useProductCardConfig();
  const handlers = useProductCardHandlers();
  const finalConfig = getConfigOverrides ? getConfigOverrides(config) : config;
  const finalHandlers = getHandlersOverrides
    ? getHandlersOverrides(handlers)
    : handlers;

  return (
    <ProductCardContext
      value={{
        config: finalConfig,
        handlers: finalHandlers,
      }}
    >
      {children}
    </ProductCardContext>
  );
};
