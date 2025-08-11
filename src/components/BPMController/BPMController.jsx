import React, { useState } from "react";
import styles from "./BPMCotrollerStyling.module.css";

export default function BPMController() {
  const min = 126;
  const max = 146;
  const step = 5;
  const marks = [126, 131, 136, 141, 146];
  const [value, setValue] = useState(136);

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className={styles.slider}
        />
        <div className={styles.ticks}>
          {marks.map((mark) => (
            <div key={mark} className={styles.tick}>
              <span>{mark}</span>
              <div className={styles.tickLine}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
