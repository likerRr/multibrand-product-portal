import { MARKET_CODES } from '@repo/entities/market';
import { fetchProductBySlug } from '@repo/entities/product';
import { getProducts } from '@repo/features/product-list';
import { makeSlug } from '@repo/shared/utils';
import { Container } from '@repo/ui/container';
import { ProductDetailsAsync } from '@repo/widgets/product-details';
import { cacheLife, cacheTag } from 'next/cache';

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

export async function generateStaticParams() {
  const productsPromise = MARKET_CODES.map(async (market) => {
    const products = await getProducts({
      market,
    });

    return products.map((product) => ({
      market,
      slug: makeSlug({
        id: product.id,
        title: product.title,
      }),
    }));
  });

  const productsByMarket = await Promise.all(productsPromise);

  return productsByMarket.flat();
}

export default async function MarketProductPage({
  params,
}: PageProps<'/[market]/product/[slug]'>) {
  const { slug } = await params;

  return (
    <Container centered>
      <ProductDetailsAsync slug={slug} />
    </Container>
  );
}
