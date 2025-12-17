import { useMarket } from '../provider';

export const useMarketHref = (href: string) => {
  const { code } = useMarket();
  const normHref = href.startsWith('/') ? href.slice(1) : href;

  return `/${code}/${normHref}`;
};
