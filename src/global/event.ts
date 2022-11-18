import { noop } from '../fn/noop.js';

export const passiveOptions = () => {
  let detected = false;
  let passive = false;

  if (!detected) {
    try {
      const options = Object.defineProperty({}, 'passive', {
        enumerable: true,
        get() {
          passive = true;

          return passive;
        }
      });

      addEventListener('passive', noop, options);
      removeEventListener('passive', noop, options);
    } catch {
      passive = false;
    } finally {
      detected = true;
    }
  }

  return (passive ? { passive } : false) as AddEventListenerOptions;
};
