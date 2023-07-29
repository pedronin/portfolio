import React from 'react'
import styles from './Slider.module.scss'

const Slider: React.FC = () => {
  return (
    <div className={styles.slider__wrapper}>
            <div className={styles.slider__stage}>
                <div className={styles.slider__stage_firstline}>
                    <div className={styles.slider__stage_line}>
                        {[...new Array(7)].map((_,i) => (
                            <img src={`./img/moun-${i+1}.jpg`} alt="" className={styles.slider__stage_item} />
                        ))}
                    </div>
                </div>
                <div className={styles.slider__prew}>
                    {/* <i className={styles.fa-solid fa-caret-up"></i> */}
                </div>
                <div className={styles.slider__next}>
                    {/* <i className={styles.fa-solid fa-caret-up"></i> */}
                </div>
            </div>
            <div className={styles.slider__nav}>
                <div className={styles.slider__nav_line}>

                </div>
                <div className={styles.slider__nav_border}></div>
            </div>
        </div>
  )
}

export default Slider