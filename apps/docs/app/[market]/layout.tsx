import { getMarketConfig, isValidMarket } from '@repo/entities/market';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { brandConfig } from '../config/brandConfig';
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
  return brandConfig.enabledMarkets.map((code) => ({ market: code }));
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
        <Providers marketConfig={marketConfig}>{children}</Providers>
      </body>
    </html>
  );
}
