'use client';

import { cx } from 'class-variance-authority';
import type { FC } from 'react';
import { useProductCardContext } from './provider/ProductCardContext';
import type { ProductItem } from './types';
import { Images } from './ui/Images';
import { Title } from './ui/Title';

interface Props {
  product: ProductItem;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { config, handlers } = useProductCardContext();
  const AddToCartButton = config.slots?.AddToCartButton ?? null;

  return (
    <div
      onClick={() => handlers.onViewDetails(product)}
      className={`group flex flex-col md:flex-row bg-card text-card-foreground overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border cursor-pointer`}
    >
      <div className="md:w-1/3 relative h-64 md:h-auto flex">
        <Images images={product.images} count={config.thumbnailsCount} />
        <Title position={config.titlePosition}>{product.title}</Title>
      </div>

      <div className="flex flex-col p-6 md:w-2/3 justify-between">
        <div>
          <div className="flex justify-between items-start">
            {config.showTags && product.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags.map(({ title, id }) => (
                  <span
                    key={id}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full uppercase tracking-wide"
                  >
                    #{title}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <span>★</span>
              <span>{product.rating}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 border-t border-border pt-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase">
              Price
            </span>
            <span className={`text-2xl font-black text-secondary`}>
              {product.price}
            </span>
          </div>

          {AddToCartButton ? (
            <AddToCartButton product={product} />
          ) : (
            <button
              onClick={() => handlers.onAddToCart(product)}
              className={cx(
                'px-6 py-3 text-primary-foreground bg-accent font-bold shadow-lg transform active:scale-95 transition-all',
                config.addToCard.className,
              )}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
