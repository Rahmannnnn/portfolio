'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

interface Props {
  timeline: GSAPTimeline;
}

const Preloader = ({ timeline }: Props) => {
  CustomEase.create(
    'hop',
    'M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1'
  );

  const [counter, setCounter] = useState<number>(0);
  const updateCounter = () => {
    if (counter == 100) {
      return;
    }

    let newValue = counter + Math.floor(Math.random() * 10);
    setCounter((prev) => {
      if (newValue + prev > 100) {
        return 100;
      }

      return prev + newValue;
    });
  };

  const counterRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      let delay = Math.floor(Math.random() * 300) + 50;
      let timer = setInterval(updateCounter, delay);
      if (counter == 100) {
        return () => clearInterval(timer);
      }

      timeline.add(
        gsap.to('.preloader', {
          // do nothing, wait the counter
          opacity: 1,
          duration: 5,
        })
      );

      timeline.add(
        gsap.to('.preloader-counter-text', {
          y: 1000,
          duration: 1,
          ease: 'power4.inOut',
        })
      );

      timeline.add(
        gsap.to('.preloader-overlay', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'hop',
          duration: 1.5,
        })
      );

      timeline.add(
        gsap.to('.preloader-overlay-text', {
          left: '-2000px',
          duration: 3,
          ease: 'sine.inOut',
        })
      );
    },
    { scope: containerRef, dependencies: [timeline] }
  );

  return (
    <div className={`preloader ${styles.container}`} ref={containerRef}>
      <div className={`preloader-counter ${styles.container__counter}`}>
        <p ref={counterRef} className="preloader-counter-text">
          {counter}%
        </p>
      </div>
      <div className={`preloader-overlay ${styles.container__overlay}`}>
        <h1 className="preloader-overlay-text">arifrahman</h1>
      </div>
    </div>
  );
};

export default Preloader;
