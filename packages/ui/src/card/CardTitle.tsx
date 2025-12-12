import { type FC, type PropsWithChildren } from 'react';

export const CardTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2>{children}</h2>;
};
