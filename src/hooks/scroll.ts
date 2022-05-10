import { scrollTop } from '../fn/scroll.js';

import { passiveOptions } from '../global/event.js';

import { useLayoutMount } from './effect.js';
import { useLatestRef } from './ref.js';

export const useScrollHandler = (handler: (scroll: number) => any) => {
  const stableHandler = useLatestRef(handler);

  useLayoutMount(() => {
    let mounted = false;

    const scrollHandler = () => {
      if (mounted) {
        stableHandler.current(scrollTop());
      }
    };

    addEventListener('scroll', scrollHandler, passiveOptions);

    return () => {
      mounted = false;
      removeEventListener('scroll', scrollHandler, passiveOptions);
    };
  });
};
