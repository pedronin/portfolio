import React from 'react';

import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={styles.slider}>
      <h2>Слайдер с плавающей навигацией</h2>
      <div className={styles.slider__content}>
        <iframe
          src="https://pedronin.github.io/slider"
          width="780"
          height="620"
          scrolling="no"></iframe>
      </div>
    </section>
  );
};

export default Slider;
