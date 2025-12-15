import type { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h2>{children}</h2>;
};
