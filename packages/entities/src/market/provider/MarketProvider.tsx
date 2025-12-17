import type { FC, PropsWithChildren } from 'react';
import type { Market } from '../types';
import { MarketContext } from './MarketContext';

interface Props {
  config: Market;
}

export const MarketProvider: FC<PropsWithChildren<Props>> = ({
  children,
  config,
}) => {
  return <MarketContext value={config}>{children}</MarketContext>;
};
