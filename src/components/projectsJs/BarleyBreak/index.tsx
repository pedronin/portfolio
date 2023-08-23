import React from 'react';

import styles from './BarleyBreak.module.scss';

const BarleyBreak: React.FC = () => {
  return (
    <section className={styles.barleybreak}>
      <h2>Пятнашки</h2>
      <div className={styles.barleybreak__content}>
        {/* <iframe src="https://pedronin.github.io/Barley-Break/" width="420" height="630"></iframe> */}
        <iframe src="https://pedronin.github.io/Barley-Break/" width="320" height="430"></iframe>
      </div>
    </section>
  );
};

export default BarleyBreak;
