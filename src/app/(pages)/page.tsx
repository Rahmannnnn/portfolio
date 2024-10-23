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
  useEffect,
  useRef,
  useState,
} from 'react';
import { PROJECTS } from '@/constants/PROJECTS';
import { POSITIONS } from '@/constants/POSITIONS';
import { TransitionContext } from '@/contexts/TransitionContext';
import { NavigationContext, PAGE } from '@/contexts/NavigationContext';
import Image from 'next/image';

export default function Home() {
  const { clone, setClone, cloneBack, setCloneBack } =
    useContext(NavigationContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toPage } = useContext(NavigationContext);

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
        top: '50%',
        left: '50%',
        opacity: (i) => (i === cloneBack.index ? '0' : '1'),
        transform: 'translate(-50%, -50%) scale(0)',
      });

      gsap.set('.home__gallery__image__text', {
        opacity: 0,
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

  const handleDetailPage = (index: number, source: string, s: string) => {
    let item = projectRefs[index].current;
    if (item) {
      const { top, left, height, width } = item.getBoundingClientRect();
      setClone({
        ...clone,
        from: {
          source,
          top,
          left,
          width,
          height,
        },
      });
    }

    toPage(PAGE.DETAIL, s);
  };

  useEffect(() => {
    document.body.style.height = '100vh';
  }, []);

  useEffect(() => {
    const { from, to, index } = clone;
    if (from.source && to.source && index !== -1) {
      if (projectRefs[index].current) {
        const { width, height, top, left } =
          projectRefs[index].current.getBoundingClientRect();
        const source = PROJECTS[index].image;

        setClone({
          ...clone,
          to: {
            width,
            height,
            top,
            left,
            source,
          },
        });
      }
    }
  }, [clone]);

  useEffect(() => {
    if (cloneBack.index !== -1) {
      const ref = projectRefs[cloneBack.index];
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        const project = PROJECTS[cloneBack.index];
        const { top, left } = POSITIONS[cloneBack.index];
        setCloneBack({
          ...cloneBack,
          to: {
            width,
            height,
            top,
            left,
            source: project.image,
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

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
                onClick={() => handleDetailPage(index, image, project_slug)}
                className={`home__gallery__image ${styles.home__gallery__image}`}
                style={{
                  left: `${POSITIONS[index].left}%`,
                  top: `${POSITIONS[index].top}%`,
                }}
              >
                <p className={`home__gallery__image__text ${styles.text}`}>{`[${
                  index + 1
                }]`}</p>
                <Image
                  loading="lazy"
                  // priority
                  width={100}
                  height={100}
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
