'use client';

import Tempus from '@darkroom.engineering/tempus';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTriggerConfig } from './ScrollTrigger';
import { CustomEase } from 'gsap/all';

export function GSAP({ scrollTrigger = false }) {
  useLayoutEffect(() => {
    gsap.defaults({ ease: 'none' });

    // merge rafs
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.remove(gsap.updateRoot);
    Tempus?.add((time: number) => {
      gsap.updateRoot(time / 1000);
    }, 0);

    // register ease
    gsap.registerPlugin(CustomEase);
  }, []);

  return scrollTrigger && <ScrollTriggerConfig />;
}
