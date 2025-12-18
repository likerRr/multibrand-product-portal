import { fetchProductBySlug } from '@repo/entities/product';
import { cacheLife, cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { ProductDetails } from './ProductDetails';
import { selectProductInfo } from './selectProductInfo';

interface Props {
  slug: string;
}

export const ProductDetailsAsync: FC<Props> = async ({ slug }) => {
  'use cache';
  cacheLife('fiveMin');
  cacheTag(`product-${slug}`);

  let product;

  try {
    product = await fetchProductBySlug(slug);
  } catch {
    notFound();
  }

  const productInfo = selectProductInfo(product);

  return <ProductDetails product={productInfo} />;
};
