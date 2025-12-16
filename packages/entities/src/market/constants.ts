import type { Market, MarketCode } from './types';

const MARKET: Record<MarketCode, Market> = {
  en: {
    code: 'en',
    name: 'English',
    locale: 'en-US',
    currency: 'USD',
    country: 'US',
    flag: '🇺🇸',
  },
  ca: {
    code: 'ca',
    name: 'Canadian',
    locale: 'en-CA',
    currency: 'CAD',
    country: 'CA',
    flag: '🇨🇦',
  },
};

export const MARKET_CODES = Object.keys(MARKET) as MarketCode[];

export const DEFAULT_MARKET_CODE: MarketCode = 'en';

export const DEFAULT_MARKET: Market = MARKET[DEFAULT_MARKET_CODE];

export const isValidMarket = (marketCode: string): marketCode is MarketCode => {
  return MARKET_CODES.includes(marketCode as MarketCode);
};

export const getMarketConfig = (market: MarketCode): Market => {
  return MARKET[market];
};
