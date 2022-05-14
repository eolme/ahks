export const emitChange = (
  el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
) => {
  const event = new Event('change', { bubbles: true });

  Object.defineProperty(event, 'simulated', {
    enumerable: true,
    value: true
  });

  el.dispatchEvent(event);

  return true;
};

export const emitValue = (
  el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string
) => {
  const emitterValue = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value');

  if (emitterValue && emitterValue.set) {
    emitterValue.set.call(el, value);
  }

  return emitChange(el);
};

export const emitChecked = (el: HTMLInputElement, value: boolean) => {
  const emitterChecked = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'checked');

  if (emitterChecked && emitterChecked.set) {
    emitterChecked.set.call(el, value);
  }

  return emitChange(el);
};
