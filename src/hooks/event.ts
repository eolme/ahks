import type { RefObject } from 'react';

import { emitChange, emitChecked, emitValue } from '../fn/input.js';
import { useHandler } from './handler.js';
import { useIsomorphicLayoutEffect } from './isomorphic.js';
import { passiveOptions } from '../global/event.js';

export const useChangeCommit = (
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>
) => useHandler(() => ref.current !== null && emitChange(ref.current));

export const useValueCommit = (
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>
) => useHandler((value: string) => ref.current !== null && emitValue(ref.current, value));

export const useCheckCommit = (
  ref: RefObject<HTMLInputElement | null>
) => useHandler((checked: boolean) => ref.current !== null && emitChecked(ref.current, checked));

type ResolveTarget<K extends string> =
  K extends keyof HTMLElementEventMap ? HTMLElement :
    K extends keyof SVGElementEventMap ? SVGElement :
      K extends keyof ElementEventMap ? Element :
        EventTarget;

type ResolveEvent<K extends string> =
  K extends keyof HTMLElementEventMap ? HTMLElementEventMap[K] :
    K extends keyof SVGElementEventMap ? SVGElementEventMap[K] :
      K extends keyof ElementEventMap ? ElementEventMap[K] :
        Event;

export const usePassiveEvent = <K extends string>(
  ref: RefObject<ResolveTarget<K> | null>,
  event: K,
  listener: (this: ResolveTarget<K>, event: ResolveEvent<K>) => void
) => {
  useIsomorphicLayoutEffect(() => {
    const elem = ref.current;

    if (elem === null) {
      return;
    }

    const options = passiveOptions();

    elem.addEventListener(event, listener as EventListener, options);

    return () => {
      elem.removeEventListener(event, listener as EventListener, options);
    };
  }, [ref.current]);
};
