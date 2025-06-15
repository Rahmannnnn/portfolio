'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { IProjectDetail, PROJECT_DETAILS } from '@/constants/PROJECT_DETAIL';
import { notFound } from 'next/navigation';
import { LenisOptions } from 'lenis';
import { useGSAP } from '@gsap/react';
import { TransitionContext } from '@/contexts/TransitionContext';
import { Wrapper } from '@/components/Wrapper';
import EffectCanvas from './components/EffectCanvas';
import gsap from 'gsap';
import { HTMLStringToReact } from '@/utils/text';
import { getIcon } from '@/utils/icons';

const ProjectDetail = ({ params }: { params: { project_slug: string } }) => {
  let index = PROJECT_DETAILS.findIndex(
    (item) => item.project_slug === params.project_slug
  );

  if (index == -1) {
    notFound();
  }

  const lenis: LenisOptions = {
    lerp: 1,
  };

  const [projectDetail, setProjectDetail] = useState<IProjectDetail>({
    project_slug: '',
    title: '',
    year: '',
    start_date: new Date(),
    end_date: new Date(),
    overview: '',
    images: [],
    tools: [],
  });

  useEffect(() => {
    let index = PROJECT_DETAILS.findIndex(
      (item) => item.project_slug === params.project_slug
    );

    setProjectDetail({ ...PROJECT_DETAILS[index] });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (imageRef.current) {
        let tl = gsap.timeline();
        tl.set(imageRef.current, {
          opacity: 0,
        })
          .to(imageRef.current, {
            duration: 1.8,
            // do nothing
          })
          .to(imageRef.current, {
            opacity: 1,
            duration: 0.75,
            ease: 'power4.inOut',
          });
      }
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.set('.project__detail__title__span', {
        y: 500,
      });

      gsap.to('.project__detail__title__span', {
        y: 0,
        duration: 2,
        stagger: 0.2,
        delay: 1,
        ease: 'power4.inOut',
      });

      gsap.set('.project__detail__title__year', {
        y: -500,
      });

      gsap.to('.project__detail__title__year', {
        y: 0,
        duration: 2,
        stagger: 0.2,
        delay: 1,
        ease: 'power4.inOut',
      });
    },
    { scope: containerRef }
  );

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const { timeline } = useContext(TransitionContext);
  useGSAP(
    () => {
      timeline.add(
        gsap.to('.project__detail', {
          opacity: 0,
          duration: 1,
          ease: 'power4.inOut',
        })
      );
      timeline.add(
        gsap.to('.container__image', {
          opacity: 0,
          duration: 1,
          ease: 'power4.inOut',
        }),
        '<'
      );
    },
    { scope: containerRef }
  );

  if (index !== -1) {
    return (
      <Wrapper lenis={lenis}>
        <div className={` ${styles.container}`} ref={containerRef}>
          <div
            className={`project__detail ${styles.container__content} ${
              scrollPosition > 400 ? styles.hide : ''
            }`}
          >
            <div className={styles.container__content__left}>
              <div
                style={{
                  overflow: 'hidden',
                  height: 'fit-content',
                  paddingBottom: '1rem',
                }}
              >
                <h1 className="project__detail__title__span">
                  {projectDetail.title}
                </h1>
              </div>
              <div className={styles.year}>
                <div className="project__detail__title__year">
                  <div className={styles.tools}>
                    {projectDetail.tools.map((item) => {
                      return getIcon(item);
                    })}
                  </div>
                  <p>{`[${projectDetail.year}]`}</p>
                </div>
              </div>
            </div>
            <div className={styles.container__content__right}>
              <div className={styles.overview}>
                <div
                  style={{
                    overflow: 'hidden',
                    height: 'fit-content',
                    paddingBottom: '1rem',
                  }}
                >
                  <h2 className="project__detail__title__span">Overview</h2>
                </div>
                <div
                  style={{
                    overflow: 'hidden',
                  }}
                  className={styles.overview__desc}
                >
                  <div className="project__detail__title__year">
                    {HTMLStringToReact(projectDetail.overview)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`container__image ${styles.container__image}`}
          >
            {projectDetail.project_slug && (
              <EffectCanvas
                projectDetail={projectDetail}
                project_slug={params.project_slug}
                images={projectDetail.images}
              />
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
};

export default ProjectDetail;
