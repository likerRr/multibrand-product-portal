import type { FC, PropsWithChildren, ReactNode } from 'react';

interface Props {
  header?: ReactNode;
}

export const DefaultPageLayout: FC<PropsWithChildren<Props>> = ({
  children,
  header,
}) => {
  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      <main className="flex-1 overflow-y-auto relative bg-background flex flex-col">
        {header}

        <div className="p-8 max-w-7xl mx-auto w-full grow text-foreground">
          {children}
        </div>
      </main>
    </div>
  );
};
