'use client';

import { useBrand } from '@repo/infra/app/providers/brand';
import { ProductCardProvider } from '@repo/widgets/product-card';
import type { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useBrand();

  return (
    <ProductCardProvider
      getConfigOverrides={(config) => ({
        ...config,
        titlePosition: 'top',
        showTags: true,
        thumbnailsCount: 1,
        addToCard: {
          ...config.addToCard,
          className: 'product-card__add-to-cart-button',
        },
      })}
      getHandlersOverrides={(handlers) => ({
        ...handlers,
        onAddToCart() {
          alert(`Hello from ${name}`);
        },
      })}
    >
      {children}
    </ProductCardProvider>
  );
};
