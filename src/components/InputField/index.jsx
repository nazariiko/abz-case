import React from 'react';
import styles from './style.module.scss';

const InputField = ({ id, name, value, handleChange, labelText, helperText, error, cssObj }) => {
  return (
    <div
      style={cssObj}
      className={`${styles['input-container']} ${error ? styles['input-container__error'] : ''}`}>
      <input id={id} name={name} value={value} onChange={handleChange} placeholder=" " />
      <label htmlFor={name}>{labelText}</label>
      {error ? <p>{error}</p> : helperText ? <p>{helperText}</p> : ''}
    </div>
  );
};

export default InputField;
