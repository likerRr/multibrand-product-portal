import { isValidMarket, type MarketCode } from '@repo/entities/market';

export const CONTENT: Record<
  MarketCode,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: 'Welcome to Project A',
    description: 'Discover our amazing products',
  },
  ca: {
    title: 'Bienvenue chez Project A',
    description: 'Découvrez nos produits incroyables',
  },
};

export const getMarketMetadata = (marketCode: string) => {
  if (!isValidMarket(marketCode)) {
    return {
      title: 'Market Not Found',
      description: 'The specified market does not exist.',
    };
  }

  const content = CONTENT[marketCode];

  return {
    title: content.title,
    description: content.description,
  };
};
