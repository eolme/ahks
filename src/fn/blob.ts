export const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const loader = new Image();

    Object.assign(loader, {
      src,
      crossOrigin: 'Anonymous',
      loading: 'eager',
      importance: 'high',
      decoding: 'async',
      onerror: () => reject(new Error('Failed')),
      onabort: () => reject(new Error('Aborted')),
      onload: () => resolve(loader)
    });
  });
};

export const loadBlob = (src: string) => {
  return new Promise<Blob>((resolve, reject) => {
    // Need xhr cuz fetch can return an invalid blob (https://github.com/developit/unfetch/issues/145)
    const xhr = new XMLHttpRequest();

    xhr.open('GET', src, true);

    Object.assign(xhr, {
      responseType: 'blob',
      onerror: () => reject(new Error('Failed')),
      onabort: () => reject(new Error('Aborted')),
      onload() {
        if (xhr.response) {
          resolve(xhr.response);
        } else {
          reject(new Error('Failed'));
        }
      }
    });

    xhr.send();
  });
};
