import React from 'react';
import styles from './style.module.scss';
import Tooltip from '../Tooltip';

const User = ({ photo, name, position, email, phone, id }) => {
  return (
    <div className={styles['wrapper']}>
      <img className={styles['user-image']} src={photo} alt="user-img" />
      <Tooltip
        text={name}
        cssObject={{
          marginBottom: '20px',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '16px',
          lineHeight: '26px',
        }}
      />
      <Tooltip
        text={position}
        cssObject={{
          marginBottom: '0px',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '16px',
          lineHeight: '26px',
        }}
      />
      <Tooltip
        text={email}
        cssObject={{
          marginBottom: '0px',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '16px',
          lineHeight: '26px',
        }}
      />
      <Tooltip
        text={phone}
        cssObject={{
          marginBottom: '0px',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: '16px',
          lineHeight: '26px',
        }}
      />
    </div>
  );
};

export default User;
