import { useState } from 'react';
import { useRenderEffect } from './effect.js';

type PromiseState<V, E> = {
  pending: true;
  resolved: null;
  rejected: null;
} | {
  pending: false;
  resolved: V;
  rejected: null;
} | {
  pending: false;
  resolved: null;
  rejected: E;
};

export const usePromise = <V, E = unknown>(promise: () => PromiseLike<V>) => {
  const [pending, setPending] = useState(true);
  const [resolved, setResolved] = useState<V | null>(null);
  const [rejected, setRejected] = useState<E | null>(null);

  useRenderEffect(() => {
    let aborted = false;

    setPending(true);
    Promise.resolve().then(promise).then((value) => {
      if (aborted) {
        return;
      }

      setPending(false);
      setResolved(value);
    }, (ex) => {
      if (aborted) {
        return;
      }

      setPending(false);
      setRejected(ex);
    });

    return () => {
      aborted = true;
    };
  });

  return {
    pending,
    resolved,
    rejected
  } as PromiseState<V, E>;
};
