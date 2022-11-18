import type { SetStateAction } from 'react';

import { useReducer, useRef } from 'react';
import { constRef } from '../utils/index.js';
import { useHandler } from './handler.js';

const updateReducer = () => ({});

export const useUpdateState = () => {
  return useReducer(updateReducer, constRef);
};

export const useUpdate = () => {
  return useUpdateState()[1];
};

type Track = Record<string | number, boolean | undefined>;
type TrackState = Record<string | number, unknown>;

export const useTrackState = <S extends TrackState>(initial: S) => {
  const trackRef = useRef<Track>({});
  const stateRef = useRef<S>(initial);
  const update = useUpdate();

  const setState = useHandler((state: SetStateAction<S>) => {
    const next = typeof state === 'function' ? state(stateRef.current) : state;
    const current = stateRef.current;
    const track = trackRef.current;

    let shouldUpdate = false;

    for (const key in next) {
      if (current[key] === next[key]) {
        continue;
      }

      current[key] = next[key];

      if (track[key]) {
        shouldUpdate = true;
      }
    }

    if (shouldUpdate) {
      update();
    }
  });

  const state = {};

  for (const key in stateRef.current) {
    Object.defineProperty(state, key, {
      get() {
        trackRef.current[key] = true;

        return stateRef.current[key];
      }
    });
  }

  return [state as Readonly<S>, setState] as const;
};
