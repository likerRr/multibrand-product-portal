'use client';

import { ProductCardProvider } from '@repo/features/product-card';
import type { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ProductCardProvider>{children}</ProductCardProvider>;
};
