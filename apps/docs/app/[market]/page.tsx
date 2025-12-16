import { getMarketMetadata } from '@repo/infra/metadata/market';
import type { Metadata } from 'next';
import { brandConfig } from '../config/brandConfig';

export async function generateMetadata({
  params,
}: LayoutProps<'/[market]'>): Promise<Metadata> {
  const { market } = await params;

  return getMarketMetadata(market, brandConfig);
}

export default function MarketWelcomePage() {
  return <h1>Welcome</h1>;
}
