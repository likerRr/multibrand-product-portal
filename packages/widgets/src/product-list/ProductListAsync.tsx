import type { MarketCode } from '@repo/entities/market';
import { getProducts } from '@repo/features/product-list';
import type { FC } from 'react';
import { selectProductItem } from '../product-card';
import { ProductList } from './ProductList';

interface Props {
  market: MarketCode;
}

export const ProductListAsync: FC<Props> = async ({ market }) => {
  const products = await getProducts({
    market,
  });

  console.log(
    `[Market:${market}] Fetched and shuffled ${products.length} products`,
  );

  const productItems = products.map(selectProductItem);

  return <ProductList products={productItems} />;
};
