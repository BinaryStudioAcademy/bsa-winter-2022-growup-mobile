import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { Formik } from 'formik';

import { styles } from '../../styles';
import { MainButton } from 'src/components';
import { AppColor } from 'src/common/enums';
import { defaultLoginPayload } from '../../common';
import { authenticateUserValidationSchema } from 'src/validation-schemas';
import { FormInput } from 'src/components';
import { IAuthenticateUser } from 'src/common/types';

const LoginForm: React.FC = () => {
  const [secure, setSecure] = useState(true);

  const onLoginPressed = (values: IAuthenticateUser) => {
    // TODO authentication logic
    console.log('Received data from the form: ', values);
  };

  const onChangePasswordSecure = () => {
    setSecure(!secure);
  };

  return (
    <Formik
      initialValues={defaultLoginPayload}
      validationSchema={authenticateUserValidationSchema}
      validateOnMount={true}
      onSubmit={onLoginPressed}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.content}>
          <View style={styles.container}>
            <FormInput
              name="email"
              style={styles.formField}
              outlineColor={AppColor.INPUT_BACKGROUND}
              label="Email"
            />
            <FormInput
              name="password"
              style={styles.formField}
              outlineColor={AppColor.INPUT_BACKGROUND}
              label="Password"
              secureTextEntry={secure}
              right={
                <TextInput.Icon
                  name="eye"
                  style={styles.formIcon}
                  onPress={onChangePasswordSecure}
                />
              }
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
