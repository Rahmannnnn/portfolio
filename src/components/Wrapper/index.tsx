'use client';

import { ReactNode, useContext, useEffect } from 'react';
import { Lenis } from '../Lenis';
import { LenisOptions } from 'lenis';
import { NavigationContext } from '@/contexts/NavigationContext';

type Props = {
  children: ReactNode;
  lenis?: LenisOptions;
};

export function Wrapper({
  children,
  lenis = {
    lerp: 0.075,
  },
}: Props) {
  const { getCurrentPage } = useContext(NavigationContext);
  useEffect(() => {
    getCurrentPage();
  }, []);

  return (
    <>
      {lenis && <Lenis root options={lenis} />}
      <main role="main">{children}</main>
    </>
  );
}
