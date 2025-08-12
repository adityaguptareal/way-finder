import React from 'react';
import './Button.css';

const Button = ({ label, icon, variant = 'gray', onClick }) => {
  const variantClass = variant === 'green' ? 'btn-green' : 'btn-gray';

  return (
    <button onClick={onClick} className={`btn ${variantClass}`}>
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
