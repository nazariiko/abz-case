import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './style.module.scss';

const Logo = ({ width }) => {
  return (
    <div className={styles['logo']} style={{ width: width }}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;