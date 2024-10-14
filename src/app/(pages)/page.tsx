'use client';

import { Wrapper } from '@/components/Wrapper';
import styles from './page.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  createRef,
  MouseEvent,
  RefObject,
  useContext,
  useRef,
  useState,
} from 'react';
import { NavigationContext } from '@/contexts/NavigationContext';
import { PROJECTS } from '@/constants/PROJECTS';
import { POSITIONS } from '@/constants/POSITIONS';
import { TransitionContext } from '@/contexts/TransitionContext';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [projectRefs] = useState<RefObject<HTMLDivElement>[]>(() =>
    Array(PROJECTS.length)
      .fill(null)
      .map((_) => createRef())
  );

  const scatterAndShrink = () => {
    gsap
      .to('.home__gallery__image', {
        top: (i) => `${POSITIONS[i].top}%`,
        left: (i) => `${POSITIONS[i].left}%`,

        transform: 'none',
        width: '75px',
        height: '100px',
        stagger: 0.075,
        duration: 0.75,
        ease: 'power2.out',
      })
      .then(() => {
        gsap.to('.home__gallery__image', {
          duration: 0.25,
          opacity: 1,
        });
      });
  };

  const { timeline } = useContext(TransitionContext);
  useGSAP(
    () => {
      gsap.set('.home__gallery__image', {
        top: '45%',
        left: '50%',
        // opacity: (i) => (i ? '0' : '1'),
        transform: 'translate(-50%, -50%) scale(0)',
      });

      gsap.set('.home__gallery__image__text', {
        opacity: 1,
        zIndex: -1,
        position: 'absolute',
      });

      gsap.to('.home__gallery__image', {
        scale: 1,
        width: '300px',
        height: '400px',
        stagger: 0.15,
        duration: 0.75,
        ease: 'power2.out',
        delay: 1,
        onComplete: scatterAndShrink,
      });

      gsap.to('.home__gallery__image__text', {
        duration: 1,
        opacity: 1,
        delay: 4,
        x: '-120%',
        stagger: 0.1,
        ease: 'power4.inOut',
      });

      timeline.add(
        gsap.to('.home__gallery__image', {
          duration: 1,
          opacity: 0,
          ease: 'power4.inOut',
        })
      );
    },
    { scope: containerRef }
  );

  const titleRef = useRef<HTMLDivElement>(null);
  const updatePosition = (event: MouseEvent) => {
    let x = 0,
      y = 0;

    if (titleRef.current) {
      x = event.clientX;
      y = event.clientY;

      titleRef.current.style.left = `${x}px`;
      titleRef.current.style.top = `${y}px`;
      titleRef.current.animate(
        {
          left: `calc(${x}px + 5%)`,
          top: `${y}px`,
        },
        {
          duration: 500,
          fill: 'forwards',
        }
      );
    }
  };

  const handleTitleMouseend = () => {
    if (window.innerWidth < 767) {
      return;
    }

    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transition = '0.2s ease-in-out';
    }
  };

  const handleTitleMousemove = (event: MouseEvent, title: string) => {
    if (window.innerWidth < 767) {
      return;
    }

    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.innerHTML = `<h1>${title}</h1>`;
      updatePosition(event);
    }
  };

  return (
    <Wrapper>
      <div className={styles.home} ref={containerRef}>
        <div ref={titleRef} className={styles.home__hover}></div>
        <div className={styles.home__gallery}>
          {PROJECTS.map(({ project_slug, title, image }, index) => {
            return (
              <div
                ref={projectRefs[index]}
                key={`project-${index}`}
                onMouseMove={(e) => handleTitleMousemove(e, title)}
                onMouseEnter={(e) => handleTitleMousemove(e, title)}
                onMouseLeave={handleTitleMouseend}
                className={`home__gallery__image ${styles.home__gallery__image}`}
                style={{
                  left: `${POSITIONS[index].left}%`,
                  top: `${POSITIONS[index].top}%`,
                }}
              >
                <p className={`home__gallery__image__text ${styles.text}`}>{`[${
                  index + 1
                }]`}</p>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
