'use client';

import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import styles from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  INITIAL_CLONE,
  NavigationContext,
  PAGE,
} from '@/contexts/NavigationContext';
import { CustomEase } from 'gsap/all';
import Image from 'next/image';
import arrowBack from '@/icons/arrow-back.svg';
import { POSITIONS } from '@/constants/POSITIONS';
import { PRELOADER_DURATION } from '@/constants/PRELOADER_DURATION';

const Navigation = () => {
  const {
    currentPage,
    toPage,

    cloneElement,
    setCloneElement,
    createCloneElement,

    clone,
    setClone,

    cloneBack,
    setCloneBack,
  } = useContext(NavigationContext);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
  }, []);

  CustomEase.create(
    'hop',
    'M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1'
  );

  const { showModal, setShowModal } = useContext(NavigationContext);
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
        delay: PRELOADER_DURATION,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.to('.content', {
            overflow: 'visible',
          });
        },
      });

      gsap.to('.rahman', {
        delay: PRELOADER_DURATION + 2,
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
        delay: PRELOADER_DURATION + 3,
        ease: 'power4.inOut',
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      if (showModal) {
        gsap.to('.about__page', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'hop',
          duration: 1.5,
          onStart: () => {
            gsap.set('.about__page', {
              pointerEvents: 'all',
            });
          },
        });
      } else {
        gsap.to('.about__page', {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          ease: 'hop',
          duration: 1.5,
          onComplete: () => {
            gsap.set('.about__page', {
              pointerEvents: 'none',
            });
          },
        });
      }
    },
    {
      scope: containerRef,
      dependencies: [showModal],
    }
  );

  const handleBack = () => {
    const { from } = cloneBack;
    if (from.source) {
      createCloneElement(PAGE.DETAIL);
    }

    toPage(PAGE.HOME, '/');
  };

  const { contextSafe } = useGSAP({ scope: containerRef });
  const handleGSAPClone = contextSafe((c: PAGE) => {
    const to = c === PAGE.HOME ? clone.to : cloneBack.to;
    const index = c === PAGE.HOME ? clone.index : cloneBack.index;

    const { width, height, source } = to;
    if (source) {
      let tl = gsap.timeline();
      let cloneVars: GSAPTweenVars = {};
      let cloneImageVars: GSAPTweenVars = {};

      switch (c) {
        case PAGE.HOME:
          cloneVars = {
            duration: 2,
            width: '100vw',
            height,
            top: '50vh',
            left: 0,
            ease: 'power4.inOut',
          };

          cloneImageVars = {
            duration: 2,
            width,
            height,
            objectFit: 'cover',
            ease: 'power4.inOut',
          };
          break;

        case PAGE.DETAIL:
          cloneVars = {
            position: 'fixed',
            duration: 4.75,
            width: '75px',
            height: '100px',
            background: 'rgba(0,0,0,0.4)',
            margin: '20px',
            top: `${POSITIONS[index].top}%`,
            left: `${POSITIONS[index].left}%`,
            ease: 'power4.inOut',
          };

          cloneImageVars = {
            duration: 2,
            objectFit: 'cover',
            ease: 'power4.inOut',
            width: '100%',
            height: '100%',
          };
          break;
      }

      tl.to('.clone__image', cloneImageVars)
        .to('.clone', cloneVars, '<')
        .to('.clone', { duration: 0.5 })
        .then(() => {
          setCloneElement(<></>);
          if (c === PAGE.HOME) {
            setClone(INITIAL_CLONE);
          } else {
            setCloneBack(INITIAL_CLONE);
          }
        });
    }
  });

  useEffect(() => {
    if (clone.from.source) {
      createCloneElement(PAGE.HOME);
    }
  }, [clone]);

  useEffect(() => {
    const { to } = clone;
    if (to.source && cloneElement !== <></>) {
      handleGSAPClone(PAGE.HOME);
    }
  }, [clone]);

  useEffect(() => {
    const { to } = cloneBack;
    if (to.source && cloneElement !== <></>) {
      handleGSAPClone(PAGE.DETAIL);
    }
  }, [cloneBack]);

  return (
    <div className={styles.navigation} ref={containerRef}>
      {cloneElement}

      <div className={`content ${styles.navigation__content}`}>
        <div
          onClick={() => {
            if (currentPage === PAGE.HOME) return;
            handleBack();
          }}
          style={{
            cursor: currentPage === PAGE.DETAIL ? 'pointer' : 'default',
          }}
          className={`left ${styles.navigation__content__left}`}
        >
          <h1 className="title">arif</h1>
          <h1 className="title rahman">rahman</h1>
        </div>
        <div className={`right ${styles.navigation__content__right}`}>
          {currentPage === PAGE.HOME && (
            <>
              <p className="menu projects">Projects</p>
              <p
                className="menu about"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                About
              </p>
            </>
          )}

          {currentPage === PAGE.DETAIL && (
            <div className={`${styles.back}`} onClick={handleBack}>
              <div className={styles.back__images}>
                <div className={styles.back__images__move}>
                  <Image src={arrowBack} alt="" />
                  <Image src={arrowBack} alt="" />
                </div>
              </div>
              <p>Back</p>
            </div>
          )}
        </div>
      </div>

      <div
        data-lenis-prevent
        className={`about__page ${styles.navigation__about}`}
      >
        <div className={`${styles.navigation__about__header}`}>
          <div
            onClick={() => {
              setShowModal(false);
            }}
            style={{
              cursor: 'pointer',
            }}
            className={`${styles.navigation__about__header__left}`}
          >
            <h1 className="title">arif</h1>
            <h1 className="title rahman">rahman</h1>
          </div>
          <div className={`${styles.navigation__about__header__right}`}>
            <p
              onClick={() => {
                setShowModal(false);
              }}
            >
              Projects
            </p>
            <p>About</p>
          </div>
        </div>

        <div className={styles.navigation__about__content}>
          <p>content</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
