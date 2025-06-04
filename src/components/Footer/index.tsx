'use client';

import React, { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import styles from './index.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';
import { PRELOADER_DURATION } from '@/constants/PRELOADER_DURATION';
import { NavigationContext } from '@/contexts/NavigationContext';

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set('.left', {
        opacity: 0,
      });

      gsap.set('.mid', {
        opacity: 0,
      });

      gsap.set('.right', {
        opacity: 0,
      });

      gsap.to('.left', {
        opacity: 1,
        duration: 2,
        delay: PRELOADER_DURATION + 3,
        ease: 'power4.inOut',
      });

      gsap.to('.mid', {
        opacity: 1,
        duration: 2,
        delay: PRELOADER_DURATION + 3,
        ease: 'power4.inOut',
      });

      gsap.to('.right', {
        opacity: 1,
        duration: 2,
        delay: PRELOADER_DURATION + 3,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.to('.content', {
            overflow: 'visible',
          });
        },
      });
    },
    { scope: containerRef }
  );

  const { showModal } = useContext(NavigationContext);
  useGSAP(
    () => {
      if (showModal) {
        gsap.to('.content', {
          opacity: 0,
          duration: 1,
        });
      } else {
        gsap.set('.content', {
          opacity: 1,
        });
      }
    },
    {
      dependencies: [showModal],
      scope: containerRef,
    }
  );

  return (
    <div className={styles.footer} ref={containerRef}>
      <div
        className={`content ${styles.footer__content}
        }`}
      >
        <div className={`left ${styles.footer__content__left}`}>
          <a href="mailto:arifingatrahman@gmail.com">
            Email
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </div>
        {/* <div className={`mid ${styles.footer__content__mid}`}>
          <a href="mailto:arifingatrahman@gmail.com">
            Email
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </div> */}
        <div className={`right ${styles.footer__content__right}`}>
          <a
            href="https://www.linkedin.com/in/arif-rahman-amrul-ghani/"
            target="_blank"
          >
            LinkedIn
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
