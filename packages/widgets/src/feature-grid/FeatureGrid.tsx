import { FeatureItem } from '@repo/ui/feature-item';
import React from 'react';

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-16">
      <FeatureItem
        emoji="🚚"
        title="Fast Shipping"
        description="Global delivery within 3-5 days."
      />
      <FeatureItem
        emoji="💳"
        title="Secure Payment"
        description="Encrypted transactions worldwide."
      />
      <FeatureItem
        emoji="🎁"
        title="Loyalty Program"
        description="Earn points on every purchase."
      />
    </div>
  );
};
