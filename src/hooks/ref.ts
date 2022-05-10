import type { RefObject } from 'react';

import { useRef } from 'react';

export {
  useCallbackRef,
  useMergeRefs,
  useRefToCallback,
  useTransformRef
} from 'use-callback-ref';

export {
  default as useComposedRef
} from 'use-composed-ref';

export {
  default as useMountedRef
} from 'use-is-mounted-ref';

export {
  default as useLatestRef
} from 'use-latest';

export const useFirstRenderRef = () => {
  const firstRender = useRef(true);
  const firstRenderRef = useRef(true);

  if (firstRenderRef.current) {
    firstRenderRef.current = false;

    return firstRender as RefObject<boolean>;
  }

  return firstRenderRef as RefObject<boolean>;
};

export const useStableRef = <T = undefined>(value: T) => {
  const stableRef = useRef(value);

  stableRef.current = value;

  return stableRef as RefObject<T>;
};

