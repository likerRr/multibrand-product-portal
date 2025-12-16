import { ProductCardProvider } from '@repo/widgets/product-card';

export default async function ProductLayout({
  children,
}: LayoutProps<'/[market]/product/[slug]'>) {
  return <ProductCardProvider>{children}</ProductCardProvider>;
}
