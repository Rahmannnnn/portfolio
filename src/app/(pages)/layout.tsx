'use client';

import Footer from '@/components/Footer';
import { GSAP } from '@/components/GSAP';
import Navigation from '@/components/Navigation';
import { NavigationProvider } from '@/contexts/NavigationContext';
import {
  TransitionContext,
  TransitionProvider,
} from '@/contexts/TransitionContext';
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './layout.module.scss';
import Preloader from '@/components/Preloader';
import gsap from 'gsap';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let x = 0,
      y = 0;

    const updatePosition = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
        dotRef.current.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        );
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<GSAPTimeline>(gsap.timeline());

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
        },
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <html lang="en">
      <TransitionProvider>
        <NavigationProvider>
          <body className={styles.body}>
            <div ref={dotRef} className={`${styles.cursor__dot}`}></div>
            <Navigation />
            {!loaderFinished ? <Preloader timeline={timeline} /> : children}
            <Footer />
            <GSAP scrollTrigger={true} />
          </body>
        </NavigationProvider>
      </TransitionProvider>
    </html>
  );
}
