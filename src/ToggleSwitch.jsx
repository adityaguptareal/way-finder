import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`toggle-switch ${enabled ? 'enabled' : 'disabled'}`}
      onClick={() => setEnabled(!enabled)}
    >
      <div className={`toggle-thumb ${enabled ? 'move-right' : 'move-left'}`}></div>
      {!enabled && (
        <FiLock className="toggle-lock-icon" size={12} />
      )}
    </div>
  );
};

export default ToggleSwitch;
