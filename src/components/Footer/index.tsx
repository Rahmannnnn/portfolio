'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import styles from './index.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import gsap from 'gsap';

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
        delay: 2.5,
        ease: 'power4.inOut',
      });

      gsap.to('.mid', {
        opacity: 1,
        duration: 2,
        delay: 2.5,
        ease: 'power4.inOut',
      });

      gsap.to('.right', {
        opacity: 1,
        duration: 2,
        delay: 2.5,
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

  return (
    <div className={styles.footer} ref={containerRef}>
      <div className={`content ${styles.footer__content}`}>
        <div className={`left ${styles.footer__content__left}`}>
          <a href="https://read.cv/arifrahman" target="_blank">
            read.cv
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </div>
        <div className={`mid ${styles.footer__content__mid}`}>
          <a href="mailto:arifingatrahman@gmail.com">
            Email
            <span>
              <FiArrowUpRight />
            </span>
          </a>
        </div>
        <div className={`right ${styles.footer__content__right}`}>
          <a
            href="https://www.linkedin.com/in/arif-rahman-amrul-ghani/"
            target="_blank"
          >
            Linkedin
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
