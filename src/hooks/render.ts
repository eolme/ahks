import type { ReactElement, ReactNode } from 'react';

export const useRender = (render: ReactNode) => render as unknown as ReactElement | null;
