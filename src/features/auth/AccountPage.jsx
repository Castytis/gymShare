import React from 'react';
import { Segment, Header, Button, Label } from 'semantic-ui-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateUserPassword } from '../../app/firestore/firebaseService';

export default function AccountPage() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Segment>
      <Header dividing size='large' content='Vartotojo paskira' />
      {currentUser.providerId === 'password' &&
      <>
        <Header color='red' sub content='Pakeisti slaptažodį' />
        <p>Įveskite naują slaptažodį ir jį pakartokite </p>
        <Formik
          initialValues={{ newPassword1: '', newPassword2: '' }}
          validationSchema={Yup.object({
            newPassword1: Yup.string().required('Įveskite slaptažodį'),
            newPassword2: Yup.string().oneOf(
              [Yup.ref('newPassword1'), null],
              'Slaptažodžiai nesutampa'
            ),
          })}
          onSubmit={async (values, {setSubmitting, setErrors}) => {
            try {
                await updateUserPassword(values);
            } catch (error) {
                setErrors({auth: error.message}); 
            } finally {
                setSubmitting(false);
            }
          }}
        >
          {({ errors, isSubmitting, isValid, dirty }) => (
            <Form className='ui form'>
              <MyTextInput
                name='newPassword1'
                type='password'
                placeholder='Naujas slaptažodis'
              />
              <MyTextInput
                name='newPassword2'
                type='password'
                placeholder='Pakartokite slaptažodį'
              />
              {errors.auth && (
                <Label
                  basic
                  color='red'
                  style={{ marginBottom: 10 }}
                  content={errors.auth}
                />
              )}
              <Button
                style={{display: 'block'}}
                type='submit'
                disabled={!isValid || isSubmitting || !dirty}
                loading={isSubmitting}
                size='large'
                positive
                content='Atnaujinti slaptažodį'
              />
            </Form>
          )}
        </Formik>
      </>}
    </Segment>
  );
}
