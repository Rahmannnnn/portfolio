import { ReactNode } from 'react';
import { Lenis } from '../Lenis';
import { LenisOptions } from 'lenis';

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
  return (
    <>
      {lenis && <Lenis root options={lenis} />}
      <main role="main">{children}</main>
    </>
  );
}
