import React from 'react';
import styles from './index.module.scss';

type Props = {
  imagePos: 'LEFT' | 'RIGHT' | 'CENTER';
  imageSrc: string;
  text: string;
};

// TODO: Create content component, handle image position on desktop and mobile
const Content = ({ imagePos, imageSrc, text }: Props) => {
  return (
    <div
      className={[
        styles.content,
        imagePos == 'CENTER'
          ? styles.content__right
          : imagePos === 'RIGHT'
          ? styles.content__right
          : styles.content__left,
      ].join(' ')}
    >
      <div className={styles.content__image}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={styles.content__text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Content;
