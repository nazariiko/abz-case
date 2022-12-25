import React from 'react';
import styles from './style.module.scss';

const Button = ({ type, typeAttribute = 'text', text, onClick, cssObj, disabled = false }) => {
  return (
    <button
      type={typeAttribute}
      disabled={disabled}
      className={`${styles['button']} ${styles[`button-${type}`]}`}
      onClick={onClick}
      style={cssObj}>
      {text}
    </button>
  );
};

export default Button;
