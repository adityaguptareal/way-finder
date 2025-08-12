import React, { useState } from 'react';
import styles from './MoodSliderStyling.module.css';

const MoodSlider = () => {
  const [value, setValue] = useState(1); // 0 = 3/4, 1 = Off, 2 = 4/4

  return (
    <div className={styles.container}>
      {/* Vertical slider */}
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={styles.slider}
      />

      {/* Notches */}
      <div className={styles.notches}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Labels */}
      <div className={styles.labels}>
        <span className={styles.labelTop}>✈️ 3/4</span>
        <span className={styles.labelCenter}>⏻ Off</span>
        <span className={styles.labelBottom}>🧭 4/4</span>
      </div>
    </div>
  );
};

export default MoodSlider;
