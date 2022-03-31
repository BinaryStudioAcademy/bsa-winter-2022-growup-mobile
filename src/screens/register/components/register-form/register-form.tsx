import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { registerValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput, Logo, MainButton } from 'src/components';
import { ISignUpPayload } from 'src/common/types';
import { ButtonMode } from 'src/common/enums';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { defaultRegisterPayload } from '../../common';
import useStyles from './styles';

const RegisterForm: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const { authLoading } = useAppSelector(state => state.auth);

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
          <View style={styles.spaceAround}>
            <Logo />
            <View style={styles.block}>
              <FormInput name="email" style={styles.formField} label="Email" />
              <FormInput
                name="firstName"
                style={[styles.formField, styles.topPadded]}
                label="First name"
              />
              <FormInput
                name="lastName"
                style={[styles.formField, styles.topPadded]}
                label="Last name"
              />
              <FormPasswordInput
                name="password"
                style={[styles.formField, styles.topPadded]}
                label="Password"
              />
            </View>
          </View>
          <View style={styles.block}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              onPress={handleSubmit}
              disabled={!isValid}
              loading={authLoading}
            >
              Sign Up
            </MainButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;
