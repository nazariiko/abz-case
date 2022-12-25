import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const Header = () => {
  return (
    <div className={styles['header']}>
      <Container maxWidth="1170px">
        <div className={styles['header-content-wrapper']}>
          <Logo width="104px" />
          <div className={styles['header-action-buttons-container']}>
            <Button
              type="yellow"
              text="Users"
              onClick={() => {
                document
                  .getElementById('users-section')
                  .scrollIntoView({ block: 'start', behavior: 'smooth' });
              }}
              cssObj={{ width: '100px', marginRight: '10px' }}
            />
            <Button
              type="yellow"
              text="Sign up"
              onClick={() => {
                document
                  .getElementById('signup-section')
                  .scrollIntoView({ block: 'start', behavior: 'smooth' });
              }}
              cssObj={{ width: '100px' }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
