'use client';

import { MarketLink } from '@repo/entities/market';
import { useBrand } from '@repo/infra/app/providers/brand';
import type { FC, PropsWithChildren } from 'react';

export const MarketLayout: FC<PropsWithChildren> = ({ children }) => {
  const { name } = useBrand();

  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      <main className="flex-1 overflow-y-auto relative bg-background flex flex-col">
        <header className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 z-10 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-12">
            <h2 className="text-primary text-xl font-bold tracking-tight">
              {name}
            </h2>

            <nav className="hidden md:flex items-center gap-8">
              <MarketLink href="/">Welcome</MarketLink>
              <MarketLink href="/products">Products</MarketLink>
            </nav>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full grow text-foreground">
          {children}
        </div>
      </main>
    </div>
  );
};
