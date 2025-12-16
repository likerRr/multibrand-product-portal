'use client';

import { createContext } from 'react';
import type { BrandConfig } from './types';

export const BrandContext = createContext<BrandConfig | null>(null);
