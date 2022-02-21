import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Formik } from 'formik';

import { styles } from '../../styles';
import { MainButton } from 'src/components';
import { defaultLoginPayload } from '../../common';
import { authenticateUserValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput } from 'src/components';
import { IAuthenticateUser } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { setCurrentUser, signIn } from 'src/store/auth/actions';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(
    loginPayload => dispatch(signIn(loginPayload)),
    [dispatch]
  );

  const handleAuthorizedUserData = useCallback(
    () => dispatch(setCurrentUser()),
    [dispatch]
  );

  const handleLoginPressed = (values: IAuthenticateUser) => {
    handleLogin(values)
      .unwrap()
      .catch((err: Error) => {
        // Use react alers/toaster notifications
        Alert.alert(`${err.message}`);
      });
    handleAuthorizedUserData()
      .unwrap()
      .catch((err: Error) => {
        Alert.alert(`${err.message}`);
      });
  };

  return (
    <Formik
      initialValues={defaultLoginPayload}
      validationSchema={authenticateUserValidationSchema}
      validateOnMount={true}
      onSubmit={handleLoginPressed}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.content}>
          <View style={styles.container}>
            <FormInput name="email" style={styles.formField} label="Email" />
            <FormPasswordInput
              name="password"
              style={styles.formField}
              label="Password"
            />
          </View>
          <MainButton
            mode="contained"
            onPress={handleSubmit}
            style={styles.btnLogin}
            disabled={!isValid}
          >
            Log In
          </MainButton>
        </View>
      )}
    </Formik>
  );
};

export { LoginForm };
