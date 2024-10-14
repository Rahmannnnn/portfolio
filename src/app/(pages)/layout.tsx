'use client';

import Footer from '@/components/Footer';
import { GSAP } from '@/components/GSAP';
import Navigation from '@/components/Navigation';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { TransitionProvider } from '@/contexts/TransitionContext';
import { useEffect, useRef } from 'react';
import styles from './layout.module.scss';

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

  return (
    <html lang="en">
      <TransitionProvider>
        <NavigationProvider>
          <body>
            <div ref={dotRef} className={`${styles.cursor__dot}`}></div>
            <Navigation />
            {children}
            <Footer />
            <GSAP scrollTrigger={true} />
          </body>
        </NavigationProvider>
      </TransitionProvider>
    </html>
  );
}
