'use client';

import { Wrapper } from '@/components/Wrapper';
import styles from './page.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useContext, useRef } from 'react';
import { NavigationContext } from '@/contexts/NavigationContext';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <div className={styles.home} ref={containerRef}>
        <p>Home</p>
      </div>
    </Wrapper>
  );
}
