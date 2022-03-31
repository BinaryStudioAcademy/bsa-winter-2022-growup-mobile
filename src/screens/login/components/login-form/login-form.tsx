import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { loginValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput, Logo, MainButton } from 'src/components';
import { ISignInPayload } from 'src/common/types';
import { ButtonMode } from 'src/common/enums';

import {
  getBiometricCredentials,
  hasCredentials as checkBiometry,
} from 'src/helpers';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { defaultLoginPayload } from '../../common';
import useStyles from './styles';

const LoginForm: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const { authLoading } = useAppSelector(state => state.auth);

  const [hasBiometry, setHasBiometry] = useState<boolean>(false);

  useEffect(() => {
    checkBiometry().then(setHasBiometry);
  }, []);

  const handleLogin = (values: ISignInPayload) => {
    dispatch(authActions.signIn(values));
  };

  const handleFingerprint = async () => {
    const credentials = await getBiometricCredentials();

    if (credentials) {
      dispatch(authActions.signInFingerprint(credentials));
    }
  };

  return (
    <Formik
      initialValues={defaultLoginPayload}
      validationSchema={loginValidationSchema}
      validateOnMount={true}
      validateOnChange={true}
      onSubmit={handleLogin}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.spaceAround}>
            <Logo />
            <View style={styles.block}>
              <FormInput name="email" style={styles.formField} label="Email" />
              <FormPasswordInput
                name="password"
                style={[styles.formField, styles.topPadded]}
                label="Password"
              />
            </View>
          </View>
          <View style={styles.block}>
            <MainButton
              mode={hasBiometry ? ButtonMode.OUTLINED : ButtonMode.CONTAINED}
              onPress={handleSubmit}
              disabled={!isValid}
              loading={authLoading}
            >
              Log In
            </MainButton>
            {hasBiometry && (
              <MainButton
                style={styles.topPadded}
                mode={ButtonMode.CONTAINED}
                onPress={handleFingerprint}
                loading={authLoading}
              >
                Log In using fingerprint
              </MainButton>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
