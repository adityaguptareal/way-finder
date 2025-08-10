import React, { useState } from "react";
import styles from "./MoodSliderStyling.module.css";

const moodLabels = [
  { id: 0, icon: "✈️", text: "3/4" },
  { id: 1, icon: "⏻", text: "Off" },
  { id: 2, icon: "🧭", text: "4/4" },
];

const MoodSlider = () => {
  const [value, setValue] = useState(1);

  // Calculate gradient position
  const percentage = (value / 2) * 100; // since max=2
  const sliderStyle = {
    background: `linear-gradient(to bottom, var(--primary-color) ${percentage}%, #000 ${percentage}%)`
  };

  return (
    <div className={styles.container}>
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={styles.slider}
        style={sliderStyle} // dynamic background
      />

      <div className={styles.notches}>
        {moodLabels.map((_, index) => (
          <div key={index} className={styles.line}></div>
        ))}
      </div>

      <div className={styles.labels}>
        {moodLabels.map(({ id, icon, text }) => (
          <span
            key={id}
            className={`${styles.label} ${
              value === id ? styles.activeLabel : ""
            }`}
          >
            {icon} {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoodSlider;
