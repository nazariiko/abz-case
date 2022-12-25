import React from 'react';
import styles from './style.module.scss';
import { getUsers } from '../../api/getUsers';
import { useAsync } from '../../hooks/useAsync';
import User from '../User';
import Button from '../Button';
import Preloader from '../Preloader';
import { useSelector } from 'react-redux';

const UsersList = () => {
  const registrationFormStatus = useSelector(
    (state) => state.registrationForm.registrationFormStatus,
  );
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(6);
  const { status, data, error, refreshAsyncCallback } = useAsync(getUsers, [page, count], [page]);
  const [users, setUsers] = React.useState([]);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  React.useEffect(() => {
    if (status === 'success') {
      setUsers((prevUsers) => [...prevUsers, ...data.users]);
      if (!data.links['next_url']) {
        setHasNextPage(false);
      }
    }
  }, [data]);

  React.useEffect(() => {
    if (registrationFormStatus === 'success') {
      setUsers([]);
      const page = 1;
      const count = 6;
      refreshAsyncCallback([page, count]);
    }
  }, [registrationFormStatus]);

  if (status === 'success') {
    return (
      <div className={styles['container']}>
        <div className={styles['users-list']}>
          {users
            .sort(
              (a, b) =>
                new Date(b['registration_timestamp']) - new Date(a['registration_timestamp']),
            )
            .map((user) => (
              <User {...user} key={user.id} />
            ))}
        </div>
        <div className={styles['load-more-container']}>
          {hasNextPage && (
            <Button
              type="yellow"
              text="Show more"
              onClick={handleNextPage}
              cssObj={{ width: '120px' }}
            />
          )}
        </div>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className={styles['container']}>
        <div className={styles['users-list']}>
          {users
            .sort(
              (a, b) =>
                new Date(b['registration_timestamp']) - new Date(a['registration_timestamp']),
            )
            .map((user) => (
              <User {...user} key={user.id} />
            ))}
        </div>
        <Preloader />
        <div className={styles['load-more-container']}>
          {hasNextPage && (
            <Button
              type="yellow"
              text="Show more"
              onClick={handleNextPage}
              disabled={true}
              cssObj={{ width: '120px' }}
            />
          )}
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={styles['container']}>
        <div className={styles['users-list']}>
          {users
            .sort(
              (a, b) =>
                new Date(b['registration_timestamp']) - new Date(a['registration_timestamp']),
            )
            .map((user) => (
              <User {...user} key={user.id} />
            ))}
        </div>
        <div className={styles['error-container']}>
          <p>Oops. Error {error}</p>
        </div>
        <div className={styles['load-more-container']}>
          {hasNextPage && (
            <Button
              type="yellow"
              text="Show more"
              onClick={handleNextPage}
              disabled={true}
              cssObj={{ width: '120px' }}
            />
          )}
        </div>
      </div>
    );
  }
};

export default UsersList;
