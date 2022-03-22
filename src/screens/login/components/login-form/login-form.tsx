import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { loginValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput, MainButton } from 'src/components';
import { ISignInPayload } from 'src/common/types';
import { ButtonMode } from 'src/common/enums';
import { captureFingerprint, checkBiometry } from 'src/helpers';
import { styles } from './styles';
import { useAppDispatch } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { defaultLoginPayload } from '../../common';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [hasBiometry, setHasBiometry] = useState<boolean>(false);

  useEffect(() => {
    checkBiometry().then(setHasBiometry);
  }, []);

  const authenticateWithFinger = async (): Promise<boolean> => {
    if (!hasBiometry) {
      return false;
    }

    const { authenticated } = await captureFingerprint();
    return authenticated;
  };

  const handleLogin = (values: ISignInPayload) => {
    dispatch(authActions.signIn(values));
  };

  const handleFingerprint = async ({ email }: ISignInPayload) => {
    const authenticated = await authenticateWithFinger();

    if (authenticated) {
      dispatch(authActions.signInFingerprint({ email }));
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
      {({ values, isValid, handleSubmit }) => (
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
            style={styles.button}
            mode={hasBiometry ? ButtonMode.OUTLINED : ButtonMode.CONTAINED}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            Log In
          </MainButton>
          {hasBiometry ? (
            <MainButton
              style={styles.button}
              mode={ButtonMode.CONTAINED}
              onPress={() => handleFingerprint(values)}
              disabled={!isValid}
            >
              Log In using fingerprint
            </MainButton>
          ) : null}
        </View>
      )}
    </Formik>
  );
};

export { LoginForm };
