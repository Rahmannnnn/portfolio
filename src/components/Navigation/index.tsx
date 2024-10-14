'use client';

import React, { useRef } from 'react';
import styles from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set('.title', {
        x: -1000,
      });

      gsap.set('.right', {
        opacity: 0,
      });

      gsap.to('.title', {
        duration: 2,
        x: 0,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.to('.content', {
            overflow: 'visible',
          });
        },
      });

      gsap.to('.rahman', {
        delay: 2,
        duration: 0.5,
        ease: 'power4.inOut',
        top: '100%',
        position: 'absolute',
        onComplete: () => {
          gsap.to('.rahman', {
            duration: 0.5,
            ease: 'power4.inOut',
            left: '0',
          });
        },
      });

      gsap.to('.right', {
        opacity: 1,
        duration: 2,
        delay: 2.5,
        ease: 'power4.inOut',
      });
    },
    { scope: containerRef }
  );
  return (
    <div className={styles.navigation} ref={containerRef}>
      <div className={`content ${styles.navigation__content}`}>
        <div className={`left ${styles.navigation__content__left}`}>
          <h1 className="title">arif</h1>
          <h1 className="title rahman">rahman</h1>
        </div>
        <div className={`right ${styles.navigation__content__right}`}>
          <p className="menu projects">Projects</p>
          <p className="menu about">About</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
