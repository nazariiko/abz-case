import React from 'react';
import styles from './style.module.scss';

const Container = ({ maxWidth, children }) => {
  return (
    <div className={styles['container']} style={{maxWidth: maxWidth}}>
      {children}
    </div>
  );
};

export default Container;