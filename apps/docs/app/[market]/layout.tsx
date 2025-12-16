import { getMarketConfig, isValidMarket } from '@repo/entities/market';
import { getMarketMetadata } from '@repo/infra/metadata/market';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { Providers } from './providers';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export function generateStaticParams() {
  return [{ market: 'en' }, { market: 'ca' }];
}

export async function generateMetadata({
  params,
}: LayoutProps<'/[market]'>): Promise<Metadata> {
  const { market } = await params;

  return getMarketMetadata(market);
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[market]'>) {
  const { market } = await params;

  if (!isValidMarket(market)) {
    notFound();
  }

  const marketConfig = getMarketConfig(market);

  return (
    <html lang={marketConfig.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
