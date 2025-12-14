"use client";

import type { Product } from "@repo/types/entities";
import { Button } from "@repo/ui/button";
import type { FC } from "react";
import { useProductCardContext } from "./context";
import { Title } from "./ui/Title";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { config, handlers } = useProductCardContext();

  console.log("rendered");

  return (
    <div className={config.className}>
      <Title>{product.title}</Title>
      <Button appName="das">Click me</Button>
      <button type="button" onClick={() => handlers.onAddToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};
