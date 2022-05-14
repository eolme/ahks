import { useRef } from 'react';

export {
  useMemoOne,
  useCallbackOne
} from 'use-memo-one';

export const useCreation = <T = undefined>(creator: () => T) => {
  const createRef = useRef(true);
  const valueRef = useRef<T>();

  if (createRef.current) {
    createRef.current = false;
    valueRef.current = creator();
  }

  return valueRef.current as T;
};
