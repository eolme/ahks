import type { AnyFunction } from '../types.js';

import { useRef } from 'react';

export const useHandler = <T extends AnyFunction>(handler: T) => {
  return useRef(handler).current;
};

export const useStableHandler = <T extends AnyFunction>(handler: T): T => {
  const handlerRef = useRef(handler);

  handlerRef.current = handler;

  return useHandler(function(this: any) {
    // eslint-disable-next-line prefer-rest-params
    return Reflect.apply(handlerRef.current, this, arguments);
  } as T);
};
