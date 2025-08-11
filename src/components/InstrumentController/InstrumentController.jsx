import React, { useState } from "react";
import styles from "./InstrumentControllerStyling.module.css";

export default function InstrumentController({ topLabel, bottomLabel }) {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.controllerContainer}>
      <span className={styles.labelTop}>{topLabel}</span>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className={styles.verticalSlider}
        />
      </div>
      <span className={styles.labelBottom}>{bottomLabel}</span>
    </div>
  );
}
