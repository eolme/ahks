export const emitChange = (el: HTMLInputElement) => {
  const event = new Event('change', { bubbles: true });

  Object.defineProperty(event, 'simulated', {
    value: true
  });

  el.dispatchEvent(event);

  return true;
};

const emitterValue = /*#__NOINLINE__*/Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

export const emitValue = (el: HTMLInputElement, value: string) => {
  if (emitterValue && emitterValue.set) {
    emitterValue.set.call(el, value);
  }

  return emitChange(el);
};

const emitterChecked = /*#__NOINLINE__*/Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'checked');

export const emitChecked = (el: HTMLInputElement, value: boolean) => {
  if (emitterChecked && emitterChecked.set) {
    emitterChecked.set.call(el, value);
  }

  return emitChange(el);
};
