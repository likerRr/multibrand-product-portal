'use client';

import { type PropsWithChildren } from 'react';
import type { ProductCardConfig, ProductCardHandlers } from '../types';
import { ProductCardContext } from './ProductCardContext';
import { useProductCardConfig } from './useProductCardConfig';
import { useProductCardHandlers } from './useProductCardHandlers';

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
