'use client';

import type { Product } from '@repo/types/entities';
import { Button } from '@repo/ui/button';
import { CardTitle } from '@repo/ui/card';
import { type FC } from 'react';
import { useProductCardContext } from './context';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { config, handlers } = useProductCardContext();

  console.log('rendered');

  return (
    <div className={config.className}>
      <CardTitle>{product.title}</CardTitle>
      <Button appName="das">Click me</Button>
      <button onClick={() => handlers.onAddToCart(product)}>Add to cart</button>
    </div>
  );
};
