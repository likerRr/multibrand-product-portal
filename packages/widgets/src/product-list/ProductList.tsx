'use client';

import { useBrand } from '@repo/infra/app/providers/brand';
import type { FC } from 'react';
import { ProductCard, type ProductItem } from '../product-card';

interface Props {
  products: ProductItem[];
}

export const ProductList: FC<Props> = ({ products }) => {
  const { ui } = useBrand();

  return (
    <div
      className={`w-full grid gap-6 ${
        ui.products.layout === 'horizontal'
          ? 'grid-cols-1 lg:grid-cols-1'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
