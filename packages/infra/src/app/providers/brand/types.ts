import type { MarketCode } from '@repo/entities/market';

export interface BrandConfig {
  name: string;
  enabledMarkets: MarketCode[];
}
