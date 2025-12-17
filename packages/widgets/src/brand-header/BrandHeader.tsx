'use client';

import { MarketLink } from '@repo/entities/market';
import { useBrand } from '@repo/infra/app/providers/brand';
import { PageHeader } from '@repo/ui/page-header';

export const BrandHeader = () => {
  const { name } = useBrand();

  return (
    <PageHeader
      title={name}
      LinkComponent={MarketLink}
      navLinks={[
        {
          href: '/',
          label: 'Welcome',
        },
        {
          href: '/products',
          label: 'Products',
        },
      ]}
    />
  );
};
