'use client';

import { ProductCardProvider } from '@repo/widgets/product-card';
import type { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProductCardProvider
      getConfigOverrides={(config) => ({
        ...config,
        addToCard: {
          ...config.addToCard,
          className: 'product-card__add-to-cart-button rounded-2xl',
        },
      })}
    >
      {children}
    </ProductCardProvider>
  );
};
