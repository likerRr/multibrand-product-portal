import {
  DEFAULT_MARKET,
  getMarketConfig,
  MARKET_CODES,
} from '@repo/entities/market';
import { geolocation } from '@vercel/functions';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isIncludesMarket = MARKET_CODES.some(
    (code) => pathname.startsWith(`/${code}/`) || pathname === `/${code}`,
  );

  if (isIncludesMarket) {
    return NextResponse.next();
  }

  const geo = geolocation(request);
  const country = geo.country || DEFAULT_MARKET.country;
  const marketCode =
    MARKET_CODES.find((code) => getMarketConfig(code).country === country) ||
    DEFAULT_MARKET.code;

  return NextResponse.redirect(new URL(`/${marketCode}`, request.url));
}
