'use client';

import { BrandedLink, BrandedLinkProps } from '@repo/ui/branded-link';
import { type FC } from 'react';
import { useMarket } from '../provider';

export interface Props extends Omit<BrandedLinkProps, 'prefix'> {}

export const MarketLink: FC<Props> = (props) => {
  const { code } = useMarket();

  return <BrandedLink {...props} prefix={code} />;
};
