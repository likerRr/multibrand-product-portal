import type { FC, PropsWithChildren } from 'react';
import { BrandContext } from './BrandContext';
import type { BrandConfig } from './types';

interface Props {
  config: BrandConfig;
}

export const BrandProvider: FC<PropsWithChildren<Props>> = ({
  children,
  config,
}) => {
  return <BrandContext value={config}>{children}</BrandContext>;
};
