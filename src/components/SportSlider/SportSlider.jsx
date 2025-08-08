import React, { useState } from 'react';
import styles from './SportSliderStyling.module.css';

const SportSlider = () => {
  const [value, setValue] = useState(0); // 0 = Adventure (top), 1 = Relaxation (bottom)

  return (
    <div className={styles.container}>
      <div className={styles.verticalWrapper}>
        <div
          className={`${styles.labelTop} ${
            value <= 0.5 ? styles.activeLabel : ''
          }`}
        >
          Adventure
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className={styles.slider}
        />

        <div
          className={`${styles.labelBottom} ${
            value > 0.5 ? styles.activeLabel : ''
          }`}
        >
          Relaxation
        </div>
      </div>
    </div>
  );
};

export default SportSlider;
