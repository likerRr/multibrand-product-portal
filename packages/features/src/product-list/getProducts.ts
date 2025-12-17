import { fetchProducts, type GetProductsParams } from '@repo/entities/product';
import { shuffle } from '@repo/shared/utils';

export const getProducts = async (params: GetProductsParams = {}) => {
  const products = await fetchProducts(params);

  return shuffle(products);
};
