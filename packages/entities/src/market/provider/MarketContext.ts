'use client';

import { createContext } from 'react';
import type { Market } from '../types';

export const MarketContext = createContext<Market | null>(null);
