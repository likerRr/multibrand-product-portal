import { isValidMarket } from '@repo/entities/market';
import { Container } from '@repo/ui/container';
import { ProductListAsync } from '@repo/widgets/product-list';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Providers } from './providers';

export default async function MarketProductsPage({
  params,
}: PageProps<'/[market]/products'>) {
  const { market } = await params;

  if (!isValidMarket(market)) {
    notFound();
  }

  return (
    <Providers>
      <Container centered>
        <Suspense fallback={<>loading...</>}>
          <ProductListAsync market={market} />
        </Suspense>
      </Container>
    </Providers>
  );
}
