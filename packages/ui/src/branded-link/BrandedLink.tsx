import { prefixHref } from '@repo/shared/utils';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export interface Props extends ComponentProps<typeof Link> {
  href: string;
  prefix: string;
}

export const BrandedLink: FC<Props> = ({
  prefix,
  href,
  children,
  ...props
}) => {
  const brandedHref = prefixHref(prefix, href);

  return (
    <Link href={brandedHref} {...props}>
      {children}
    </Link>
  );
};
