import { getMarketMetadata } from '@repo/infra/metadata/market';
import { Container } from '@repo/ui/container';
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
    <Container centered>
      <WelcomeHero />
      <FeatureGrid />
    </Container>
  );
}
