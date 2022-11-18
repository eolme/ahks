import type { DependencyList } from 'react';

export {
  assignRef,
  createCallbackRef,
  mergeRefs,
  refToCallback,
  transformRef
} from 'use-callback-ref';

export const constRef = {} as const;

export const constExoticDeps: any[] = [];

export const constDeps: DependencyList = constExoticDeps;
