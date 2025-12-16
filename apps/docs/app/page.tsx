import { DEFAULT_MARKET_CODE } from '@repo/entities/market';
import { redirect } from 'next/navigation';

export default function RootPage() {
  return redirect(`/${DEFAULT_MARKET_CODE}`);
}
