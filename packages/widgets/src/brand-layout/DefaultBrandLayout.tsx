import { DefaultPageLayout } from '@repo/ui/page-layout';
import type { PropsWithChildren } from 'react';
import { BrandHeader } from '../brand-header';

export const DefaultBrandLayout = ({ children }: PropsWithChildren) => {
  return (
    <DefaultPageLayout header={<BrandHeader />}>{children}</DefaultPageLayout>
  );
};
