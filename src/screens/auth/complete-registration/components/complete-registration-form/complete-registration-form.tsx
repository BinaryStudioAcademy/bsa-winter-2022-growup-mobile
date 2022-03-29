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
// import { authActions } from 'src/store/actions';

interface ICompleteRegistrationProps {
  accessToken?: string;
}

const CompleteRegistrationForm: React.FC<ICompleteRegistrationProps> = ({
  accessToken,
}) => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  // const dispatch = useAppDispatch();

  const handleCompleteRegistration = (values: ICompleteRegistrationPayload) => {
    // const { token } = dispatch(authActions.verifyToken(accessToken));
    // dispatch(authActions.completeRegistration({ payload: values, token: '' }));
    console.log(accessToken, values);
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
        <View style={styles.container}>
          <View style={styles.fields}>
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
