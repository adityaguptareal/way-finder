import React, { useState } from 'react';
import styles from './BPMToggleStyling.module.css';

const BPMToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles['toggle-cont']}>
      <input
        type="checkbox"
        id="bpm-toggle"
        className={styles['toggle-input']}
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
      />
      <label htmlFor="bpm-toggle" className={styles['toggle-label']}>
        <div className={styles['cont-icon']}>
          <span className={styles.icon}>{isOn ? 'ON' : 'OFF'}</span>
          <span
            className={styles.sparkle}
            style={{
              '--deg': '25',
              '--width': '5',
              '--duration': '20',
            }}
          />
        </div>
      </label>
    </div>
  );
};

export default BPMToggle;
