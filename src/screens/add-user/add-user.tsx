import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import { addUserValidationSchema } from 'src/validation-schemas';
import { FormInput, FormSelect, MainButton } from 'src/components';
import { ButtonMode } from 'src/common/enums';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { usersActions } from 'src/store/users';
import { IAddUserPayload } from 'src/common/types';
import { defaultAddUserPayload, roleTypeOptions } from './common';
import useStyles from './styles';

const AddUser: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleAddUser = (values: IAddUserPayload) => {
    dispatch(usersActions.addUser(values)).unwrap().then(handleBack);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Formik
      initialValues={defaultAddUserPayload}
      validationSchema={addUserValidationSchema}
      validateOnBlur={true}
      onSubmit={handleAddUser}
    >
      {({ isValid, handleSubmit }) => (
        <View style={styles.screen}>
          <FormSelect
            name="role"
            label="Role"
            placeholder="Select user role"
            list={roleTypeOptions}
            containerStyle={styles.topPadded}
          />
          <FormInput
            name="email"
            label="Email"
            placeholder="Enter email"
            style={styles.topPadded}
          />
          <View style={[styles.buttons, styles.topPadded]}>
            <MainButton
              mode={ButtonMode.CONTAINED}
              disabled={!isValid}
              compact={true}
              onPress={handleSubmit}
            >
              Invite
            </MainButton>
            <MainButton
              mode={ButtonMode.TEXT}
              compact={true}
              onPress={handleBack}
            >
              Back
            </MainButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default AddUser;
