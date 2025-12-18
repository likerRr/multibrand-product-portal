'use client';

import { useMarket } from '@repo/entities/market';
import { useRouter } from 'next/navigation';
import type { ProductItem } from '../types';

export const useViewProductDetails = () => {
  const router = useRouter();
  const { code } = useMarket();

  return (product: ProductItem) => {
    // it's a bad pattern, just for demo purposes on how to use app-wide hooks in handlers
    return router.push(`/${code}/product/${product.slug}`);
  };
};
