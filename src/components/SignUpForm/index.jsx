import React from 'react';
import styles from './style.module.scss';
import { Formik, Field } from 'formik';
import InputField from '../InputField';
import Button from '../Button';
import { useAsync } from '../../hooks/useAsync';
import { getPositions } from '../../api/getPositions';
import { postUser } from '../../api/postUser';
import Preloader from '../Preloader';
import { useDispatch } from 'react-redux';
import { changeFormStatus } from '../../redux/slices/registrationFormSlice';

const SignUpForm = () => {
  const { status, data, error } = useAsync(getPositions, [], []);
  const dispatch = useDispatch();

  return (
    <div className={styles['sign-up-form-container']}>
      <h2 className={styles['form-heading']}>Working with POST request</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position: data?.positions ? data.positions[0]['id'] : null,
          imageFile: null,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
              values.email,
            )
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.name) {
            errors.name = 'Required';
          }

          if (!values.phone) {
            errors.phone = 'Required (+38 (XXX) XXX - XX - XX)';
          } else if (!/^[\+]{0,1}380([0-9]{9})$/i.test(values.phone)) {
            errors.phone = '+38 (XXX) XXX - XX - XX';
          }

          if (!values.imageFile) {
            errors.imageFile = 'Required';
          } else if (values.imageFile.type !== 'image/jpeg') {
            errors.imageFile = 'The photo format must be jpeg/jpg type';
          } else if (values.imageFile.size / 1024 / 1024 > 5) {
            errors.imageFile = 'The photo size must not be greater than 5 Mb';
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          dispatch(changeFormStatus('pending'));
          const isSuccess = await postUser(values);
          if (isSuccess) {
            dispatch(changeFormStatus('success'));
          } else {
            dispatch(changeFormStatus('error'));
          }
          setSubmitting(false);
          resetForm();
        }}>
        {({ values, touched, errors, handleChange, handleSubmit, isSubmitting, setFieldValue }) => {
          return (
            <form className={styles['form']}>
              <InputField
                id="name"
                name="name"
                labelText="Your name"
                helperText=""
                cssObj={{ marginBottom: '50px' }}
                value={values.name}
                handleChange={handleChange}
                error={errors.name && touched.name ? errors.name : null}
              />
              <InputField
                id="email"
                name="email"
                labelText="Email"
                helperText=""
                cssObj={{ marginBottom: '50px' }}
                value={values.email}
                handleChange={handleChange}
                error={errors.email && touched.email ? errors.email : null}
              />
              <InputField
                id="phone"
                name="phone"
                labelText="Phone"
                helperText="+38 (XXX) XXX - XX - XX"
                cssObj={{ marginBottom: '43px' }}
                value={values.phone}
                handleChange={handleChange}
                error={errors.phone && touched.phone ? errors.phone : null}
              />
              <div className={styles['select-position-container']}>
                <h3>Select your position</h3>
                {status === 'pending' && <Preloader />}
                {status === 'success' && (
                  <div className={styles['positions-radio-group']}>
                    {data.positions &&
                      data.positions.map((position) => (
                        <label key={position.id}>
                          <Field
                            type="radio"
                            name="position"
                            value={position.id}
                            checked={values.position == position.id}
                          />
                          {position.name}
                        </label>
                      ))}
                  </div>
                )}
              </div>
              <div
                className={`${styles['upload-photo-container']} ${
                  errors.imageFile && touched.imageFile
                    ? styles['upload-photo-container__error']
                    : ''
                }`}>
                <input
                  type="file"
                  name="imageFile"
                  className={styles['upload-input']}
                  onChange={(event) => {
                    setFieldValue('imageFile', event.currentTarget.files[0]);
                  }}
                />
                <div className={styles['upload-photo-button']}>Upload</div>
                <div className={styles['upload-photo-value-container']}>
                  {values.imageFile ? values.imageFile.name : 'Upload your photo'}
                </div>
                {errors.imageFile && touched.imageFile && (
                  <div className={styles['upload-image-error-msg']}>{errors.imageFile}</div>
                )}
              </div>
              <Button
                type="gray"
                typeAttribute="submit"
                text="Sign up"
                onClick={handleSubmit}
                disabled={isSubmitting}
                cssObj={{ width: '100px' }}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
