import React from 'react'

import styles from './Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.slider}>
        <iframe src="https://pedronin.github.io/slider" width="780" height="620" scrolling="no"> </iframe>
    </div>
  )
}

export default Slider