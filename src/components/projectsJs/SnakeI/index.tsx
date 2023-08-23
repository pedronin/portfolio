import React from 'react';

import styles from './Snake.module.scss';

const SnakeI: React.FC = () => {
  React.useEffect(() => {
    window.addEventListener('touchstart', () => {});
  }, [])
  
  return (
    <div className={styles.snake}>
      <iframe
        src="https://pedronin.github.io/snake"
        width="340"
        height="500"
        scrolling="no"></iframe>
    </div>
  );
};

export default SnakeI;
