import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../../components/Button';

const PromoSection = () => {
  return (
    <div className={styles['promo-section']}>
      <Container maxWidth="1170px">
        <div
          className={styles['promo-bg']}
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/promo-bg.jpeg)`,
          }}>
          <div className={styles['promo-content-wrapper']}>
            <h1>Test assignment for front-end developer</h1>
            <p>
              What defines a good front-end developer is one that has skilled knowledge of HTML,
              CSS, JS with a vast understanding of User design thinking as they'll be building web
              interfaces with accessibility in mind. They should also be excited to learn, as the
              world of Front-End Development keeps evolving.
            </p>
            <Button
              type="yellow"
              text="Sign up"
              width="100px"
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

export default PromoSection;
