import { isValidMarket, type MarketCode } from '@repo/entities/market';
import type { BrandConfig } from '../app/providers/brand';

export const CONTENT: Record<
  MarketCode,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: 'Welcome to %project%',
    description: 'Discover our amazing products',
  },
  ca: {
    title: 'Bienvenue chez Project A',
    description: 'Découvrez nos produits incroyables',
  },
};

export const getMarketMetadata = (
  marketCode: string,
  brandConfig: BrandConfig,
) => {
  if (!isValidMarket(marketCode)) {
    return {
      title: 'Market Not Found',
      description: 'The specified market does not exist.',
    };
  }

  const content = CONTENT[marketCode];

  return {
    title: content.title.replace('%project%', brandConfig.name),
    description: content.description,
  };
};
