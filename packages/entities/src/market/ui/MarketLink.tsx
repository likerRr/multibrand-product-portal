'use client';

import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { useMarketHref } from '../hooks/useMarketHref';

type Props = PropsWithChildren<
  Omit<LinkProps, 'href'> & {
    href: string;
  }
>;

export const MarketLink = ({ href, children, ...props }: Props) => {
  const marketHref = useMarketHref(href);

  return (
    <Link href={marketHref} {...props}>
      {children}
    </Link>
  );
};
