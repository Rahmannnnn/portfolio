'use client';

import { LenisOptions } from 'lenis';
import { ReactNode, useContext, useEffect, useRef } from 'react';
import { Lenis } from '@/libs/lenis';
import styles from './index.module.scss';

type Props = {
  children: ReactNode;
  lenis?: LenisOptions;
};

export function Wrapper({
  children,
  lenis = {
    lerp: 0.125,
  },
}: Props) {
  return (
    <>
      {lenis && <Lenis root options={lenis} />}
      <main role="main" className={styles.main}>
        {children}
      </main>
    </>
  );
}
