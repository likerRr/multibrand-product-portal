'use client';

import { useMarket } from '@repo/entities/market';
import { useBrand } from '@repo/infra/app/providers/brand';

export const WelcomeHero = () => {
  const { name: brandName } = useBrand();
  const { name: marketName } = useMarket();

  return (
    <>
      <div className="inline-block mb-6 p-1 rounded-full bg-opacity-10 bg-primary">
        <span className="text-6xl">🌍</span>
      </div>

      <h1 className="text-5xl font-extrabold text-foreground mb-6 tracking-tight">
        Welcome to the "{brandName}" International Store!
      </h1>

      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
        Explore our exclusive collection tailored for the {marketName} market.
      </p>
    </>
  );
};
