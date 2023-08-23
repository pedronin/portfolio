import React from 'react';

import styles from './Slider.module.scss';

import moun1 from '../../../assets/img/slider/moun-1.jpg';
import moun2 from '../../../assets/img/slider/moun-2.jpg';
import moun3 from '../../../assets/img/slider/moun-3.jpg';
import moun4 from '../../../assets/img/slider/moun-4.jpg';
import moun5 from '../../../assets/img/slider/moun-5.jpg';
import moun6 from '../../../assets/img/slider/moun-6.jpg';
import moun7 from '../../../assets/img/slider/moun-7.jpg';

const Slider = () => {
  const itemsRef = React.useRef(null);
  let items;
  React.useEffect(() => {
    // items = itemsRef.current;
    // for (let i = 0; i < items.length; i++) {
    //   const img = document.createElement('img');
    //   img.src = items[i].src;
    //   img.classList.add('slider__nav-item');
    //   nav.appendChild(img);
    // }

    console.log(itemsRef.current);
  }, [itemsRef]);

  return (
    <>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider__stage}>
          <div className={styles.slider__stage_firstline}>
            <div ref={itemsRef} className={styles.slider__stage_line}>
              <img src={moun1} alt="" className={styles.slider__stage_item} />
              <img src={moun2} alt="" className={styles.slider__stage_item} />
              <img src={moun3} alt="" className={styles.slider__stage_item} />
              <img src={moun4} alt="" className={styles.slider__stage_item} />
              <img src={moun5} alt="" className={styles.slider__stage_item} />
              <img src={moun6} alt="" className={styles.slider__stage_item} />
              <img src={moun7} alt="" className={styles.slider__stage_item} />
              <img src={moun1} alt="" className={styles.slider__stage_item} />
              <img src={moun2} alt="" className={styles.slider__stage_item} />
              <img src={moun3} alt="" className={styles.slider__stage_item} />
              <img src={moun4} alt="" className={styles.slider__stage_item} />
              <img src={moun5} alt="" className={styles.slider__stage_item} />
              <img src={moun6} alt="" className={styles.slider__stage_item} />
              <img src={moun7} alt="" className={styles.slider__stage_item} />
            </div>
          </div>
          <div className={styles.slider__prev}>
            {/* //   <i className={styles.fa-solid fa-caret-up"></i> */}
            /\
          </div>
          <div className={styles.slider__next}>
            {/* //   <i className={styles.fa-solid fa-caret-up"></i> */}
            /\
          </div>
        </div>
        <div className={styles.slider__nav}>
          <div className={styles.slider__nav_line}></div>
          <div className={styles.slider__nav_border}></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
