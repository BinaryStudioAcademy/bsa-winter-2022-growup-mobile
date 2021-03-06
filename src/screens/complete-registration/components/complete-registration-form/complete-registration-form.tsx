import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { completeRegistrationValidationSchema } from 'src/validation-schemas';
import { FormPasswordInput, Logo, MainButton } from 'src/components';
import { ICompleteRegistrationPayload } from 'src/common/types';
import { AuthRoute, ButtonMode } from 'src/common/enums';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { authActions } from 'src/store/actions';
import { defaultCompleteRegistrationPayload } from '../../common';
import useStyles from './styles';

interface ICompleteRegistrationProps {
  accessToken?: string;
}

const CompleteRegistrationForm: React.FC<ICompleteRegistrationProps> = ({
  accessToken,
}) => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleCompleteRegistration = (values: ICompleteRegistrationPayload) => {
    if (accessToken) {
      dispatch(
        authActions.completeRegistration({
          password: values.password,
          token: accessToken,
        })
      );

      navigation.navigate(AuthRoute.SIGN_IN);
    }
  };

  return (
    <Formik
      initialValues={defaultCompleteRegistrationPayload}
      validationSchema={completeRegistrationValidationSchema}
      validateOnMount={true}
      validateOnChange={true}
      onSubmit={handleCompleteRegistration}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.spaceAround}>
            <Logo />
            <View style={styles.block}>
              <FormPasswordInput
                name="password"
                style={styles.formField}
                label="Password"
              />
              <FormPasswordInput
                name="password_repeat"
                style={styles.formField}
                label="Repeat Password"
              />
            </View>
          </View>
          <View style={styles.block}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              onPress={handleSubmit}
              disabled={!isValid && Boolean(accessToken)}
            >
              Complete Registration
            </MainButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export { CompleteRegistrationForm };
