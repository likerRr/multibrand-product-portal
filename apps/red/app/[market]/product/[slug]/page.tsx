import { fetchProductBySlug } from '@repo/entities/product';
import { Container } from '@repo/ui/container';
import { ProductDetailsAsync } from '@repo/widgets/product-details';
import { cacheLife, cacheTag } from 'next/cache';
import { Suspense } from 'react';

const getMetadata = async (slug: string) => {
  'use cache';
  cacheLife('fiveMin');
  cacheTag(`product-${slug}-metadata`);

  try {
    const product = await fetchProductBySlug(slug);

    return {
      title: product.title,
      description: product.description,
    };
  } catch {
    return {
      title: 'Product Not Found',
    };
  }
};

export async function generateMetadata({
  params,
}: PageProps<'/[market]/product/[slug]'>) {
  const { slug } = await params;

  return getMetadata(slug);
}

export default async function MarketProductPage({
  params,
}: PageProps<'/[market]/product/[slug]'>) {
  return (
    <Container centered>
      <Suspense fallback={<>loading...</>}>
        {params.then(({ slug }) => (
          <ProductDetailsAsync slug={slug} />
        ))}
      </Suspense>
    </Container>
  );
}
