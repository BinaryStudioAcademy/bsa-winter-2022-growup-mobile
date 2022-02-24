import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { loginValidationSchema } from 'src/validation-schemas';
import { FormInput, FormPasswordInput, MainButton } from 'src/components';
import { ISignInPayload } from 'src/common/types';
import { defaultLoginPayload } from '../../common';
import { ButtonMode } from 'src/common/enums';
import { captureFingerprint, checkBiometry } from 'src/helpers';
import { styles } from './styles';

type LoginFormProps = {
  onSubmit: (data: ISignInPayload) => void;
  onSubmitFingerprint: (email: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onSubmitFingerprint,
}) => {
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
    onSubmit(values);
  };

  const handleFingerprint = async (values: ISignInPayload) => {
    const authenticated = await authenticateWithFinger();

    if (authenticated) {
      onSubmitFingerprint(values.email);
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
