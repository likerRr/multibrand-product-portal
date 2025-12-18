import type { MarketCode } from '@repo/entities/market';
import { getProducts } from '@repo/features/product-list';
import { cacheLife } from 'next/cache';
import type { FC } from 'react';
import { selectProductItem } from '../product-card';
import { ProductList } from './ProductList';

interface Props {
  market: MarketCode;
}

export const ProductListAsync: FC<Props> = async ({ market }) => {
  'use cache';
  cacheLife('fiveMin');

  const products = await getProducts({
    market,
  });

  const iso = new Date().toISOString();

  console.log(
    `[Market:${market}] Fetched and shuffled ${products.length} products [${iso}]`,
  );

  const productItems = products.map(selectProductItem);

  return <ProductList products={productItems} />;
};
