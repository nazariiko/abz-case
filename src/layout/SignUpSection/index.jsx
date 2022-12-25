import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import SignUpForm from '../../components/SignUpForm';
import { useSelector } from 'react-redux';
import Preloader from '../../components/Preloader';
import successImage from '../../assets/images/success-image.svg';

const SignUpSection = () => {
  const registrationFormStatus = useSelector(
    (state) => state.registrationForm.registrationFormStatus,
  );

  return (
    <div className={styles['section']} id="signup-section">
      <Container maxWidth="1170px">
        <div className={styles['signup-form-wrapper']}>
          {registrationFormStatus === 'idle' ? (
            <SignUpForm />
          ) : registrationFormStatus === 'pending' ? (
            <Preloader />
          ) : registrationFormStatus === 'success' ? (
            <div className={styles['register-success-container']}>
              <p>User successfully registered</p>
              <img src={successImage} alt="succes" />
            </div>
          ) : (
            'API Error :('
          )}
        </div>
      </Container>
    </div>
  );
};

export default SignUpSection;
