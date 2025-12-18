'use client';

import { type Market, MarketProvider } from '@repo/entities/market';
import { BrandProvider } from '@repo/infra/app/providers/brand';
import type { FC, PropsWithChildren } from 'react';
import { brandConfig } from '../config/brandConfig';

interface Props {
  marketConfig: Market;
}

export const Providers: FC<PropsWithChildren<Props>> = ({
  children,
  marketConfig,
}) => {
  return (
    <BrandProvider config={brandConfig}>
      <MarketProvider config={marketConfig}>{children}</MarketProvider>
    </BrandProvider>
  );
};
