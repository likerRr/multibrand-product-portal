import type { BrandConfig } from '@repo/infra/app/providers/brand';

export const brandConfig: BrandConfig = {
  name: 'Demo brand A',
  enabledMarkets: ['en', 'ca'],
  ui: {
    products: {
      layout: 'horizontal',
    },
  },
};
