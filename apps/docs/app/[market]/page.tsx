import { getMarketMetadata } from '@repo/infra/metadata/market';
import { FeatureGrid } from '@repo/widgets/feature-grid';
import { WelcomeHero } from '@repo/widgets/welcome-hero';
import type { Metadata } from 'next';
import { brandConfig } from '../config/brandConfig';

export async function generateMetadata({
  params,
}: LayoutProps<'/[market]'>): Promise<Metadata> {
  const { market } = await params;

  return getMarketMetadata(market, brandConfig);
}

export default function MarketWelcomePage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <WelcomeHero />
      <FeatureGrid />
    </div>
  );
}
