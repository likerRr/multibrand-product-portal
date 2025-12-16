'use client';

import { useContext } from 'react';
import { BrandContext } from './BrandContext';

export const useBrand = () => {
  const context = useContext(BrandContext);

  if (!context) {
    throw new Error('useBrand must be used within BrandProvider');
  }

  return context;
};
