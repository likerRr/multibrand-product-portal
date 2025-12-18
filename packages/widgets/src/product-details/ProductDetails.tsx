import { MarketLink } from '@repo/entities/market';
import type { FC } from 'react';
import type { ProductInfo } from './types';

interface Props {
  product: ProductInfo;
}

export const ProductDetails: FC<Props> = ({ product }) => {
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-secondary p-10 flex items-center justify-center">
          <img
            src={product.images[0]?.src}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>

        <div className="p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <MarketLink
              href="/products"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to list
            </MarketLink>
            <span className="text-border">|</span>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl font-black text-foreground mb-4">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className={`text-3xl font-bold`}>${product.price}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <button
            className={`w-full py-4 text-primary-foreground bg-accent font-bold text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
