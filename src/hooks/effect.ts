import type { EffectCallback } from 'react';

import { useEffect } from 'react';
import { useIsomorphicLayoutEffect } from './isomorphic.js';
import { constDeps } from '../utils/index.js';
import { useCreation } from './memo.js';

export {
  default as useDeepCompareEffect,
  useDeepCompareEffectNoCheck,
  useDeepCompareMemoize
} from 'use-deep-compare-effect';

export const useMount = (effect: EffectCallback) => {
  useEffect(effect, constDeps);
};

export const useLayoutMount = (effect: EffectCallback) => {
  useIsomorphicLayoutEffect(effect, constDeps);
};

export const useUnmount = (effect: ReturnType<EffectCallback>) => {
  useEffect(() => effect, constDeps);
};

export const useLayoutUnmount = (effect: ReturnType<EffectCallback>) => {
  useIsomorphicLayoutEffect(() => effect, constDeps);
};

export const useRenderEffect = (effect: EffectCallback) => {
  useUnmount(useCreation(effect));
};
