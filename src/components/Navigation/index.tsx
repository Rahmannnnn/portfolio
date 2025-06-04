'use client';

import React, { useContext, useEffect, useRef } from 'react';
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
import { ReactLenis } from 'lenis/react';
import { FiArrowUpRight } from 'react-icons/fi';
const Navigation = () => {
  const {
    currentPage,
    toPage,

    cloneElement,
    setCloneElement,
    createCloneElement,

    clone,
    setClone,
  } = useContext(NavigationContext);

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
          onComplete: () => {
            gsap.to('.intro', {
              opacity: 1,
              duration: 2,
              ease: 'power4.inOut',
              onComplete: () => {
                gsap.to('.experience', {
                  opacity: 1,
                  duration: 2,
                  ease: 'power4.inOut',
                });
              },
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

            gsap.set('.name', {
              fontWeight: 400,
            });
            gsap.set('.intro', {
              opacity: 0,
            });
            gsap.set('.experience', {
              opacity: 0,
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
    toPage(PAGE.HOME, '/');
  };

  const { contextSafe } = useGSAP({ scope: containerRef });
  const handleGSAPClone = contextSafe((c: PAGE) => {
    const to = clone.to;
    const index = clone.index;

    const { width, height, source } = to;
    if (source) {
      let tl = gsap.timeline();
      let cloneVars: GSAPTweenVars = {};
      let cloneImageVars: GSAPTweenVars = {};

      switch (c) {
        case PAGE.HOME:
          cloneVars = {
            duration: 1.5,
            width: '100vw',
            height,
            top: '50vh',
            left: 0,
            ease: 'power4.inOut',
          };

          cloneImageVars = {
            duration: 1.5,
            width,
            height,
            objectFit: 'cover',
            ease: 'power4.inOut',
          };
          break;
      }

      tl.to('.clone__image', cloneImageVars)
        .to('.clone', cloneVars, '<')
        .to('.clone', { duration: 1 })
        .then(() => {
          setCloneElement(<></>);
          setClone(INITIAL_CLONE);
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
        <ReactLenis root>
          <div>
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
              <div className={`intro ${styles.intro}`}>
                <p>Hi! &#128075;</p>
                <p>
                  I’m <span className="name">Arif Rahman Amrul Ghani</span>.
                  <br /> Now focused on creating <u>beautiful website</u> and
                  designing interfaces with <u>strong user experience</u>.
                </p>
                <p>
                  Currently looking for a job as a <u>Frontend Engineer</u> or{' '}
                  <u>UI/UX Designer</u>.
                </p>
              </div>
              <div className={`experience ${styles.experience}`}>
                <h1 className={styles.experience__title}>Working Experience</h1>
                <div className={styles.experience__content}>
                  <div className={styles.experience__content__item}>
                    <h2>Sea Labs Indonesia</h2>
                    <h3>PT. Shopee International Indonesia</h3>
                    <p>
                      <b>Trainee Frontend Engineer (Aug - Dec 2023)</b>
                    </p>
                    <p>
                      Participate a 4-month program called Labs Bootcamp Batch 1
                      as a Frontend Engineer Trainee, an intensive full-time
                      learning program led by expert trainer from Sea Labs
                      Indonesia. I Learned and completed assignments on software
                      engineering topics (especially frontend) about data
                      structures and algorithms, Golang, Javascript, Typescript,
                      ReactJs, NextJs, web optimization, React Native, Unit
                      Testing. The program ended with create a marketplace
                      website that implements buyer and seller pages, such as
                      purchasing goods, stock management, shipping, product
                      variation, product review, cart and transaction, etc.,
                      collaborated with backend engineers stream and finished
                      within 1 month.
                    </p>
                  </div>
                  <div className={styles.experience__content__item}>
                    <h2>Edukasystem, Indonesia</h2>
                    <h3>PT. Eduka Teknologi Indonesia</h3>
                    <p>
                      <b>Frontend Engineer (Oct 2021 - Apr 2022)</b>
                    </p>
                    <p>
                      Implement & maintain code standards for 4 Edukasystem
                      websites using VueJs and Initiate unit testing for main
                      product and increase test coverage from 0% to above 80%.
                    </p>
                    <h3> </h3>

                    <p>
                      <b>Frontend Engineer Intern (Jun 2021 - Sep 2021)</b>
                    </p>
                    <p>
                      Implement & maintain code standards Edukasystem main
                      product websites using VueJs
                    </p>
                  </div>
                  <div className={styles.experience__content__item}></div>
                </div>
              </div>

              <div className={`experience ${styles.education}`}>
                <h1 className={styles.education__title}>Education</h1>
                <div className={styles.education__content}>
                  <div className={styles.education__content__item}>
                    <h2>Bandung Institute of Technology, Indonesia</h2>
                    <p>
                      <b>Bachelor of Informatics Engineering</b>
                    </p>
                    <p>
                      Course: Algorithm and Data Structure, OOP, Database
                      Management, Human Computer Interaction, Machine Learning,
                      Information System, Application Development, etc
                    </p>
                  </div>
                </div>
              </div>

              <div className={`experience ${styles.touch}`}>
                <h1 className={styles.touch__title}>Get In Touch</h1>
                <div className={styles.touch__content}>
                  <div className={styles.touch__content__item}>
                    <p>
                      <a href="mailto:arifingatrahman@gmail.com">Email</a>
                    </p>
                    <FiArrowUpRight />
                  </div>
                  <div className={styles.touch__content__item}>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/arif-rahman-amrul-ghani/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <FiArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactLenis>
      </div>
    </div>
  );
};

export default Navigation;
