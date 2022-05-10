import * as React from 'react';

import { useIsomorphicLayoutEffect } from './isomorphic.js';

export const useInsertionEffect: (effect: () => void) => void =
  (React as any).useInsertionEffect ||
  useIsomorphicLayoutEffect;
