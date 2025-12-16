export type MarketCode = 'en' | 'ca';

export interface Market {
  code: MarketCode;
  name: string;
  locale: string;
  currency: string;
  country: string;
  flag: string;
}
