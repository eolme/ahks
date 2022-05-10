import { loadBlob, loadImage } from '../fn/blob.js';
import { usePromise } from './promise.js';

export const useLoadImage = (url: string) => usePromise(() => loadImage(url));

export const useLoadBlob = (url: string) => usePromise(() => loadBlob(url));
