import { useAddToCart } from '../hooks/useAddToCart';
import { useViewProductDetails } from '../hooks/useViewProductDetails';
import type { ProductCardHandlers } from '../types';

export const useProductCardHandlers = (): ProductCardHandlers => {
  const onAddToCart = useAddToCart();
  const onViewDetails = useViewProductDetails();

  return {
    onAddToCart,
    onViewDetails,
  };
};
