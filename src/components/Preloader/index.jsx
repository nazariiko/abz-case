import React from 'react';
import preloader from '../../assets/icons/preloader.svg';
import styles from './style.module.scss';

const Preloader = () => {
  return (
    <div className={styles['preloader-wrapper']}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;