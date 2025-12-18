import type { MarketCode } from '@repo/entities/market';

export interface BrandConfig {
  name: string;
  enabledMarkets: MarketCode[];
  ui: {
    header: {
      navLinks: {
        href: string;
        label: string;
      }[];
    };
    products: {
      layout: 'horizontal' | 'vertical';
    };
  };
}
