import { cva, type VariantProps } from 'class-variance-authority';
import type { FC, PropsWithChildren } from 'react';

const variants = cva(['max-w-4xl'], {
  variants: {
    centered: {
      true: ['mx-auto py-4'],
    },
  },
  defaultVariants: {
    centered: false,
  },
});

interface Props extends VariantProps<typeof variants> {}

export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return <div className={variants(props)}>{children}</div>;
};
