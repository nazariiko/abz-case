import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import UsersList from '../../components/UsersList';

const GetRequestSection = () => {
  return (
    <div className={styles['section']} id="users-section">
      <Container maxWidth="1170px">
        <h2 className={styles['heading']}>Working with GET request</h2>
        <UsersList />
      </Container>
    </div>
  );
};

export default GetRequestSection;
