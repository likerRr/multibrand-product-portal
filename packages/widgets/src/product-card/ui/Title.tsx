import { cva, type VariantProps } from 'class-variance-authority';
import type { FC, PropsWithChildren } from 'react';

const rootVariants = cva(['absolute left-0 w-full bg-linear-to-t p-4'], {
  variants: {
    position: {
      top: 'top-0 from-transparent to-black/70',
      bottom: 'bottom-0 from-black/70 to-transparent',
    },
  },
  defaultVariants: {
    position: 'top',
  },
});

export interface RootVariants extends VariantProps<typeof rootVariants> {}

export const Title: FC<PropsWithChildren<RootVariants>> = ({
  children,
  ...variants
}) => {
  return (
    <div className={rootVariants(variants)}>
      <h3 className="text-white text-lg font-bold truncate">{children}</h3>
    </div>
  );
};
