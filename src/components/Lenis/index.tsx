'use client';

import { LenisOptions } from 'lenis';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';

type Props = {
  root: boolean;
  options: LenisOptions;
};
export function Lenis({ root, options }: Props) {
  return (
    <ReactLenis
      root={root}
      options={{
        ...options,
        prevent: (node) => {
          return (
            node.nodeName === 'VERCEL-LIVE-FEEDBACK' ||
            node.id === 'theatrejs-studio-root'
          );
        },
      }}
    />
  );
}
