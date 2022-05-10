import { useMemo } from 'react';
import { constDeps } from '../utils/index.js';

export const useCreation = <T = undefined>(creator: () => T) => {
  return useMemo(creator, constDeps);
};
