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
        x: -1000,
      });

      gsap.set('.mid', {
        y: 1000,
      });

      gsap.set('.right', {
        x: 1000,
      });

      gsap.to('.left', {
        duration: 2,
        x: 0,
        ease: 'power4.inOut',
      });

      gsap.to('.mid', {
        duration: 2,
        y: 0,
        ease: 'power4.inOut',
      });

      gsap.to('.right', {
        duration: 2,
        x: 0,
        ease: 'power4.inOut',
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={styles.footer} ref={containerRef}>
      <div className={styles.footer__content}>
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
