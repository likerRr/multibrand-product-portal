'use client';

import { MarketLink } from '@repo/entities/market';
import { useBrand } from '@repo/infra/app/providers/brand';
import { PageHeader } from '@repo/ui/page-header';

export const BrandHeader = () => {
  const { name, ui } = useBrand();

  return (
    <PageHeader
      title={name}
      LinkComponent={MarketLink}
      navLinks={ui.header.navLinks}
    />
  );
};
