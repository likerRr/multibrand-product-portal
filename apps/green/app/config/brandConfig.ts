import type { BrandConfig } from '@repo/infra/app/providers/brand';

export const brandConfig: BrandConfig = {
  name: 'Green',
  enabledMarkets: ['en', 'ca'],
  ui: {
    header: {
      navLinks: [
        {
          href: '/',
          label: 'Welcome',
        },
        {
          href: '/products',
          label: 'Products',
        },
      ],
    },
    products: {
      layout: 'horizontal',
    },
  },
};
