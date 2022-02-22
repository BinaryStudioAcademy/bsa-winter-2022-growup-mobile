import React from 'react';
import { Alert, View } from 'react-native';
import { Formik } from 'formik';

import { styles } from '../../styles';
import { MainButton } from 'src/components';
import { defaultLoginPayload } from '../../common';
import { loginValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput } from 'src/components';
import { ISignInPayload } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (values: ISignInPayload) => {
    dispatch(authActions.signIn(values))
      .unwrap()
      .catch((err: Error) => {
        // Use react alerts/toaster notifications
        Alert.alert(`${err.message}`);
      });
  };

  return (
    <Formik
      initialValues={defaultLoginPayload}
      validationSchema={loginValidationSchema}
      validateOnMount={true}
      onSubmit={handleLogin}
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
