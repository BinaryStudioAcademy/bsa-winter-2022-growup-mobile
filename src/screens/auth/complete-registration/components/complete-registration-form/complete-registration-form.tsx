import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { completeRegistrationValidationSchema } from 'src/validation-schemas';
import { FormPasswordInput, MainButton } from 'src/components';
import { ICompleteRegistrationPayload } from 'src/common/types';
import { AuthRoute } from 'src/common/enums';

import { useAppNavigation } from 'src/hooks';
import { defaultCompleteRegistrationPayload } from '../../common';
import useStyles from './styles';

const CompleteRegistrationForm: React.FC = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();

  const handleCompleteRegistration = (values: ICompleteRegistrationPayload) => {
    // TODO
    console.log(values);
    navigation.navigate(AuthRoute.SIGN_IN);
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
        <View style={styles.content}>
          <View style={styles.container}>
            <FormPasswordInput
              name="password"
              style={styles.formField}
              label="Password"
            />
            <FormPasswordInput
              name="repeat_password"
              style={styles.formField}
              label="Repeat Password"
            />
            <MainButton
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}
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
