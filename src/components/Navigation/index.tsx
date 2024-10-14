'use client';

import React, { useContext, useRef } from 'react';
import styles from './index.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavigationContext } from '@/contexts/NavigationContext';
import { CustomEase } from 'gsap/all';

const Navigation = () => {
  gsap.registerPlugin(CustomEase);
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
  return (
    <div className={styles.navigation} ref={containerRef}>
      <div className={`content ${styles.navigation__content}`}>
        <div className={`left ${styles.navigation__content__left}`}>
          <h1 className="title">arif</h1>
          <h1 className="title rahman">rahman</h1>
        </div>
        <div className={`right ${styles.navigation__content__right}`}>
          <p className="menu projects">Projects</p>
          <p
            className="menu about"
            onClick={() => {
              setShowModal(true);
            }}
          >
            About
          </p>
        </div>
      </div>

      <div
        data-lenis-prevent
        className={`about__page ${styles.navigation__about}`}
      >
        <div className={`${styles.navigation__about__header}`}>
          <div className={`${styles.navigation__about__header__left}`}>
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
