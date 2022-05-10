import { noop } from '../fn/noop.js';

export const passiveOptions = /*#__NOINLINE__*/(() => {
  let passive = false;

  const options = Object.defineProperty({}, 'passive', {
    get() {
      passive = true;

      return passive;
    }
  });

  addEventListener('passive', noop, options);
  removeEventListener('passive', noop, options);

  return passive ? { passive } : false;
})() as AddEventListenerOptions;
