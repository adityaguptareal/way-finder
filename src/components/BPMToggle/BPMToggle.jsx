import React, { useState } from "react";
import styles from "./BPMToggleStyling.module.css";

const BPMToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return (
    <div className={styles.toggleCont}>
      <input
        type="checkbox"
        id="bpm-toggle"
        className={styles.toggleInput}
        checked={isOn}
        onChange={toggle}
        aria-checked={isOn}
        aria-label="BPM Toggle"
      />
      <label htmlFor="bpm-toggle" className={styles.toggleLabel}>
        <div
          className={`${styles.contIcon} ${isOn ? styles.activeIcon : ""}`}
        >
          <span className={styles.iconText}>
            {isOn ? "ON" : "OFF"}
          </span>
          {isOn && <span className={styles.shine}></span>}
        </div>
      </label>
    </div>
  );
};

export default BPMToggle;
