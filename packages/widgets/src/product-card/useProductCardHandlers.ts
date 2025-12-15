import { useAddToCart } from '@repo/features/cart';
import { useViewProductDetails } from '@repo/features/product';
import type { ProductCardHandlers } from './types';

export const useProductCardHandlers = (): ProductCardHandlers => {
  const onAddToCart = useAddToCart();
  const onViewDetails = useViewProductDetails();

  return {
    onAddToCart,
    onViewDetails,
  };
};
