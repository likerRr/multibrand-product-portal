'use client';

import { BrandProvider } from '@repo/infra/app/providers/brand';
import type { FC, PropsWithChildren } from 'react';
import { brandConfig } from '../config/brandConfig';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <BrandProvider config={brandConfig}>{children}</BrandProvider>;
};
