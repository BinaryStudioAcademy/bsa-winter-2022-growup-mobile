import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { registerValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput, MainButton } from 'src/components';
import { ISignUpPayload } from 'src/common/types';
import { ButtonMode } from 'src/common/enums';
import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { defaultRegisterPayload } from '../../common';
import useStyles from './styles';

const RegisterForm: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();

  const handleRegister = (values: ISignUpPayload) => {
    dispatch(authActions.signUp(values));
  };

  return (
    <Formik
      initialValues={defaultRegisterPayload}
      validationSchema={registerValidationSchema}
      validateOnMount={true}
      validateOnChange={true}
      onSubmit={handleRegister}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.fields}>
            <FormInput name="email" style={styles.formField} label="Email" />
            <FormInput
              name="firstName"
              style={styles.formField}
              label="First name"
            />
            <FormInput
              name="lastName"
              style={styles.formField}
              label="Last name"
            />
            <FormPasswordInput
              name="password"
              style={styles.formField}
              label="Password"
            />
          </View>
          <MainButton
            style={styles.button}
            mode={ButtonMode.CONTAINED}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            Sign Up
          </MainButton>
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;
