import React, { useState } from 'react';
import styles from './SportSliderStyling.module.css';

const SportSlider = () => {
  const [value, setValue] = useState(0); // 0 = Adventure (top), 1 = Relaxation (bottom)

  const handleChange = (e) => {
    const val = Number(e.target.value);
    setValue(val);

    // Dynamically update the rod fill gradient
    const percentage = val * 100;
    e.target.style.background = `linear-gradient(
      to bottom,
      var(--primary-color) ${percentage}%,
      var(--rod-base-color) ${percentage}%
    )`;
  };

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
          onChange={handleChange}
          className={styles.slider}
          style={{
            background: `linear-gradient(
              to bottom,
              var(--primary-color) ${value * 100}%,
              var(--rod-base-color) ${value * 100}%
            )`,
          }}
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
