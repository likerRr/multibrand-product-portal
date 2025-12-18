import type { BrandConfig } from '@repo/infra/app/providers/brand';

export const brandConfig: BrandConfig = {
  name: 'Red',
  enabledMarkets: ['en', 'ca'],
  ui: {
    header: {
      navLinks: [
        {
          href: '/',
          label: 'Home',
        },
        {
          href: '/products',
          label: 'Items',
        },
      ],
    },
    products: {
      layout: 'horizontal',
    },
  },
};
